<script setup lang="ts">
import AlbumCard from '../components/AlbumCard.vue';
</script>

<template>
  <v-container>
    <h1 class="text-h3">{{ $t('menu.photoAlbums') }}</h1>

    <v-divider :thickness="1" class="border-opacity-100 mt-2" />
  </v-container>

  <AlbumCard />
</template>
