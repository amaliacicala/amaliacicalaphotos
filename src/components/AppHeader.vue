<script setup lang="ts"></script>

<template>
  <v-app-bar elevation="0" color="primary">
    <v-container class="d-flex justify-space-between align-center">
      <h4 class="font-weight-bold text-uppercase">Amalia Cicala Photography</h4>

      <div class="d-flex">
        <v-list-item
          link
          :aria-label="$t('menu.home')"
          :to="{ name: 'Home' }"
          width="150"
          height="64"
          class="d-flex justify-center text-uppercase text-button font-weight-medium"
          active-class="active font-weight-bold"
        >
          {{ $t('menu.home') }}
        </v-list-item>

        <v-menu>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              link
              :aria-label="$t('menu.photoAlbums')"
              width="150"
              class="d-flex justify-center text-uppercase text-button font-weight-medium"
              active-class="active font-weight-bold"
            >
              {{ $t('menu.photoAlbums') }}
            </v-list-item>
          </template>

          <v-list>
            <v-list-item link title="Item1" />
            <v-list-item link title="Item2" />
            <v-list-item link title="Item3" />
          </v-list>
        </v-menu>

        <v-list-item
          link
          :aria-label="$t('menu.contacts')"
          :to="{ name: 'Contacts' }"
          width="150"
          class="d-flex justify-center text-uppercase text-button font-weight-medium"
          active-class="active font-weight-bold"
        >
          {{ $t('menu.contacts') }}
        </v-list-item>
      </div>
    </v-container>
  </v-app-bar>
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
