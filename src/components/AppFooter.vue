<template>
  <v-container>
    <v-footer class="d-flex justify-center text-caption pt-14">
      <p>© {{ new Date().getFullYear() }} by Amalia Cicala</p>
      <span class="divider">|</span>
      <p>cicala.amalia@gmail.com</p>
      <span class="divider">|</span>
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
