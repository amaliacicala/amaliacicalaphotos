<template>
  <v-footer
    absolute
    app
    :elevation="2"
    class="d-flex flex-column flex-sm-row justify-center bg-white text-caption py-8"
  >
    <p>{{ new Date().getFullYear() }} © Amalia Cicala</p>
    <span class="d-none d-sm-block divider">|</span>
    <p>P.IVA 13915370962</p>
    <span class="d-none d-sm-block divider">|</span>
    <p class="my-2 my-sm-0">amalia@bands.management</p>
    <span class="d-none d-sm-block divider">|</span>
    <p>Concert Photographer in Milan & Worldwide.</p>
  </v-footer>
</template>

<style lang="scss" scoped>
.divider {
  margin: 0 10px;
  color: rgb(var(--v-theme-secondary));
}
</style>
