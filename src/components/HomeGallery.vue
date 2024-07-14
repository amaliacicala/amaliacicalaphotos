<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { usePhotosetsStore } from '../stores/photosets';
import ImageCard from './ImageCard.vue';
import ScrollToTop from './ScrollToTop.vue';

const selectedImage = ref({});
const dialog = ref(false);

const photosetsStore = usePhotosetsStore();
const { loading, images } = storeToRefs(photosetsStore);

const openDialog = (image: any) => {
  selectedImage.value = image;
  dialog.value = true;
};

onMounted(async () => {
  loading.value = true;

  await photosetsStore.loadAlbum(
    import.meta.env.VITE_FLICKR_API_KEY,
    import.meta.env.VITE_HOME_PHOTOSET
  );

  setTimeout(() => {
    loading.value = false;
  }, 30);
});
</script>

<template>
  <div v-if="loading" class="d-flex justify-center align-center h-screen">
    <v-progress-circular indeterminate color="black" bg-color="primary" width="12" size="100" />
  </div>

  <v-main v-else class="py-0">
    <div class="masonry">
      <ImageCard v-for="image in images" :key="image.id" :image="image" @open-dialog="openDialog" />
    </div>

    <ScrollToTop v-if="!loading" />
  </v-main>
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
