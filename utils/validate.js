import { removeFromArr } from "@/utils/utils";

/**
 * Created by Amaisoft.
 */

export function addFieldValidate(ref, ruleFormRef, lstFieldError) {
	ruleFormRef.validateField(ref, (valid) => {
		if (!valid) {
			lstFieldError.push(ref);
		} else {
			lstFieldError = removeFromArr(lstFieldError, ref);
		}
	});
}

export async function checkFieldValidate(ref, ruleFormRef, status) {
	if (Object.entries(ruleFormRef).length !== 0) {
		ruleFormRef.validateField(ref, async (valid) => {
			status.valid = valid;
			return valid;
		});
		console.log(status);
		return status;
	}
}

export function resetValidateField(ref, ruleFormRef) {
	if (Object.entries(ruleFormRef).length !== 0) {
		ruleFormRef.clearValidate(ref);
	}
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
	const reg =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return reg.test(email);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
	if (typeof str === "string" || str instanceof String) {
		return true;
	}
	return false;
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
	if (typeof Array.isArray === "undefined") {
		return Object.prototype.toString.call(arg) === "[object Array]";
	}
	return Array.isArray(arg);
}

export function validPassword(str) {
	const reg =
		/^(?=\S*$)(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[\*\.\!\@\$\%\^\&\(\)\{\}\[\]\:\;\<\>\,\.\?\/\~\_\+\-\=\|\\]).{8,128}$/;
	return reg.test(str);
}

export function validEmoji(str) {
	const regex =
		/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}]/gu;
	return regex.test(str);
}

export const regexEmoji =
	/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2B50}\u{2B55}]/u;

export function validPhone(str) {
	const reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
	return reg.test(str);
}

export function validPhoneNoPrefix(str) {
	const reg = /^([0-9]{9,12})$\b/;
	return reg.test(str);
}

export function checkDate(str, day = 0) {
	if (str) {
		return (
			new Date(str).getDate() < new Date().setDate(new Date().getDate() + day)
		);
	}
}

export const validateNumber = (rule, value, cb) => {
	const regex = /^[0-9]+$/;
	console.log(regex.test(value), value);
	if (!regex.test(value)) {
		cb(new Error());
	} else {
		cb();
	}
};
