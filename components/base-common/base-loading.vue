<!-- <template>
	<Transition
		@before-leave="onClose"
		@after-leave="onDestroy"
		name="loading-fade"
	>
		<div
			v-show="visible"
			:class="[
				'fixed top-0 left-0 right-0 flex justify-center items-center h-screen bg-slate-100 opacity-80',
				customClass,
			]"
		>
			<div class="flex items-center">
				<ElIconLoading class="animate-spin-slow w-8 h-8" />
			</div>
		</div>
	</Transition>
</template>

<script lang="ts" setup>
import { onMounted, ref, computed } from "vue";
const props = defineProps({
	customClass: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	onDestroy: Function,
	onClose: Function,
});
const visible = ref(false);
const close = () => {
	visible.value = false;
};

defineExpose({
	close,
});
onMounted(() => {
	visible.value = true;
});
</script>

<style lang="scss" scoped>
// .loading {
//   @apply fixed z-50 top-1/2 left-1/2 rounded px-4 py-2 transform -translate-x-1/2 min-w-3/10 transition-all
// }
// .loading-fade-enter-from,
// .loading-fade-leave-to {
//   @apply transform -translate-x-1/2 -translate-y-20px opacity-0
// }
.loading-fade-enter-active,
.loading-fade-leave-active {
	transition: opacity 0.5s ease;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
	opacity: 0;
}
</style> -->

<template>
	<div
		class="fixed inset-0 bg-slate-200/50 z-50 backdrop-blur-sm flex items-center justify-center"
	>
		<!-- <div class="flex items-center flex-col bg-white rounded-md px-3 py-2"> -->
		<div class="text-gray-900 text-3xl mb-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				height="1em"
				width="1em"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
				class="animate-spin"
			>
				<path d="M21 12a9 9 0 1 1-6.219-8.56" />
			</svg>
		</div>
		<!-- </div> -->
	</div>
</template>
