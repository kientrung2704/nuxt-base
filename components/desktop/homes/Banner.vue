<template>
	<ClientOnly>
		<div class="mt-6">
			<div class="demo-image__lazy">
				<base-image v-for="url in urls" :key="url" :source="url" />
			</div>
			<el-skeleton style="width: 100%" :loading="loading" animated>
				<template #template>
					<el-skeleton-item
						variant="h3"
						style="width: 100%; height: 360px; border-radius: 0.75rem"
					/>
				</template>
			</el-skeleton>
			<swiper
				class="relative"
				ref="swiperRef"
				v-if="!loading"
				:modules="modules"
				:slides-per-view="'1.25'"
				:grabCursor="true"
				:speed="1000"
				:autoplay="{
					delay: 2000,
					disableOnInteraction: false,
				}"
				:loop="true"
				:space-between="30"
				:centered-slides="true"
				@swiper="onSwiper"
			>
				<swiper-slide v-for="(item, index) in listData" class="h-[360px]">
					<div class="h-[360px] w-full rounded-xl">
						<img :src="item.img" class="h-full w-full rounded-xl" />
					</div>
				</swiper-slide>
				<base-svg
					name="icon-right-btn"
					class="next-slide"
					@click="swiperRef.slideNext()"
				/>
				<base-svg
					name="icon-left-btn"
					class="previous-slide"
					@click="swiperRef.slidePrev()"
				/>
			</swiper>
		</div>
	</ClientOnly>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
const modules = ref([EffectCoverflow, Autoplay, Navigation]);
const loading = ref(true);
const listData = ref([]);
const swiperRef = ref();
const urls = [
	"https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.2jpeg",
	"https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
	"https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
	"https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
	"https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
	"https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
	"https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
];

onMounted(() => {
	setTimeout(() => {
		listData.value = [
			{
				img: "https://static.mydio.vn/audio-viettel/img.banner/0/0/0/1053_new.jpg?v=1&time=1701672526&w=900&h=300",
			},
			{
				img: "https://static.mydio.vn/audio-viettel/img.banner/0/0/0/1053_new.jpg?v=1&time=1701672526&w=900&h=300",
			},
			{
				img: "https://static.mydio.vn/audio-viettel/img.banner/0/0/0/1023_new.jpg?v=1&time=1701672526&w=900&h=300",
			},
		];
		listData.value = [...listData.value, ...listData.value];
		loading.value = false;
	}, 1000);
});

const onSwiper = (swiper) => {
	swiperRef.value = swiper;
};
</script>

<style scoped>
.next-slide {
	position: absolute;
	z-index: 99;
	top: 50%;
	right: 10%;
	transform: translate(-24px, -50%);
}

.previous-slide {
	position: absolute;
	top: 50%;
	z-index: 99;
	left: 10%;
	transform: translate(24px, -50%);
}

.demo-image__lazy {
	height: 400px;
	overflow-y: auto;
}
.demo-image__lazy .el-image {
	display: block;
	height: 200px;
	width: 360px;
	margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
	margin-bottom: 0;
}

.demo-image__error .block {
	padding: 30px 0;
	text-align: center;
	border-right: solid 1px var(--el-border-color);
	display: inline-block;
	width: 49%;
	box-sizing: border-box;
	vertical-align: top;
}
.demo-image__error .demonstration {
	display: block;
	color: var(--el-text-color-secondary);
	font-size: 14px;
	margin-bottom: 20px;
}
.demo-image__error .el-image {
	padding: 0 5px;
	max-width: 300px;
	max-height: 200px;
	width: 100%;
	height: 200px;
}

.demo-image__error .image-slot {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	background: var(--el-fill-color-light);
	color: var(--el-text-color-secondary);
	font-size: 30px;
}
.demo-image__error .image-slot .el-icon {
	font-size: 30px;
}
</style>
