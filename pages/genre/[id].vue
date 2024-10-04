<template>
	<div>
		<div v-if="status === 'pending'">...Loading</div>
		<div v-else>
			{{ data.data }}
		</div>
	</div>
</template>

<script setup>
const api = useFetchInstance();
const route = useRoute();

const { data, status, error } = await useLazyAsyncData(
	"category-detail",
	async () =>
		await api(
			"mydio/audio/public/categories/" +
				route.params?.id +
				"/audios?size=20&page=0"
		)
);

if (!data.value) {
	throw createError({
		statusCode: 404,
		statusMessage: "ERROR",
	});
}
</script>
