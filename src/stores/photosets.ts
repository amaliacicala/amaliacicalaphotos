import { defineStore } from 'pinia';
import { fetchAlbum } from '../api/photosets';
import type { PhotosetsState } from '../types/Photosets';

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
