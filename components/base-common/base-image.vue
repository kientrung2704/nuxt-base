<template>
	<el-image :src="source" lazy>
		<template #placeholder>
			<div class="w-full h-full">
				<base-svg
					name="thumb-square-loading"
					class="w-full h-full object-cover"
				/>
			</div>
		</template>
		<template #error>
			<div class="w-full h-full">
				<base-svg
					name="thumb-square-loading"
					class="w-full h-full object-cover"
				/>
			</div>
		</template>
	</el-image>
</template>

<script setup>
defineProps({
	source: {
		type: String,
		required: true,
	},
});
</script>
