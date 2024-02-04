import axios from 'axios';

export const fetchHomeImages = async () => {
  try {
    const res = await axios.get('https://api.flickr.com/services/rest', {
      params: {
        method: 'flickr.photosets.getPhotos',
        api_key: import.meta.env.VITE_API_KEY,
        photoset_id: import.meta.env.VITE_PHOTOSET,
        extras: 'url_c, url_o',
        page: 1,
        format: 'json',
        nojsoncallback: 1,
        per_page: 30
      }
    });

    return res.data;
  } catch (err: any) {
    return Promise.reject(err.response ? err.response.data : err);
  }
};
