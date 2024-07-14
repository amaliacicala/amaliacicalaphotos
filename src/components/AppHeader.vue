<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import AppSideMenu from './AppSideMenu.vue';

const navigation = ref(false);
const router = useRouter();
</script>

<template>
  <v-app-bar
    elevation="0"
    scroll-behavior="hide"
    scroll-threshold="200"
    color="white"
    class="pa-2 pa-md-0"
  >
    <v-container class="d-flex justify-space-between align-center">
      <h4
        class="clickable h4 w-50 w-md-100 font-weight-bold text-uppercase"
        @click="router.push({ name: 'Home' })"
      >
        Amalia Cicala Photography
      </h4>

      <div class="d-none d-md-flex">
        <v-list-item
          link
          :aria-label="$t('menu.home')"
          :to="{ name: 'Home' }"
          width="140"
          height="64"
          class="d-flex justify-center text-uppercase text-button font-weight-medium"
          active-class="active font-weight-bold"
        >
          {{ $t('menu.home') }}
        </v-list-item>

        <v-list-item
          link
          :aria-label="$t('menu.photoAlbums')"
          :to="{ name: 'Albums' }"
          width="200"
          height="64"
          class="d-flex justify-center text-uppercase text-button font-weight-medium"
          active-class="active font-weight-bold"
        >
          {{ $t('menu.photoAlbums') }}
        </v-list-item>

        <v-list-item
          link
          :aria-label="$t('menu.contacts')"
          :to="{ name: 'Contacts' }"
          width="160"
          class="d-flex justify-center text-uppercase text-button font-weight-medium"
          active-class="active font-weight-bold"
        >
          {{ $t('menu.contacts') }}
        </v-list-item>
      </div>

      <v-app-bar-nav-icon
        id="appsidemenu-activator"
        icon="mdi-menu"
        variant="text"
        color="black"
        class="d-flex d-md-none"
      />
      <v-dialog
        v-model="navigation"
        activator="#appsidemenu-activator"
        height="100%"
        max-height="100%"
        width="256px"
        content-class="ma-0"
        location="left"
        class="justify-start"
        transition="slide-x-transition"
      >
        <v-card height="100%" class="py-2 px-4" rounded="0">
          <AppSideMenu @close="navigation = false" />
        </v-card>
      </v-dialog>
    </v-container>
  </v-app-bar>
</template>

<style lang="scss" scoped>
h4 {
  &:hover {
    cursor: pointer;
  }
}
.active {
  text-decoration: underline !important;
  text-underline-offset: 2px !important;
}
:deep(.v-list-item__overlay) {
  opacity: 0 !important;
}
</style>
