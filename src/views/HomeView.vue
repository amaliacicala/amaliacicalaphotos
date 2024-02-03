<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const api = import.meta.env.VITE_PHOTOSET;
  console.log(api);
});
</script>

<template>
  <main></main>
</template>
