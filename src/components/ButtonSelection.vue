<!-- eslint-disable vue/valid-template-root -->
<template>
	<RouterLink class="bg-[#FC3B47] p-5 text-center rounted-lg" :to="{ name: props.url }"> {{ props.title }} </RouterLink>
</template>
<script setup lang="ts">
import defineProps from "vue";
import { RouterLink } from 'vue-router'


const props = defineProps<{
    url: string,
    title: string
}>();

</script>

