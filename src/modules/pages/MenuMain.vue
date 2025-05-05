<template>
  <header class="flex flex-row items-center justify-between text-[#EEE0D3] text-4xl">
    <img  class="w-50 h-50" src="/src/assets/icon/floriambra_logo.svg" alt="floriambra_logo">
    <h2  class="font-sans font-semibold mr-10">Roadmap Rust</h2>
  </header>
  <ButtonSelection url="Introduction" title="Introduccion al lenguaje" />
  <router-view />
</template>
<script setup lang="ts">
import ButtonSelection from '../../components/ButtonSelection.vue'
</script>
