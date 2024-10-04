<template>
	<img :src="source" :alt="name" class="cursor-pointer" />
</template>

<script setup>
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
});

const source = computed(() => `/svg/${props.name}.svg`);
</script>
