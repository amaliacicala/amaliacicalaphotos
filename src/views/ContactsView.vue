<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';

const source = ref('cicala.amalia@gmail.com');

const { text, copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
  <v-container>
    <h1 class="text-h3">{{ $t('menu.contacts') }}</h1>

    <v-divider :thickness="1" class="border-opacity-100 mt-2" />

    <div class="d-flex flex-column justify-center align-center mt-14">
      <p class="text-h6 mb-10">Based in <span class="text-primary">Milan</span>, Italy.</p>

      <p class="text-h6 text-center mb-10">
        {{ $t('contactsBody') }}
      </p>

      <span
        v-if="isSupported"
        class="d-flex flex-column align-center text-sm-h5 cursor-pointer"
        :disabled="!copied ? false : true"
        @click="copy(source)"
      >
        <h2 class="text-h6 text-md-h4 text-center">✉️ {{ source }}</h2>

        <span v-if="copied" class="mt-4 text-uppercase text-caption text-primary font-weight-bold">
          {{ $t('copied') }}
        </span>
      </span>

      <span v-else class="d-flex align-center text-sm-h5">
        <h2 class="text-h6 text-md-h4 text-center">✉️ {{ source }}</h2>
      </span>

      <v-btn
        elevation="0"
        variant="outlined"
        size="large"
        color="primary"
        href="https://buymeacoffee.com/amaliacicala"
        target="_blank"
        class="text-uppercase my-12"
      >
        {{ $t('buyMeCoffee') }}
      </v-btn>
    </div>
  </v-container>
</template>
