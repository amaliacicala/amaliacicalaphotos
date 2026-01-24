<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import AppHeader from '@/components/photos/AppHeader.vue';
import AppFooter from '@/components/photos/AppFooter.vue';

const route = useRoute();
</script>

<template>
  <v-fade-transition appear>
    <v-app class="height-screen">
      <v-content :class="[route.path.includes('photos') ? '' : 'app-border', 'fill-height']">
        <AppHeader v-if="route.path.includes('photos')" />

        <v-container class="fill-height">
          <v-main class="fill-height">
            <RouterView />
          </v-main>
        </v-container>

        <AppFooter v-if="route.path.includes('photos')" />

        <div v-else class="d-flex justify-end mt-16">
          <p class="position-absolute position-props text-caption">
            P.IVA 13915370962 | Amalia Cicala © {{ new Date().getFullYear() }}
          </p>
        </div>
      </v-content>
    </v-app>
  </v-fade-transition>
</template>

<style lang="scss" scoped>
.fade-transition-enter-active {
  transition: all 1.5s ease !important;
}
.app-border {
  border: solid 16px rgb(var(--v-theme-secondary));
}
@media (max-width: 768px) {
  .app-border {
    border: solid 10px rgb(var(--v-theme-secondary));
    padding: 4px;
  }
}
.position-props {
  bottom: 26px;
  right: 26px;
  opacity: 60%;
}
</style>
