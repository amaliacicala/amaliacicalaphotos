<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePhotosetsStore } from '../stores/photosets';
import photosets from '../data/photosets.json';

const photosetsStore = usePhotosetsStore();
const { loading, images } = storeToRefs(photosetsStore);

onMounted(async () => {
  for (const album of photosets.albums) {
    await photosetsStore.loadAlbum(import.meta.env.VITE_FLICKR_API_KEY, album.photosetId);
  }
  loading.value = false;
});
</script>

<template>
  <div v-if="loading" class="d-flex justify-center align-center h-screen">
    <v-progress-circular indeterminate color="black" bg-color="primary" width="12" size="100" />
  </div>

  <!-- <v-main v-else>
    <v-card v-for="(album, index) in photosets.albums" :key="index" width="300">
      <v-img :src="album.url_c"></v-img>
      <v-card-title>{{ album.title }}</v-card-title>
    </v-card>
  </v-main> -->
</template>
