<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useClipboard } from '@vueuse/core';

const router = useRouter();

const source = ref('management@amaliacicala.com');

const { copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
  <v-slide-x-transition appear>
    <div class="d-flex flex-column align-center justify-center h-100">
      <div class="d-flex mb-12">
        <span
          v-if="isSupported"
          class="d-flex flex-column align-center text-sm-h5 cursor-pointer"
          :disabled="!copied ? false : true"
          @click="copy(source)"
        >
          <h2 class="text-h5 text-sm-h4 text-center">✉️ management<wbr />@amaliacicala.com</h2>

          <span
            class="mt-4 text-uppercase text-caption text-secondary font-weight-bold"
            :style="{ height: '0.5rem' }"
          >
            {{ copied ? $t('copied') : '' }}
          </span>
        </span>

        <span v-else class="d-flex align-center text-sm-h5">
          <h2 class="text-h6 text-md-h4 text-center">✉️ {{ source }}</h2>
        </span>
      </div>

      <v-btn
        elevation="0"
        class="border border-secondary border-opacity-50 bg-white px-6"
        height="3rem"
        prepend-icon="mdi-arrow-left"
        @click="router.push({ path: '/' })"
      >
        {{ $t('goBack') }}
      </v-btn>
    </div>
  </v-slide-x-transition>
</template>

<style lang="scss" scoped>
.slide-x-transition-enter-active {
  transition: all 1s ease !important;
}
</style>
