<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePhotosetsStore } from '@/stores/photosets';
import AlbumCard from '@/components/photos/AlbumCard.vue';

const photosetsStore = usePhotosetsStore();
const { loading, images } = storeToRefs(photosetsStore);

onMounted(async () => {
  if (images.value.length === 0) {
    loading.value = true;

    await photosetsStore.loadAlbum(
      import.meta.env.VITE_FLICKR_API_KEY,
      import.meta.env.VITE_HOME_PHOTOSET
    );

    setTimeout(() => {
      loading.value = false;
    }, 30);
  }
});
</script>

<template>
  <v-container>
    <h1 class="text-h3">{{ $t('menu.photoAlbums') }}</h1>

    <v-divider :thickness="1" class="border-opacity-100 mt-2" />
  </v-container>

  <AlbumCard />
</template>
