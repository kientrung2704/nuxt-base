import Cookie from "js-cookie";
import { t } from "@/plugins/i18n";

const languageKey = "language";

export function getLanguage() {
	return Cookie.get(languageKey);
}

export function setLanguage(language) {
	return Cookie.set(languageKey, language);
}

export function removeLanguage() {
	return Cookie.remove(languageKey);
}

export function trans(key, option) {
	return t(key, option);
}
