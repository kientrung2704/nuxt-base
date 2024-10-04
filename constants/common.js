export const TYPE_SUCCESS = "success";
export const TYPE_ERROR = "error";

export const keyStores = {
  account: "mydio.account",
  accessToken: "mydio.accessToken",
  refreshToken: "mydio.refreshToken",
  deviceId: "mydio.deviceId",
  isDetect: "mydio.isDetect",
  mobileDetect: "mydio.mobileDetect",
  contentPlayer: "mydio.contentPlayer",
  timePosition: "mydio.timePosition",
  seriesPlayer: "mydio.seriesPlayer",
  urlNgay: "mydio.urlNgay",
  responseParseMps: "mydio.responseParseMps",
  volume: "mydio.jwplayer.volume",
  mode: "mydio.mode",
  IPDetect: "mydio.ipDetect",
  infoDetect: "mydio.infoDetect",
  historySearch: "mydio.history_search",
  routeRedirect: "mydio.redirect",
  redirectAfterLogin: "mydio.redirectAfterLogin",
  mobileLogin: "mydio.mobileLogin",
  verifyPhonenumber: "mydio.verificationPhonenumber",
  loginByPhoneNumber: "mydio.isLoginByPhoneNumber",
  loginByOAuth: "mydio.isLoginByOAuth",
};

// groupId:
// audio: Sách/Truyện = 8
// Podcast = 0
// Album = 2
// Serie truyện = 3

// export const PODCAST_ID = "0"
// export const ALBUM_ID = "2"
// export const SERIES_ID = "3"
// export const RADIO_ID = "4"
// export const AUDIO_ID = "8"

export const VIP_STATUS = {
  NO_REGISTERED: 0,
  REGISTERED: 1,
  EXPIRED: 2,
};

export function formatTypePackage(type) {
  switch (type) {
    case "day":
      return "ngày";
    case "week":
      return "tuần";
    case "month":
      return "tháng";
    case "3 month":
      return "3 tháng";
    default:
      return "";
  }
}

export const PODCAST_ID = "podcast";
export const ALBUM_ID = "album";
export const SERIES_ID = "series";
export const RADIO_ID = "radio";
export const AUDIO_ID = "book";
export const SEARCH_PER_CATE = 5;
export const PAGE_PER_CATE = 20;
export const VERSION_WAP = "3.0";

export const OS_TYPE = 2;
export const COLLECTION_ALBUM = "ALBUM";
export const COLLECTION_SERIES = "STORY_SERIES";
export const SIZE_PAGE_CUSTOM = "30";
