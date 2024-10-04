<template>
	<div ref="el">
		<component
			:is="layouts[appStore.layoutName]"
			class="w-full relative min-h-dvh flex flex-col"
		>
			<slot />
		</component>
	</div>
</template>

<script setup>
import Desktop from "~/components/desktop/layouts/Desktop.vue";
import Mobile from "~/components/mobile/layouts/Mobile.vue";
import { useResizeObserver } from "@vueuse/core";

const el = ref(null);

const layouts = {
	Desktop,
	Mobile,
};
const appStore = useApp();

useResizeObserver(el, (entries) => {
	const entry = entries[0];
	const { width } = entry.contentRect;

	if (width >= 840) {
		// if (width >= 1024) {
		appStore.changeDevice(true);
	} else {
		appStore.changeDevice(false);
	}
});

onMounted(() => {
	console.log("onMounted");
	// window.addEventListener("resize", changeInnerWidth, true);
});

onBeforeMount(() => {
	// window.removeEventListener("resize", changeInnerWidth, true);
});

function changeInnerWidth() {
	if (window.innerWidth >= 1024) {
		appStore.changeDevice(true);
	} else {
		appStore.changeDevice(false);
	}
}
</script>
