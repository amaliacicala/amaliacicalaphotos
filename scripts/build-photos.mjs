// Builds the photography galleries from the `photos/` folder.
//
// Each album is one folder inside `photos/`, holding the original images and
// an optional `album.json`:
//
//   photos/
//     benthos-arctangent-2026/
//       album.json        { "title": "Benthos", "event": "ArcTanGent", "place": "Bristol, UK",
//                           "date": "2026-08-20", "cover": "DSC01234.jpg" }
//       DSC01234.jpg
//       DSC01240.jpg
//
// For every image this script writes a small and a large WebP version to
// `public/photos-gen/<album>/`, and a list of all albums to
// `src/content/photos.generated.json`, which the gallery pages read.
// Photos appear in filename order; albums appear newest first.

import { readdir, readFile, mkdir, stat, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, parse } from 'node:path';
import sharp from 'sharp';

const SRC = 'photos';
const OUT = 'public/photos-gen';
const MANIFEST = 'src/content/photos.generated.json';
const SIZES = { thumb: 720, full: 2000 };
const SITE = 'https://amaliacicala.com';
const IMAGE = /\.(jpe?g|png|webp|avif|tiff?)$/i;

const slugify = (s) =>
  s
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

const titleFromFolder = (name) =>
  name.replace(/[-_]+/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

async function isFresh(out, src) {
  if (!existsSync(out)) return false;
  const [o, s] = await Promise.all([stat(out), stat(src)]);
  return o.mtimeMs >= s.mtimeMs;
}

async function buildAlbum(folder) {
  const dir = join(SRC, folder);
  const slug = slugify(folder);
  let meta = {};
  if (existsSync(join(dir, 'album.json'))) {
    try {
      meta = JSON.parse(await readFile(join(dir, 'album.json'), 'utf8'));
    } catch (err) {
      throw new Error(`${dir}/album.json is not valid JSON: ${err.message}`);
    }
  }

  const files = (await readdir(dir)).filter((f) => IMAGE.test(f)).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
  if (!files.length) return null;

  await mkdir(join(OUT, slug), { recursive: true });
  const title = meta.title || titleFromFolder(folder);
  const photos = [];

  for (const file of files) {
    const src = join(dir, file);
    const base = slugify(parse(file).name);
    const out = {};
    let width, height;

    for (const [key, size] of Object.entries(SIZES)) {
      const name = `${base}-${size}.webp`;
      const target = join(OUT, slug, name);
      if (!(await isFresh(target, src))) {
        await sharp(src).rotate().resize({ width: size, height: size, fit: 'inside', withoutEnlargement: true }).webp({ quality: key === 'thumb' ? 78 : 84 }).toFile(target);
      }
      out[key] = `/photos-gen/${slug}/${name}`;
      if (key === 'full') ({ width, height } = await sharp(target).metadata());
    }

    photos.push({ file, thumb: out.thumb, full: out.full, width, height, alt: `${title}${meta.event ? `, ${meta.event}` : ''}` });
  }

  const cover = photos.find((p) => p.file === meta.cover) || photos[0];
  return {
    slug,
    title,
    event: meta.event || '',
    place: meta.place || '',
    date: meta.date || '',
    description: meta.description || '',
    cover,
    photos
  };
}

async function main() {
  await mkdir('src/content', { recursive: true });
  const albums = [];
  if (existsSync(SRC)) {
    const entries = await readdir(SRC, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory() || e.name.startsWith('.') || e.name.startsWith('_')) continue;
      const album = await buildAlbum(e.name);
      if (album) albums.push(album);
    }
  }
  albums.sort((a, b) => (b.date || '').localeCompare(a.date || '') || a.title.localeCompare(b.title));
  await writeFile(MANIFEST, JSON.stringify({ albums }, null, 2) + '\n');

  // Sitemap, so search engines find every album page
  const urls = ['/', '/photos', ...albums.map((a) => `/photos/${a.slug}`)];
  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n') +
    '\n</urlset>\n';
  await writeFile('public/sitemap.xml', sitemap);
  const count = albums.reduce((n, a) => n + a.photos.length, 0);
  console.log(`photos: ${albums.length} album(s), ${count} photo(s)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
