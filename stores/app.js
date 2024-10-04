import { defineStore } from "pinia";

export const useApp = defineStore("app", () => {
	const isDeviceWeb = ref(true);
	const isLoading = ref(false);
	const layoutName = computed(() => (isDeviceWeb.value ? "Desktop" : "Mobile"));
	const componentName = computed(() =>
		isDeviceWeb.value ? "DesktopComponent" : "MobileComponent"
	);

	function changeDevice(data) {
		isDeviceWeb.value = data;
		console.log("changeDevice", isDeviceWeb.value);
	}

	return {
		isDeviceWeb,
		isLoading,
		layoutName,
		componentName,
		changeDevice,
	};
});

// export const useApp = defineStore({
// 	id: "app",
// 	state: () => ({
// 		isDeviceWeb: true,
// 	}),
// 	getters: {
// 		layoutName(state) {
// 			console.log("layout", state.isDeviceWeb, state);
// 			return state.isDeviceWeb ? "Desktop" : "Mobile";
// 		},
// 		componentName(state) {
// 			return state.isDeviceWeb ? "DesktopComponent" : "MobileComponent";
// 		},
// 	},
// 	actions: {
// 		changeDevice(data) {
// 			this.isDeviceWeb = data;
// 		},
// 	},
// });
