<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { findAlbum, albumLine } from '@/content/photos';
import { setMeta } from '@/router';
import PhotoLightbox from '@/components/PhotoLightbox.vue';

const route = useRoute();
const router = useRouter();
const album = computed(() => findAlbum(String(route.params.slug)));
const open = ref<number | null>(null);

watchEffect(() => {
  const a = album.value;
  if (!a) {
    router.replace('/photos');
    return;
  }
  const where = [a.event, a.place].filter(Boolean).join(', ');
  setMeta(
    `${a.title}${where ? ` at ${where}` : ''} | Concert photography by Amalia Cicala`,
    `${a.title}${where ? ` live at ${where}` : ''}, photographed by Amalia Cicala, concert photographer based in Milan.`
  );
});
</script>

<template>
  <template v-if="album">
    <header class="block photos-head" aria-labelledby="album-h">
      <div class="wrap">
        <div class="sec-head">
          <RouterLink class="label back" to="/photos">← All albums</RouterLink>
          <div>
            <h1 id="album-h" class="page-h">{{ album.title }}</h1>
            <p class="album-meta">{{ albumLine(album) }}</p>
            <p v-if="album.description" class="intro">{{ album.description }}</p>
          </div>
        </div>
      </div>
    </header>

    <section class="block albums-block" :aria-label="`${album.title} photos`">
      <div class="wrap">
        <ul class="masonry">
          <li v-for="(p, i) in album.photos" :key="p.file">
            <button type="button" class="masonry-item" :aria-label="`Open photo ${i + 1} of ${album.photos.length}`" @click="open = i">
              <img :src="p.thumb" :alt="p.alt" :width="p.width" :height="p.height" loading="lazy" />
            </button>
          </li>
        </ul>
      </div>
    </section>

    <PhotoLightbox v-if="open !== null" v-model:index="open" :photos="album.photos" @close="open = null" />
  </template>
</template>
