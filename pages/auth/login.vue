<template>
	<div>
		<div @click="onLogin4g">Login</div>
	</div>
</template>

<script setup>
const $auth = useAuth();
const onLogin4g = async () => {
	try {
		const response = await $auth.loginWith("google");

		console.log(response._data);
	} catch (err) {
		console.log(err);
	}
};
</script>
