<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <v-app>
    <v-content>
      <AppHeader />

      <v-container>
        <v-main>
          <RouterView />
        </v-main>
      </v-container>

      <AppFooter />
    </v-content>
  </v-app>
</template>
