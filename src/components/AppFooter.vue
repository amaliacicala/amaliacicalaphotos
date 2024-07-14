<template>
  <v-container>
    <v-footer
      absolute
      app
      class="d-flex flex-column flex-sm-row justify-center bg-white text-caption py-8"
    >
      <p>© {{ new Date().getFullYear() }} by Amalia Cicala</p>
      <span class="d-none d-sm-block divider">|</span>
      <p class="my-2 my-sm-0">cicala.amalia@gmail.com</p>
      <span class="d-none d-sm-block divider">|</span>
      <p>Milan & Worldwide.</p>
    </v-footer>
  </v-container>
</template>

<style lang="scss" scoped>
.divider {
  margin: 0 10px;
  color: rgb(var(--v-theme-primary));
}
</style>
