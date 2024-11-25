<script>
	// import Swiper core and required modules
	import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
	import { Divider, Button, Icon } from 'stdf';

	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/scrollbar';
	import 'swiper/css/autoplay'
</script>

<Swiper modules={[Navigation, Scrollbar, A11y, Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{
    delay: 2500,
}}>
	<SwiperSlide>
		<div class="card-style mt-5 flex flex-col items-center rounded-xl bg-white dark:bg-gray-800 dark:text-white">
			<div>
				<image
					src="/images/product/aromaterapi.png"
					alt="image content"
					style="width:400px"
				/>
			</div>
			<div class="flex w-full items-center justify-between gap-4 px-4">
				<div class="space-y-4">
					<h3 class="text-4xl font-bold">Aromaterapi</h3>
					<p class="mb-5 text-sm font-light">
						VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C, Retinol, Collagen,
						Turmeric
					</p>

					<p>Share or Save for later</p>
				</div>
				<div>
					<Icon name="ri-share-line" size={40} />
				</div>
			</div>
			<div class="w-full">
				<Divider px="4" />
			</div>
			<div class="mb-4 w-full font-bold">
				<Button radius="xl">PESAN</Button>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="card-style mt-5 flex flex-col items-center rounded-xl bg-white dark:bg-gray-800 dark:text-white">
			<div>
				<image
					src="/images/product/eksfoliasi.png"
					alt="image content"
					style="width:400px"
				/>
			</div>
			<div class="flex w-full items-center justify-between gap-4 px-4">
				<div class="space-y-4">
					<h3 class="text-4xl font-bold">Eksfoliasi</h3>
					<p class="mb-5 text-sm font-light">
						VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C, Retinol, Collagen,
						Turmeric
					</p>

					<p>Share or Save for later</p>
				</div>
				<div>
					<Icon name="ri-share-line" size={40} />
				</div>
			</div>
			<div class="w-full">
				<Divider px="4" />
			</div>
			<div class="mb-4 w-full font-bold">
				<Button radius="xl">PESAN</Button>
			</div>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="card-style mt-5 flex flex-col items-center rounded-xl bg-white dark:bg-gray-800 dark:text-white">
			<div>
				<image
					src="/images/product/minyak-esensial.png"
					alt="image content"
					style="width:400px"
				/>
			</div>
			<div class="flex w-full items-center justify-between gap-4 px-4">
				<div class=" space-y-4">
					<h3 class="text-4xl font-bold">Minyak Esensial</h3>
					<p class="mb-5 text-sm font-light">
						VALITIC Kojic Acid Dark Spot Remover Soap Bars with Vitamin C, Retinol, Collagen,
						Turmeric
					</p>

					<p>Share or Save for later</p>
				</div>
				<div>
					<Icon name="ri-share-line" size={40} />
				</div>
			</div>
			<div class="w-full">
				<Divider px="4" />
			</div>
			<div class="mb-4 w-full font-bold">
				<Button radius="xl">PESAN</Button>
			</div>
		</div>
	</SwiperSlide>
</Swiper>
