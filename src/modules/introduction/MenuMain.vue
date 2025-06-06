<template>
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
        class="bg-[#FC3B47] w-50 h20 p-4 text-2xl rounded-lg text-[#EEE0D3] hover:bg-[#d92c38] transition">
        Volver al menú de introducción
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import LanguageIntroduction from './LanguageIntroduction.vue'
import InstalationOfRust from './InstalationOfRust.vue'
import CargoView from './CargoView.vue'
import VariablesConstantes from './VariablesConstantes.vue'
import DataTypes from './DataTypes.vue'
import Operaciones from './Operaciones.vue'
import FlowStructured from './FlowStructured.vue'
import Functions from './Functions.vue'


const sections = [
  { name: 'intro', label: 'Introducción', component: LanguageIntroduction },
  { name: 'instalation', label: 'Instalacion', component: InstalationOfRust },
  { name: 'Cargo', label: 'Cargo', component: CargoView},
  { name: 'Variables', label: 'Variables', component: VariablesConstantes},
  { name: 'TiposdeDatos', label: 'Tipos de datos', component: DataTypes},
  { name: 'Operaciones', label: 'Operaciones', component: Operaciones},
  { name: 'Estructuras de flujo', label: 'Estructuras de flujo', component: FlowStructured},
  { name: 'Funciones', label: 'Funciones', component: Functions}
]

const activeSection = ref<string | null>(null)

const activeComponent = computed(() => {
  const section = sections.find(s => s.name === activeSection.value)
  return section?.component || null
})
</script>
