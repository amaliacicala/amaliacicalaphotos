<script setup lang="ts">
import { ref } from 'vue';
import { useClipboard } from '@vueuse/core';
import contacts_image from '@/assets/contacts_image.avif';

const source = ref('cicala.amalia@gmail.com');

const { text, copy, copied, isSupported } = useClipboard({ source });
</script>

<template>
  <v-container>
    <h1 class="text-h3">{{ $t('menu.contacts') }}</h1>

    <v-divider :thickness="1" class="border-opacity-100 mt-2" />

    <div class="d-flex flex-column justify-center align-center mt-10 mt-md-14">
      <v-avatar size="100" class="cursor-help">
        <v-img cover alt="Amalia Cicala" :src="contacts_image"></v-img>
      </v-avatar>

      <p class="text-h6 mt-8 mb-10">Based in <span class="text-primary">Milan</span>, Italy.</p>

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
        class="text-uppercase mt-12"
      >
        {{ $t('buyMeCoffee') }}
      </v-btn>
    </div>
  </v-container>
</template>

<style lang="scss" scoped>
.v-avatar {
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
