import {getImg} from "@/utils/utils";

export const PUBLIC_LAYOUT = "default-layout";
export const LAYOUT_AUTH = "auth-layout";
export const LAYOUT_ERROR = "error-layout";
export const LENGTH_CODE_OTP = 6;
export const OTP_EXPIRE = 2;
export const ERROR_PAGE_PATH = "/error-page";

// type toast
export const TYPE_SUCCESS = "success";
export const TYPE_ERROR = "error";
export const TYPE_WARRING = "warning";
export const TYPE_INFO = "info";

export const LST_LANGUAGE = [
  {
    id: 1,
    name: "English",
    lang: "en",
    icon: getImg("english.svg"),
  },
  {
    id: 2,
    name: "Tiếng Việt",
    lang: "vi",
    icon: getImg("vietnam.svg"),
  },
];

export const COLOR_RANKINGS = {
  TOP_1: "#FF3B30",
  TOP_2: "#FF763E",
  TOP_3: "#FFB764",
  DEFAULT: "#888888",
};
