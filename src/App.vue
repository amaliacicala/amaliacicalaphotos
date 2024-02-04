<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <v-app>
    <v-container>
      <AppHeader />
      <RouterView />
    </v-container>
  </v-app>
</template>
