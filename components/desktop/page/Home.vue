<template>
	<div class="w-full">
		<!-- <Banner /> -->
		<div class="flex flex-col h-screen">
			<header class="w-full text-center p-4 top-0 bg-transparent fixed z-50">
				<nuxt-link to="swiper">Swiper</nuxt-link>
			</header>
			<main class="flex-1">
				{{ loginRules }}
				<div class="mt-[56px] h-[calc(100dvh-56px)] bg-slate-100">
					<!-- <el-input
						v-model="input"
						placeholder="Please input"
						v-maska="'# ### #######'"
					/> -->
					<el-button type="primary" loading>Loading</el-button>
					<el-form
						ref="ruleFormRef"
						:model="loginForm"
						:rules="loginRules"
						autocomplete="on"
						:validate-on-rule-change="false"
						label-position="left"
					>
						<BaseInputText
							ref="email"
							v-model:model="loginForm.email"
							:model="loginForm.email"
							:rule-form-ref="ruleFormRef"
							:rules="loginRules.email"
							:name-ref="'email'"
							:maxlength="64"
							:placeholder="$t('login.placeholder-email')"
							:error-response="errorResponse.email"
							:label="$t('login.email')"
							:icon-left="true"
						/>
						<BaseInputPassword
							ref="password"
							v-model:model="loginForm.password"
							:model="loginForm.password"
							:rule-form-ref="ruleFormRef"
							:rules="loginRules.password"
							:name-ref="'password'"
							:maxlength="64"
							:placeholder="$t('login.placeholder-password')"
							:error-response="errorResponse.password"
							:label="$t('login.password')"
							:icon-left="true"
							:prefix-icon="'icon-left-btn'"
						/>
					</el-form>
					<!-- <ul
						v-infinite-scroll="load"
						class="infinite-list"
						style="overflow: auto"
					>
						<li v-for="i in count" :key="i" class="infinite-list-item">
							{{ i }}
						</li>
					</ul> -->
				</div>
			</main>
			<!-- <footer
				class="w-full text-center border-t border-grey p-4 sticky bottom-0"
			>
				some footer
			</footer> -->
		</div>
	</div>
</template>

<script setup>
import { vMaska } from "maska/vue";
import {
	RULE_EMAIL,
	RULE_PASSWORD,
	RULE_NUMBER,
	RULE_REQUIRED,
	RULE_PHONE,
} from "@/constants/rule-form";
const ruleFormRef = ref();
const ruleForgotFormRef = ref();
const isForgotPassword = ref(true);
const errorResponse = ref({});
const loginForm = ref({
	email: "",
	password: "",
});

const loginRules = computed(() => {
	return {
		email: RULE_EMAIL("email"),
		password: [RULE_REQUIRED("password"), RULE_NUMBER("password")],
	};
});
const forgotForm = ref({
	email: "",
});
</script>

<style>
.infinite-list {
	height: calc(100dvh - 56px);
	padding: 0;
	margin: 0;
	list-style: none;
}
.infinite-list .infinite-list-item {
	display: flex;
	align-items: center;
	justify-content: center;
	height: 50px;
	background: var(--el-color-primary-light-9);
	margin: 10px;
	color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
	margin-top: 10px;
}
</style>
