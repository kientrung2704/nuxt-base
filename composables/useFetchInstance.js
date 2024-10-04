// import type { $Fetch } from "nitropack";
// import { useAuthStore } from "~/stores/useAuthStore";
// import type { TokensData } from "~/types/auth";

let fetchInstance;

export const useFetchInstance = () => {
	// const auth = useAuthStore();
	const config = useRuntimeConfig();
	const accessToken = useCookie("accessToken");
	const refreshToken = useCookie("refreshToken");

	fetchInstance = $fetch.create({
		baseURL: config.public.apiUrl,
		headers: {},
		onRequest({ options }) {
			options.headers = {
				...(options.headers || {}),
				Authorization:
					accessToken && accessToken.value ? `Bearer ${accessToken.value}` : "",
			};

			//console.debug(options.headers);
		},
		async onResponseError(_ctx) {
			if (_ctx.response.status == 401) {
				try {
					console.debug(
						`onResponseError() 401 intercept need refreshToken.value=`,
						`url`,
						_ctx.response.url
					);
					// const data = await $fetch<TokensData>(
					//   config.public.apiUrl + "/auth/refreshTokens",
					//   {
					//     method: "POST",
					//     body: { refreshToken: refreshToken.value },
					//   }
					// );

					// console.debug("onResponseError() 401 intercept after refresh req");
					// accessToken.value = data.accessToken;
					// refreshToken.value = data.refreshToken;

					return fetchInstance(_ctx.request);
				} catch (err) {
					console.error(
						`onResponseError() 401 intercept ERROR refresh req`,
						err.statusCode
					);
					// await auth.logout();
				}
			}
		},
	});

	return fetchInstance;
};
