# amaliacicala.com

Portfolio site for Amalia Cicala: artist management, music marketing and concert photography.

Built with Vue 3, Vue Router and Vite. Hosted on Netlify.

## Run locally

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
```

## Content

- **Portfolio page:** `src/views/HomeView.vue`
- **Styles and colours:** `src/styles/main.css` (colour tokens at the top)
- **Photos of Amalia used on the page:** `public/img/me/`
- **Photography albums:** `photos/` (see `photos/README.md` for how to add one)

`npm run photos` (run automatically by `dev` and `build`) turns the `photos/`
folder into web-sized images in `public/photos-gen/`, the album list in
`src/content/photos.generated.json`, and `public/sitemap.xml`. Those files are
generated, so they are not committed.
