<template>
	<NuxtLoadingIndicator color="#00DC82" :height="2" :throttle="0" />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
.page-left-enter-active,
.page-right-enter-active,
.page-left-leave-active,
.page-right-leave-active {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	transition: all 200ms linear;
}

.page-left-enter-from,
.page-right-leave-to {
	transform: translateX(100%);
}

.page-left-leave-to,
.page-right-enter-from {
	transform: translateX(-100%);
}

.page-left-enter-to,
.page-right-enter-to {
	transform: translateX(0);
}
</style>
