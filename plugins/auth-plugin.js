import { useMediaQuery } from "@vueuse/core";

export default defineNuxtPlugin((nuxtApp) => {
	// const auth = useAuth();
	const auth = null;
	const { changeDevice, isDeviceWeb } = useApp();
	const isLargeScreen = useMediaQuery("(min-width: 1024px)");

	nuxtApp.hook("app:created", async () => {
		changeDevice(useNuxtApp().$isDesktop());
		console.log("created", isLargeScreen.value, isDeviceWeb);
		// if (!auth.loggedIn.value && auth.token.value) {
		// 	try {
		// 		await auth.loadUser();
		// 	} catch (e) {
		// 		if (e.response && e.response.status === 401) {
		// 			auth.setToken(null);
		// 		}
		// 	}
		// }
	});

	return {
		provide: { auth },
	};
});
