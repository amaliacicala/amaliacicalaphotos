<script setup lang="ts">
const year = new Date().getFullYear();

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/amaliacicala/' },
  { label: 'Facebook', href: 'https://www.facebook.com/amaliacicala/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/amaliacicala/' }
];
</script>

<template>
  <footer>
    <div class="wrap">
      <span class="legal">Amalia Cicala © {{ year }}<span class="sep" aria-hidden="true">·</span>Milan, Italy<span class="sep" aria-hidden="true">·</span><span class="nowrap">P.IVA 13915370962</span></span>
      <ul class="socials" aria-label="Social profiles">
        <li v-for="s in socials" :key="s.label">
          <a :href="s.href" target="_blank" rel="noopener me">{{ s.label }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>
