import { defineStore } from 'pinia';
import { fetchHomeImages } from '../api/photosets';
import type { PhotosetsState } from '../types/Photosets';

export const usePhotosetsStore = defineStore({
  id: 'photosets',
  state: (): PhotosetsState => ({
    loading: true,
    images: []
  }),

  actions: {
    async loadHomeImages() {
      try {
        const homeImagesData = await fetchHomeImages();

        this.images = homeImagesData.photoset.photo;

        this.loading = false;
      } catch (err) {
        return Promise.reject(err);
      }
    }
  }
});
