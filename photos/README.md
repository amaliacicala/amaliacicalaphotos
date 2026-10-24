# Photo albums

Each folder in here becomes one album on amaliacicala.com/photos.

## Add an album

1. Create a folder named after the show, for example `benthos-arctangent-2026`.
   The folder name becomes the web address: `/photos/benthos-arctangent-2026`.
2. Put the photos in it (JPG, PNG, WebP or AVIF). Full-size exports are fine:
   the site makes web-sized copies when it builds.
   Photos show in filename order, so number them if the order matters.
3. Add a file called `album.json` with the details:

```json
{
  "title": "Benthos",
  "event": "ArcTanGent",
  "place": "Bristol, UK",
  "date": "2026-08-20",
  "cover": "DSC01234.jpg",
  "description": "Optional one or two sentences about the show."
}
```

Only `title` really matters; everything else is optional. `cover` picks the
album's thumbnail (otherwise the first photo is used). `date` can be
`2026-08-20`, `2026-08` or `2026`. Albums are listed newest first.

## Remove or hide an album

Delete its folder, or rename it so it starts with `_` (for example
`_old-benthos`) to hide it without deleting the photos.

## From the GitHub website

Open the `photos` folder on GitHub, choose **Add file → Upload files**, and
drag in the photos and `album.json`. In the path box, type the new folder name
followed by `/` before committing. Netlify rebuilds the site in a minute or two.
