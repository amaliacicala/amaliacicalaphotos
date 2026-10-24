<script setup lang="ts">
import { RouterView } from 'vue-router';
import SiteNav from '@/components/SiteNav.vue';
import SiteFooter from '@/components/SiteFooter.vue';
</script>

<template>
  <div class="sheet">
    <SiteNav />
    <RouterView />
    <SiteFooter />
  </div>
</template>
