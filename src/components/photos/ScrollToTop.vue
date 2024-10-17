<script lang="ts" setup>
const scrollToTop = () => {
  // @ts-ignore
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>

<template>
  <v-container class="d-flex justify-center">
    <v-btn
      variant="plain"
      size="large"
      color="black"
      class="text-h6 text-uppercase"
      @click="scrollToTop"
    >
      {{ $t('scrollToTop') }}
      <v-icon icon="mdi-chevron-up" size="x-large" class="animate ml-2 rounded-circle" />
    </v-btn>
  </v-container>
</template>

<style lang="scss" scoped>
.v-btn {
  border: solid 1px transparent;
  transition: all 0.3s ease-in-out;
  &:hover {
    border: solid 1px black;
    .animate {
      animation: translate 0.7s linear infinite;
    }
  }
}
@keyframes translate {
  from {
    transform: translateY(20%);
  }
  to {
    transform: translateY(0%);
  }
}
</style>
