<script>
	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Divider, Button } from 'stdf';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import 'swiper/css/scrollbar';
</script>

<Swiper
	modules={[Navigation, Pagination, Scrollbar, A11y]}
	spaceBetween={50}
	slidesPerView={1}
	navigation
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])}
>
	<SwiperSlide>
		<div class="flex flex-col items-center">
			<div>
				<image
					src="/images/placeholder/placeholder_1.png"
					alt="image content"
					style="width:300px"
				/>
			</div>

			<div class="mx-6 w-full">
				<Divider px="4" />
			</div>
			<div class="w-full">
				<Button radius="xl">button</Button>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="flex flex-col items-center space-y-4">
			<div>
				<image
					src="/images/placeholder/placeholder_2.png"
					alt="image content"
					style="width:300px"
				/>
			</div>

			<div class="w-full">
				<Divider px="4" />
			</div>
			<div class="w-full">
				<Button radius="xl">button</Button>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="flex h-full flex-col items-center">
			<div>
				<image
					src="/images/placeholder/placeholder_3.png"
					alt="image content"
					style="width:300px"
					class="rounded-full"
				/>
			</div>

			<div class="w-full">
				<Divider px="4" />
			</div>
			<div class="w-full">
				<Button radius="xl">button</Button>
			</div>
		</div>
	</SwiperSlide>
</Swiper>
