<script setup lang="ts">
import ImageDialog from './ImageDialog.vue';
import { ref } from 'vue';

const props = defineProps({
  image: {
    type: Object,
    required: true
  }
});

const dialog = ref(false);

const openDialog = () => {
  dialog.value = true;
};
</script>

<template>
  <div class="item" @click="openDialog">
    <v-img class="image" :src="props.image.url_c" :alt="props.image.title" />
    <ImageDialog :image="props.image" :dialog="dialog" @close-dialog="dialog = false" />
  </div>
</template>

<style lang="scss">
.item {
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
  cursor: pointer;
}
.image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
