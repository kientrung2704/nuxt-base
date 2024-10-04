<template>
	<el-avatar
		:src="uri !== null ? uri : ''"
		:size="size"
		fit="cover"
		class="border-none"
	>
		<template #default>
			<img :src="AvatarDefault" alt="" />
		</template>
	</el-avatar>
</template>

<script setup>
import AvatarDefault from "~/assets/images/avatar-default.png";
defineProps({
	uri: {
		type: String,
		default: null,
	},
	size: {
		type: Number,
		default: 32,
	},
	isBorder: {
		type: Boolean,
		default: false,
	},
});
</script>
