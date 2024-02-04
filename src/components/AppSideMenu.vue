<script lang="ts" setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const emit = defineEmits();

watch([() => route.name], ([newRouteName]) => {
  if (!newRouteName) return;
  emit('close');
});
</script>

<template>
  <v-btn
    icon="mdi-close"
    :rounded="0"
    variant="text"
    color="primary"
    class="d-flex ml-auto"
    width="24px"
    @click="$emit('close')"
  />

  <v-list-item
    link
    :aria-label="$t('menu.home')"
    :to="{ name: 'Home' }"
    height="100"
    class="text-uppercase text-button font-weight-medium"
    active-class="active font-weight-bold"
  >
    {{ $t('menu.home') }}
  </v-list-item>

  <v-list-item
    link
    :aria-label="$t('menu.photoAlbums')"
    :to="{ name: 'Albums' }"
    height="100"
    class="text-uppercase text-button font-weight-medium"
    active-class="active font-weight-bold"
  >
    {{ $t('menu.photoAlbums') }}
  </v-list-item>

  <v-list-item
    link
    :aria-label="$t('menu.contacts')"
    :to="{ name: 'Contacts' }"
    height="100"
    class="text-uppercase text-button font-weight-medium"
    active-class="active font-weight-bold"
  >
    {{ $t('menu.contacts') }}
  </v-list-item>
</template>

<style lang="scss" scoped>
.active {
  text-decoration: underline !important;
  text-underline-offset: 2px !important;
}
:deep(.v-list-item__overlay) {
  opacity: 0 !important;
}
</style>
