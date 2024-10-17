<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';

const router = useRouter();

const { mobile } = useDisplay();
</script>

<template>
  <v-fade-transition appear>
    <div class="d-flex flex-column align-center justify-center fill-height text-black">
      <h1>Amalia Cicala</h1>

      <div v-if="mobile" class="d-flex flex-column text-black mt-6" :style="{ gap: '16px' }">
        <v-btn
          elevation="0"
          class="border border-opacity-50 border-secondary"
          height="48px"
          @click="router.push({ path: '/artist-management' })"
          >Artist Management
        </v-btn>

        <v-btn
          elevation="0"
          class="border border-opacity-50 border-secondary"
          height="48px"
          @click="router.push({ path: '/photos' })"
        >
          Music Photography
        </v-btn>

        <v-btn
          elevation="0"
          class="border border-opacity-50 border-secondary"
          height="48px"
          @click="router.push({ path: '/music-digital-marketing' })"
        >
          Music Digital Marketing
        </v-btn>
      </div>

      <v-btn-toggle
        v-else
        variant="outlined"
        divided
        class="flex-wrap justify-center text-black mt-8"
      >
        <v-btn @click="router.push({ path: '/artist-management' })">Artist Management </v-btn>

        <v-btn @click="router.push({ path: '/photos' })"> Music Photography </v-btn>

        <v-btn @click="router.push({ path: '/music-digital-marketing' })">
          Music Digital Marketing
        </v-btn>
      </v-btn-toggle>
    </div>
  </v-fade-transition>
</template>

<style lang="scss" scoped>
.fade-transition-enter-active {
  transition: all 1.5s ease !important;
}
</style>
