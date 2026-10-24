<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteNav from '@/components/SiteNav.vue';
import SiteFooter from '@/components/SiteFooter.vue';
import { useReveal } from '@/composables/useReveal';

useReveal();
</script>

<template>
  <div class="sheet">
    <SiteNav />
    <RouterView v-slot="{ Component, route }">
      <Transition name="page" mode="out-in">
        <div :key="route.path" class="page">
          <component :is="Component" />
        </div>
      </Transition>
    </RouterView>
    <SiteFooter />
  </div>
</template>
