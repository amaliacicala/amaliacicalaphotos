<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <nav class="top" aria-label="Main">
    <div class="wrap">
      <RouterLink class="mark" to="/">Amalia Cicala<span>.</span></RouterLink>
      <ul>
        <li><RouterLink :to="{ path: '/', hash: '#roster' }">Artists</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#work' }">Work</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#cv' }">Experience</RouterLink></li>
        <li class="keep"><RouterLink to="/photos" active-class="current">Photography</RouterLink></li>
        <li class="keep"><RouterLink :to="{ path: '/', hash: '#contact' }">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>
