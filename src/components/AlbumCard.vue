<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';
import { usePhotosetsStore } from '../stores/photosets';
import photosets from '../data/photosets.json';

const router = useRouter();
const { mobile } = useDisplay();

const photosetsStore = usePhotosetsStore();
const { loading } = storeToRefs(photosetsStore);

const navigateToAlbum = (album: any) => {
  photosetsStore.setAlbumData(album.title, album.description);
  router.push({
    name: 'AlbumGallery',
    params: { photosetId: album.photosetId }
  });
};
</script>

<template>
  <div v-if="loading" class="d-flex justify-center align-center pt-14">
    <v-progress-circular indeterminate color="black" bg-color="primary" width="12" size="100" />
  </div>

  <v-container v-else class="mt-6">
    <v-row>
      <v-col
        v-for="(album, index) in photosets.albums"
        lg="3"
        :key="index"
        class="d-flex justify-center my-2"
      >
        <v-card
          :width="mobile ? '350' : 250"
          variant="outlined"
          cursor-pointer
          :loading="photosets.albums ? false : true"
          @click="navigateToAlbum(album)"
          rel="noopener"
        >
          <v-img cover aspect-ratio="16/9" min-height="200" max-height="200" :src="album.image">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="black" bg-color="primary" indeterminate />
              </div>
            </template>
          </v-img>
          <v-main class="d-flex flex-column align-center text-center py-4 py-sm-6">
            <v-card-title class="text-h5 text-wrap">{{ album.title }}</v-card-title>
            <v-card-item class="min-height">{{ album.description }}</v-card-item>
          </v-main>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
.min-height {
  min-height: 68px !important;
}

:deep(.v-card) {
  .v-img__img {
    filter: saturate(30%) contrast(80%);
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    .v-img__img {
      filter: saturate(100%) contrast(100%);
    }
  }
}
</style>
