<template>
	<component :is="layouts[componentName]" />
</template>

<script setup>
import DesktopComponent from "~/components/desktop/page/Home.vue";
import MobileComponent from "~/components/mobile/page/Home.vue";
import { createSlug } from "~/libs/slugify";
import { encodeId } from "~/libs/id";
const api = useFetchInstance();
const layouts = {
	DesktopComponent,
	MobileComponent,
};
const { componentName, isDeviceWeb } = useApp();

const {
	status,
	data: listBlockHome,
	error,
} = await useLazyAsyncData("index", async () => {
	const { data, metadata } = await api(
		"mydio/audio/public/screen-blocks/prefetch?screenType=HOME&platformType=WAP&device_id=b838bf90-d915-47da-88d4-56ec8b4ae1bf"
	);

	const listBlockHome = data.filter(
		(c) =>
			(c.hasOwnProperty("data") &&
				c.fetchType === "SERVER_PRE_FETCH" &&
				c.data.length > 0) ||
			c.fetchType === "CLIENT_FETCH"
	);

	return listBlockHome;
});

const redirectLink = (block) => {
	if (block.categoryId) {
		return `${createSlug(block.name.toLowerCase())}-${encodeId(
			block.categoryId
		)}`;
	}

	return { name: "genre" };
};
</script>

<style scoped></style>
