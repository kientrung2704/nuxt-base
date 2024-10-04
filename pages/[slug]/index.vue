<template>
	<div>
		<div v-if="status === 'pending'">...Loading</div>
		<div v-else>
			{{ data.data }}
		</div>
	</div>
</template>

<script setup>
import { getContentId } from "~/libs/common";
import { decodeId } from "~/libs/id";
const api = useFetchInstance();
const route = useRoute();

const { data, status, error } = await useLazyAsyncData(
	"category-detail",
	async () => {
		let hashId = getContentId(route.params.slug);
		const id = decodeId(hashId);
		console.log(id);

		const { data, metadata } = await api(
			"mydio/audio/public/categories/" + id + "/audios?size=20&page=0"
		);

		return { data, metadata };
	}
);

// if (!data.value) {
// 	throw createError({
// 		statusCode: 404,
// 		statusMessage: "ERROR",
// 	});
// }
</script>
