import { trans } from "@/utils/language";
import { validateNumber, validPhone, validEmail } from "@/utils/validate";

export const RULE_REQUIRED = (field) => {
	return {
		required: true,
		message: trans("validation.required", {
			_field_: trans(field),
		}),
		trigger: "blur",
	};
};

export const RULE_NUMBER = (field) => {
	return {
		validator: validateNumber,
		message: trans("validation.regex", {
			_field_: trans(field),
		}),
		trigger: "blur",
	};
};

export const RULE_PASSWORD = computed(() => {
	return [
		{
			required: true,
			max: 32,
			message: trans("validation.required", {
				_field_: trans("login.password"),
			}),
			trigger: "blur",
		},
	];
});

export const RULE_EMAIL = (field) => {
	return [
		RULE_REQUIRED(field),
		{
			type: "email",
			max: 64,
			message: trans("validation.regex", {
				_field_: trans(field),
			}),
			trigger: "blur",
		},
	];
};

export const RULE_PHONE = (field) => {
	const validatePhoneNumber = (rule, value, cb) => {
		if (validPhone(value)) {
			cb();
		} else {
			cb(new Error());
		}
	};

	return [
		RULE_REQUIRED(field),
		{
			validator: validatePhoneNumber,
			message: trans("validation.regex", {
				_field_: trans(field),
			}),
			trigger: "blur",
		},
	];
};
