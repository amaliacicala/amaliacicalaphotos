<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useClipboard } from '@vueuse/core';

const router = useRouter();

const source = ref('amalia@bands.management');

const { copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
  <v-slide-x-transition appear>
    <div class="d-flex flex-column align-center justify-center text-center h-100">
      <!-- INTRO / ROSTER -->

      <p class="text-h5 text-sm-h4 font-weight-bold text-center mt-4">
        Artist Manager & Assistant Artist Manager<br />at
        <a
          href="http://bands.management/"
          target="_blank"
          class="text-secondary text-decoration-none"
          >BANDS Management</a
        >
      </p>
      <p class="text-secondary text-subtitle-2 text-sm-subtitle-1 font-weight-bold mt-8">
        CURRENTLY MANAGING:
      </p>
      <p class="text-body-2 text-sm-body-1 mt-3">
        <strong>Benthos</strong> — Progressive Metal, Mathcore | ITA |
        <a
          href="https://benthos-band.com/"
          target="_blank"
          class="text-secondary text-decoration-none"
          >🔗</a
        >
      </p>

      <p class="text-secondary text-subtitle-2 text-sm-subtitle-1 font-weight-bold mt-8">
        WITH LULU DAVIS / BANDS MANAGEMENT:
      </p>
      <p class="text-body-2 text-sm-body-1 mt-3">
        <strong>Unprocessed</strong> — Progressive Metalcore, Modern Metal | GER |
        <a
          href="https://unprocessed.band"
          target="_blank"
          class="text-secondary text-decoration-none"
          >🔗</a
        >
      </p>

      <p class="text-body-2 text-sm-body-1 mt-3">
        <strong>Caligula's Horse</strong> — Progressive Metal | AUS |
        <a
          href="https://www.caligulashorse.com/"
          target="_blank"
          class="text-secondary text-decoration-none"
          >🔗</a
        >
      </p>
      <p class="text-body-2 text-sm-body-1 mt-3">
        <strong>Earthside</strong> — Progressive Metal, Post-rock, Cinematic Rock | USA |
        <a
          href="http://earthsideband.com/"
          target="_blank"
          class="text-secondary text-decoration-none"
          >🔗</a
        >
      </p>
      <p class="text-body-2 text-sm-body-1 mt-3">
        <strong>Voyager</strong> — Progressive Pop Metal | AUS |
        <a
          href="https://www.voyagerau.com/"
          target="_blank"
          class="text-secondary text-decoration-none"
          >🔗</a
        >
      </p>

      <!-- CONTACTS / EMAIL -->
      <h1 class="text-h5 text-sm-h4 text-center mt-12 mb-6">Contacts</h1>

      <div class="d-flex mb-12">
        <span
          v-if="isSupported"
          class="d-flex flex-column align-center text-sm-h5 cursor-pointer"
          :disabled="!copied ? false : true"
          @click="copy(source)"
        >
          <h2 class="text-h6 text-sm-h5 text-center">✉️ amalia<wbr />@bands.management</h2>

          <span
            class="mt-4 text-uppercase text-caption text-secondary font-weight-bold"
            :style="{ height: '0.5rem' }"
          >
            {{ copied ? $t('copied') : '' }}
          </span>
        </span>

        <span v-else class="d-flex align-center text-sm-h5">
          <h2 class="text-body-1 text-md-h4 font-weight-medium text-center">✉️ {{ source }}</h2>
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
