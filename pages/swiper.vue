<template>
	<div>
		<nuxt-link to="/">Index</nuxt-link>
		<ClientOnly>
			<div id="tranding">
				<div class="container">
					<swiper
						:modules="modules"
						:effect="'coverflow'"
						:slides-per-view="'auto'"
						:grabCursor="true"
						:speed="1000"
						:autoplay="{
							delay: 2000,
							disableOnInteraction: false,
						}"
						:loop="true"
						:space-between="50"
						:centeredSlides="true"
						:coverflowEffect="{
							rotate: 0,
							stretch: 0,
							depth: 100,
							modifier: 1,
						}"
					>
						<swiper-slide
							class="swiper-slide tranding-slide"
							v-for="index in 4"
						>
							<div class="tranding-slide-img">
								<img src="@/assets/images/tranding-food-1.png" alt="Tranding" />
							</div>
							<div class="tranding-slide-content">
								<h1 class="food-price">$20</h1>
								<div class="tranding-slide-content-bottom">
									<h2 class="food-name">Special Pizza</h2>
									<h3 class="food-rating">
										<span>{{ index }}</span>
									</h3>
								</div>
							</div>
						</swiper-slide>
					</swiper>
				</div>
			</div>
		</ClientOnly>
	</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
const modules = ref([EffectCoverflow, Autoplay]);
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap");

*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	list-style-type: none;
	text-decoration: none;
}

:root {
	--primary: #ec994b;
	--white: #ffffff;
	--bg: #f5f5f5;
}

html {
	font-size: 62.5%;
	font-family: "Montserrat", sans-serif;
	scroll-behavior: smooth;
}

@media (min-width: 1440px) {
	html {
		zoom: 1.5;
	}
}

@media (min-width: 2560px) {
	html {
		zoom: 1.7;
	}
}

@media (min-width: 3860px) {
	html {
		zoom: 2.5;
	}
}

::-webkit-scrollbar {
	width: 1.3rem;
}

::-webkit-scrollbar-thumb {
	border-radius: 1rem;
	background: #797979;
	transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
	background: #222224;
}

::-webkit-scrollbar-track {
	background: #f9f9f9;
}

body {
	font-size: 1.6rem;
	background: var(--bg);
}

.container {
	max-width: 124rem;
	padding: 0 1rem;
	margin: 0 auto;
}

.text-center {
	text-align: center;
}

.section-heading {
	font-size: 3rem;
	color: var(--primary);
	padding: 2rem 0;
}

#tranding {
	padding: 4rem 0;
}

@media (max-width: 1440px) {
	#tranding {
		padding: 7rem 0;
	}
}

#tranding .tranding-slider {
	height: 52rem;
	padding: 2rem 0;
	position: relative;
}

@media (max-width: 500px) {
	#tranding .tranding-slider {
		height: 45rem;
	}
}

.tranding-slide {
	width: 37rem;
	height: 42rem;
	position: relative;
}

.tranding-slide .tranding-slide-img img {
	width: 37rem;
	height: 42rem;
	border-radius: 2rem;
	object-fit: cover;
}

.tranding-slide .tranding-slide-content {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
}

@media (max-width: 500px) {
	.tranding-slide {
		width: 250px !important;
		height: 375px !important;
	}

	.tranding-slide .tranding-slide-img img {
		width: 250px !important;
		height: 375px !important;
	}
}

.tranding-slide-content .food-price {
	position: absolute;
	top: 2rem;
	right: 2rem;
	color: var(--white);
}

.tranding-slide-content .tranding-slide-content-bottom {
	position: absolute;
	bottom: 2rem;
	left: 2rem;
	color: var(--white);
}

.food-rating {
	padding-top: 1rem;
	display: flex;
	gap: 1rem;
}

.rating ion-icon {
	color: var(--primary);
}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
	display: none;
}

.tranding-slider-control {
	position: relative;
	bottom: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.tranding-slider-control .swiper-button-next {
	left: 58% !important;
	transform: translateX(-58%) !important;
}

@media (max-width: 990px) {
	.tranding-slider-control .swiper-button-next {
		left: 70% !important;
		transform: translateX(-70%) !important;
	}
}

@media (max-width: 450px) {
	.tranding-slider-control .swiper-button-next {
		left: 80% !important;
		transform: translateX(-80%) !important;
	}
}

@media (max-width: 990px) {
	.tranding-slider-control .swiper-button-prev {
		left: 30% !important;
		transform: translateX(-30%) !important;
	}
}

@media (max-width: 450px) {
	.tranding-slider-control .swiper-button-prev {
		left: 20% !important;
		transform: translateX(-20%) !important;
	}
}

.tranding-slider-control .slider-arrow {
	background: var(--white);
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 50%;
	left: 42%;
	transform: translateX(-42%);
	filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.tranding-slider-control .slider-arrow ion-icon {
	font-size: 2rem;
	color: #222224;
}

.tranding-slider-control .slider-arrow::after {
	content: "";
}

.tranding-slider-control .swiper-pagination {
	position: relative;
	width: 15rem;
	bottom: 1rem;
}

.tranding-slider-control .swiper-pagination .swiper-pagination-bullet {
	filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.tranding-slider-control .swiper-pagination .swiper-pagination-bullet-active {
	background: var(--primary);
}
</style>
