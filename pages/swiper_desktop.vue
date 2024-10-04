<!-- <template>
	<div>
		<ClientOnly>
			<div id="tranding">
				<div class="mt-6">
					<swiper
						:modules="modules"
						:slides-per-view="'1.25'"
						:grabCursor="true"
						:speed="1000"
						:autoplay="{
							delay: 2000,
							disableOnInteraction: false,
						}"
						:loop="true"
						:height="'200'"
						:space-between="30"
						:centeredSlides="true"
					>
						<swiper-slide
							class="swiper-slide tranding-slide"
							v-for="index in 10"
						>
							<div class="tranding-slide-img h-[360px] w-full rounded-xl">
								<img
									src="https://static.mydio.vn/audio-viettel/img.banner/0/0/0/1053_new.jpg?v=1&time=1701672526&w=900&h=300"
									class="h-full w-full rounded-xl"
									alt="Tranding"
								/>
							</div>
							<div class="tranding-slide-content">
								<h1 class="food-price">$20</h1>
								<div class="tranding-slide-content-bottom">
									<h2 class="food-name">Special Pizza</h2>
									<h3 class="food-rating">
										<span>{{ index }}</span>
										<div class="rating">
											<ion-icon name="star"></ion-icon>
											<ion-icon name="star"></ion-icon>
											<ion-icon name="star"></ion-icon>
											<ion-icon name="star"></ion-icon>
											<ion-icon name="star"></ion-icon>
										</div>
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
// import "swiper/css/effect-coverflow";
const modules = ref([EffectCoverflow, Autoplay]);
</script> -->

<template>
	<div>1</div>
</template>
