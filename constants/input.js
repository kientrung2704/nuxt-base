// props input

export const COMMON_PROPS_INPUT_DEFAULT = {
	inputBind: {
		type: Object,
	},
	maxLength: {
		type: String,
		default: "255",
	},
	name: {
		type: String,
		default: "",
	},
	value: {
		type: String,
		default: "",
	},
	isInputDefault: {
		type: Boolean,
		default: false,
	},
	isPhoneNumber: {
		type: Boolean,
		default: false,
	},
	isTextArea: {
		type: Boolean,
		default: false,
	},
	isPassword: {
		type: Boolean,
		default: false,
	},
	placeholder: {
		type: String,
		default: "",
	},
	icon: {
		type: String,
		default: "",
	},
	textValidate: {
		type: String,
		default: "",
	},
	disableErrorBorder: {
		type: Boolean,
		default: false,
	},
	acceptInputSpace: {
		type: Boolean,
		default: false,
	},
};

export const COMMON_PROPS_INPUT = {
	classExtra: {
		type: String,
		default: "",
	},
	ruleFormRef: {
		type: Object,
		default: () => {
			return {};
		},
	},
	rules: {
		type: Object,
		default: () => [],
	},
	model: {
		type: String,
		default: "",
	},
	nameRef: {
		type: String,
		required: true,
		default: "",
	},
	errorResponse: {
		type: String,
		default: "",
	},
	placeholder: {
		type: String,
		default: "",
	},
	maxlength: {
		type: Number,
		default: 64,
	},
	minlength: {
		type: Number,
		default: 0,
	},
	tabindex: {
		type: Number,
	},
	showLabel: {
		type: Boolean,
		default: true,
	},
	label: {
		type: String,
		default: "LABEL",
	},
	isRequiredField: {
		type: Boolean,
		default: true,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	readonly: {
		type: Boolean,
		default: false,
	},
	iconLeft: {
		type: String,
		default: "",
	},
	classSpacing: {
		type: String,
		default: "",
	},
	prefixIcon: {
		type: String,
		default: "",
	},
};
