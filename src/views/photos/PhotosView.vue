<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { albums, albumLine } from '@/content/photos';
</script>

<template>
  <header class="block photos-head" aria-labelledby="photos-h">
    <div class="wrap">
      <div class="sec-head">
        <p class="label">Photography</p>
        <div>
          <h1 id="photos-h" class="page-h">Concert photography</h1>
          <p class="intro">
            I’m a concert and music photographer based in Milan, Italy, shooting live shows, festivals and press
            photos for bands. My band photo of Benthos ran in Metal Hammer UK. Available in Milan and worldwide.
          </p>
          <div class="btns photos-cta">
            <RouterLink class="btn solid" :to="{ path: '/', hash: '#contact' }">Book a shoot</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </header>

  <section class="block albums-block" aria-label="Albums">
    <div class="wrap">
      <ul v-if="albums.length" class="albums">
        <li v-for="a in albums" :key="a.slug">
          <RouterLink class="album-card" :to="`/photos/${a.slug}`">
            <span class="album-cover">
              <img :src="a.cover.thumb" :alt="a.cover.alt" :width="a.cover.width" :height="a.cover.height" loading="lazy" />
            </span>
            <span class="album-title">{{ a.title }}</span>
            <span class="album-line">{{ albumLine(a) }}</span>
            <span class="album-count">{{ a.photos.length }} photos</span>
          </RouterLink>
        </li>
      </ul>

      <div v-else class="albums-empty">
        <h2>New galleries are on the way</h2>
        <p>I’m putting together a fresh selection of recent shows. In the meantime, get in touch for bookings or to see more work.</p>
        <RouterLink class="btn" :to="{ path: '/', hash: '#contact' }">Get in touch</RouterLink>
      </div>
    </div>
  </section>
</template>
