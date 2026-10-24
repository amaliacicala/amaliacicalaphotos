<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import type { Photo } from '@/content/photos';

const props = defineProps<{ photos: Photo[]; index: number }>();
const emit = defineEmits<{ (e: 'update:index', v: number): void; (e: 'close'): void }>();

const dialog = ref<HTMLDialogElement | null>(null);
const photo = computed(() => props.photos[props.index]);
const go = (step: number) => emit('update:index', (props.index + step + props.photos.length) % props.photos.length);

function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowRight') go(1);
  if (e.key === 'ArrowLeft') go(-1);
}

let startX = 0;
const onTouchStart = (e: TouchEvent) => (startX = e.touches[0].clientX);
const onTouchEnd = (e: TouchEvent) => {
  const dx = e.changedTouches[0].clientX - startX;
  if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
};

onMounted(() => {
  dialog.value?.showModal();
  window.addEventListener('keydown', onKey);
});
onBeforeUnmount(() => window.removeEventListener('keydown', onKey));
</script>

<template>
  <dialog
    ref="dialog"
    class="lightbox"
    aria-label="Photo viewer"
    @close="emit('close')"
    @click.self="dialog?.close()"
    @touchstart.passive="onTouchStart"
    @touchend="onTouchEnd"
  >
    <img :key="photo.full" :src="photo.full" :alt="photo.alt" :width="photo.width" :height="photo.height" />
    <p class="lightbox-count">{{ index + 1 }} / {{ photos.length }}</p>
    <button type="button" class="lb-btn lb-close" aria-label="Close" @click="dialog?.close()">×</button>
    <button v-if="photos.length > 1" type="button" class="lb-btn lb-prev" aria-label="Previous photo" @click="go(-1)">‹</button>
    <button v-if="photos.length > 1" type="button" class="lb-btn lb-next" aria-label="Next photo" @click="go(1)">›</button>
  </dialog>
</template>
