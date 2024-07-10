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

      <span class="d-flex align-center text-sm-h5">
        <v-icon icon="mdi-email" class="mr-2" />
        <h3>{{ source }}</h3>
      </span>

      <div v-if="isSupported" class="mt-6">
        <v-btn
          elevation="0"
          size="small"
          :color="!copied ? 'primary' : 'white'"
          :disabled="!copied ? false : true"
          class="text-uppercase text-caption"
          @click="copy(source)"
        >
          <span v-if="!copied">{{ $t('copy') }}</span>
          <span v-else>{{ $t('copied') }}</span>
        </v-btn>
      </div>

      <v-btn
        elevation="0"
        variant="outlined"
        size="large"
        color="primary"
        href="https://buymeacoffee.com/amaliacicala"
        target="_blank"
        class="text-uppercase my-12"
      >
        ☕️ Buy me a coffee
      </v-btn>
    </div>
  </v-container>
</template>
