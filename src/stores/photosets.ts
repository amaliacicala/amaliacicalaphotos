import { defineStore } from 'pinia';
import { fetchAlbum } from '../api/photosets';
import type { PhotosetsState } from '../types/Photosets';
import photosetsData from '../data/photosets.json';

export const usePhotosetsStore = defineStore({
  id: 'photosets',
  state: (): PhotosetsState => ({
    loading: true,
    images: [],
    albumData: {
      title: '',
      description: ''
    }
  }),

  actions: {
    async loadAlbum(apiKey: string, photosetId: string) {
      try {
        const homeImagesData = await fetchAlbum(apiKey, photosetId);

        this.images = homeImagesData.photoset.photo;

        if (!this.albumData.title && !this.albumData.description) {
          const album = photosetsData.albums.find((album) => album.photosetId === photosetId);
          if (album) {
            this.albumData.title = album.title;
            this.albumData.description = album.description;
          }
        }
      } catch (err) {
        return Promise.reject(err);
      }
    },
    setAlbumData(title: string, description: string) {
      this.albumData.title = title;
      this.albumData.description = description;
    }
  }
});
