<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useRoute } from 'vue-router';
import { usePhotosetsStore } from '@/stores/photosets';
import ImageCard from '@/components/photos/ImageCard.vue';
import ScrollToTop from './ScrollToTop.vue';

const route = useRoute();

const selectedImage = ref({});
const dialog = ref(false);

const photosetsStore = usePhotosetsStore();
const { loading, images, albumData } = storeToRefs(photosetsStore);

const openDialog = (image: any) => {
  selectedImage.value = image;
  dialog.value = true;
};

onMounted(async () => {
  loading.value = true;

  const photosetId = route.params.photosetId as string;
  await photosetsStore.loadAlbum(import.meta.env.VITE_FLICKR_API_KEY, photosetId);

  setTimeout(() => {
    loading.value = false;
  }, 30);
});
</script>

<template>
  <v-container v-if="photosetsStore.albumData.title && photosetsStore.albumData.description">
    <div class="d-md-flex justify-md-space-between align-md-end text-center">
      <h1 class="text-h4 text-sm-h3">{{ albumData.title }}</h1>
      <p class="pt-2 pt-md-0">{{ albumData.description }}</p>
    </div>

    <v-divider :thickness="1" class="border-opacity-100 mt-2" />
  </v-container>

  <div v-if="loading" class="d-flex justify-center align-center pt-14">
    <v-progress-circular indeterminate color="black" bg-color="primary" width="12" size="100" />
  </div>

  <v-container v-else class="pt-0 pt-md-4">
    <div class="masonry">
      <ImageCard v-for="image in images" :key="image.id" :image="image" @open-dialog="openDialog" />
    </div>

    <ScrollToTop />
  </v-container>
</template>

<style lang="scss" scoped>
.masonry {
  margin: 1.5em auto;
  max-width: 1200px;
  column-gap: 1.5em;

  @media only screen and (min-width: 1024px) {
    column-count: 3;
  }
  @media only screen and (max-width: 1023px) and (min-width: 768px) {
    column-count: 2;
  }
  @media only screen and (max-width: 767px) and (min-width: 540px) {
    column-count: 1;
  }
}
</style>
