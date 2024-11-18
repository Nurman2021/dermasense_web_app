<script>
	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
	import { Divider, Button, Icon } from 'stdf';

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
	on:slideChange={() => console.log('slide change')}
	on:swiper={(e) => console.log(e.detail[0])}
>
	<SwiperSlide>
		<div class="flex flex-col items-center card-style bg-white mt-5 rounded-xl">
			<div>
				<image
					src="/images/placeholder/placeholder_1.png"
					alt="image content"
					style="width:300px"
				/>
			</div>
			<div class="flex justify-between items-center w-full px-4 gap-4">
				<div class="space-y-4">
					<h3 class="font-bold text-4xl">Koji Acid Dark Spot Remover</h3>
					<p class="text-sm font-light mb-5">VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C, Retinol, Collagen, Turmeric</p>

					<p>Share or Save for later</p>
				</div>
				<div>
					<Icon name="ri-share-line" size={40}/>
				</div>
			</div>
			<div class="w-full">
				<Divider px="4" />
			</div>
			<div class="w-full mb-4 font-bold">
				<Button radius="xl">PESAN</Button>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="flex flex-col items-center card-style bg-white mt-5 rounded-xl">
			<div>
				<image
					src="/images/placeholder/placeholder_2.png"
					alt="image content"
					style="width:300px"
				/>
			</div>
			<div class="flex justify-between items-center w-full px-4 gap-4">
			<div class="space-y-4">
				<h3 class="font-bold text-4xl">Koji Acid and Charcoal</h3>
				<p class="text-sm font-light mb-5">VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C, Retinol, Collagen, Turmeric</p>

				<p>Share or Save for later</p>
			</div>
			<div>
				<Icon name="ri-share-line" size={40}/>
			</div>
		</div>
			<div class="w-full">
				<Divider px="4" />
			</div>
			<div class="w-full mb-4 font-bold">
				<Button radius="xl">PESAN</Button>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="flex flex-col items-center card-style bg-white mt-5 rounded-xl">
			<div>
				<image
					src="/images/placeholder/placeholder_3.png"
					alt="image content"
					style="width:300px"
				/>
			</div>
			<div class="flex justify-between items-center w-full px-4 gap-4">
				<div class=" space-y-4">
					<h3 class="font-bold text-4xl">Koji Brightening Lemon</h3>
					<p class="text-sm font-light mb-5">VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C, Retinol, Collagen, Turmeric</p>

					<p>Share or Save for later</p>
				</div>
				<div>
					<Icon name="ri-share-line" size={40}/>
				</div>
			</div>
			<div class="w-full">
				<Divider px="4" />
			</div>
			<div class="w-full mb-4 font-bold">
				<Button radius="xl">PESAN</Button>
			</div>
		</div>
	</SwiperSlide>
</Swiper>
