<script setup lang="ts">
import AlbumCard from '../components/AlbumCard.vue';
</script>

<template>
  <v-main>
    <h1 class="text-h3">{{ $t('menu.photoAlbums') }}</h1>

    <v-divider :thickness="1" class="border-opacity-100 mt-2" />

    <div class="d-flex justify-center align-center text-h5 py-14">
      <p class="text-primary">{{ $t('comingSoon') }}</p>
    </div>

    <AlbumCard />
  </v-main>
</template>
