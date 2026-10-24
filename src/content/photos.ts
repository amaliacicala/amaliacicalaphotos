import data from './photos.generated.json';

export interface Photo {
  file: string;
  thumb: string;
  full: string;
  width: number;
  height: number;
  alt: string;
}

export interface Album {
  slug: string;
  title: string;
  event: string;
  place: string;
  date: string;
  description: string;
  cover: Photo;
  photos: Photo[];
}

export const albums = (data as { albums: Album[] }).albums;

export function findAlbum(slug: string) {
  return albums.find((a) => a.slug === slug);
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "2026-08-20" -> "20 Aug 2026"; "2026-08" -> "Aug 2026" */
export function formatDate(date: string) {
  const [y, m, d] = date.split('-').map(Number);
  if (!y) return '';
  if (!m) return String(y);
  return `${d ? d + ' ' : ''}${MONTHS[m - 1]} ${y}`;
}

export function albumLine(a: Album) {
  return [a.event, a.place, formatDate(a.date)].filter(Boolean).join(' · ');
}
