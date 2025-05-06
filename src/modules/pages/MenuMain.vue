<template>
  <header class="flex flex-row items-center justify-between text-[#EEE0D3] text-4xl mb-6">
    <img class="w-50 h-50" src="/src/assets/icon/floriambra_logo.svg" alt="floriambra_logo" />
    <h2 class="font-sans font-semibold mr-10">Roadmap Rust</h2>
  </header>

  <div v-if="!activeSection" class="flex gap-4 justify-center mb-6">
    <button
      v-for="section in sections"
      :key="section.name"
      @click="activeSection = section.name"
      class="bg-[#FC3B47] w-50 h20 p-4 text-2xl rounded-lg text-[#EEE0D3] hover:bg-[#d92c38] transition">
      {{ section.label }}
    </button>
  </div>

  <div v-else>
    <component :is="activeComponent" />

    <div class="flex justify-center mt-6">
      <button
        @click="activeSection = null"
        class="bg-[#FC3B47] p-4 text-2xl rounded-lg text-[#EEE0D3] hover:bg-[#d92c38] transition">
        Volver al menú
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LanguageIntroduction from './LanguageIntroduction.vue'
import InstalationOfRust from './InstalationOfRust.vue'
import CargoView from './CargoView.vue'


const sections = [
  { name: 'intro', label: 'Introducción', component: LanguageIntroduction },
  { name: 'instalation', label: 'Instalacion', component: InstalationOfRust },
  { name: 'Cargo', label: 'Cargo', component: CargoView}
]

const activeSection = ref<string | null>(null)

const activeComponent = computed(() => {
  const section = sections.find(s => s.name === activeSection.value)
  return section?.component || null
})
</script>
