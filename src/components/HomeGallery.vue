<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { fetchHomeImages } from '../api/photosets';
import type { Image } from '../types/Photosets';
import ImageCard from '../components/ImageCard.vue';

const loading = ref(true);
const images = ref<Array<Image>>([]);
const selectedImage = ref({});
const dialog = ref(false);

const loadImages = async () => {
  try {
    const response = await fetchHomeImages();
    images.value = response.photoset.photo;
  } catch (error) {
    console.error('Error fetching images', error);
  }
};

const openDialog = (image: any) => {
  selectedImage.value = image;
  dialog.value = true;
};

onMounted(async () => {
  await loadImages();
  loading.value = false;
});
</script>

<template>
  <div v-if="loading" class="d-flex justify-center align-center h-screen">
    <v-progress-circular indeterminate color="black" bg-color="primary" width="12" size="100" />
  </div>

  <v-main v-else>
    <div class="masonry">
      <ImageCard v-for="image in images" :key="image.id" :image="image" @open-dialog="openDialog" />
    </div>
  </v-main>
</template>

<style lang="scss">
.masonry {
  margin: 1.5em auto;
  max-width: 1200px;
  column-gap: 1.5em;
}
@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 3;
  }
}
/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    column-count: 2;
  }
}
/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .masonry {
    column-count: 1;
  }
}
</style>
