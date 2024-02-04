<!-- ImageDialog.vue -->
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  image: {
    type: Object,
    required: true
  },
  dialog: {
    type: Boolean,
    required: true
  }
});

const emits = defineEmits();

const closeDialog = () => {
  emits('close-dialog');
};
</script>

<template>
  <v-dialog v-model="props.dialog" close-on-content-click fullscreen>
    <div class="loading-overlay">
      <div class="d-flex flex-column align-center">
        <div class="d-flex justify-center align-center">
          <v-progress-circular indeterminate color="white" bg-color="black" width="8" size="50" />
        </div>
        <p class="text-white text-body-1 mt-4">{{ $t('loading') }}</p>
      </div>
    </div>

    <v-img
      v-if="props.image"
      :src="props.image.url_o"
      :alt="props.image.title"
      @click="closeDialog"
    />
  </v-dialog>
</template>

<style lang="scss">
.v-overlay--active {
  backdrop-filter: blur(2px);
  background: rgb(0 0 0 / 0.8);
}
.loading-overlay {
  position: relative;
  margin-top: -90px;
  z-index: -1;
  top: 50%;
}
</style>
