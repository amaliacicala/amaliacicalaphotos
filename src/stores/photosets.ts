import { defineStore } from 'pinia';
import { fetchAlbum } from '../api/photosets';
import type { PhotosetsState } from '../types/Photosets';

export const usePhotosetsStore = defineStore({
  id: 'photosets',
  state: (): PhotosetsState => ({
    loading: true,
    images: []
  }),

  actions: {
    async loadAlbum(apiKey: string, photosetId: string) {
      try {
        const homeImagesData = await fetchAlbum(apiKey, photosetId);

        this.images = homeImagesData.photoset.photo;

        console.log(this.images);

        this.loading = false;
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
