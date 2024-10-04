<template>
	<el-button
		:class="[classCustom, 'justify-center btn-icon', '']"
		:loading="loading"
		:disabled="disabled"
		:readonly="readonly"
		@click.stop="$emit('submit')"
	>
		<div :class="['w-[24px] h-[24px] flex items-center justify-center']">
			<img
				v-if="!disabled"
				:class="['icon-default']"
				:src="iconButton"
				:alt="iconButton"
			/>
			<img
				v-if="!disabled && iconButtonHover"
				class="icon-hover"
				:src="iconButtonHover"
				:alt="iconButtonHover"
			/>
			<img
				v-if="disabled && iconButtonDisabled"
				:src="iconButtonDisabled"
				:alt="iconButtonDisabled"
			/>
		</div>
	</el-button>
</template>
<script setup>
defineProps({
	classExtra: {
		type: String,
		default: "btn-primary",
	},
	classCustom: {
		type: String,
		default: "",
	},
	isFullWidth: {
		type: Boolean,
		default: false,
	},
	tabindex: {
		type: Number,
	},
	text: {
		type: String,
		default: "",
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	loading: {
		type: Boolean,
		default: false,
	},
	iconLeft: {
		type: String,
		default: "",
	},
	iconRight: {
		type: String,
		default: "",
	},
	iconButton: {
		type: String,
		default: "",
	},
	iconButtonHover: {
		type: String,
		default: "",
	},
	iconButtonDisabled: {
		type: String,
		default: "",
	},
	size: {
		type: String,
		default: "default",
	},
	isActive: {
		type: Boolean,
		default: false,
	},
});
defineEmits(["submit"]);
</script>
