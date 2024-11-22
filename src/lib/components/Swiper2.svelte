<script>
	// import Swiper core and required modules
	import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper';
	import { Swiper, SwiperSlide } from 'swiper/svelte';

	// Import Swiper styles
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/scrollbar';
</script>

<Swiper modules={[Navigation, Scrollbar, A11y, Autoplay]} spaceBetween={20} slidesPerView={2} autoplay={{
    delay: 2500,
}}>
	<SwiperSlide>
		<div class="card-style flex h-96 flex-col items-center justify-center rounded-xl bg-white p-4 dark:bg-gray-800 dark:text-white">
			<div>
				<image
					src="/images/tutorial/wash-step-1.png"
					alt="image content"
					style="width:150px;border-radius:100%"
				/>
			</div>
			<h3 class="mb-4 text-xl font-bold">Basahi Kulit</h3>
			<p class="max-w-60 text-center text-sm text-gray-600 dark:text-gray-300">
				Cuci area kulit yang ingin dibersihkan dengan air hangat untuk membuka pori-pori.
			</p>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="card-style flex h-96 flex-col items-center justify-center rounded-xl bg-white p-4 dark:bg-gray-800 dark:text-white">
			<div>
				<image
					src="/images/tutorial/wash-step-2.png"
					alt="image content"
					style="width:150px;border-radius:100%"
				/>
			</div>
			<h3 class="mb-4 text-xl font-bold">Aplikasikan</h3>
			<p class="max-w-60 text-center text-sm text-gray-600 dark:text-gray-300">
				Gosokkan sabun di tangan hingga berbusa, lalu aplikasikan ke kulit dengan gerakan memijat
				melingkar.
			</p>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="card-style flex h-96 flex-col items-center justify-center rounded-xl bg-white p-4 dark:bg-gray-800 dark:text-white">
			<div>
				<image
					src="/images/tutorial/wash-step-3.png"
					alt="image content"
					style="width:150px;border-radius:100%"
				/>
			</div>
			<h3 class="mb-4 text-xl font-bold">Eksfoliasi</h3>
			<p class="max-w-60 text-center text-sm text-gray-600 dark:text-gray-300">
				Nikmati scrub lembut dari kopi untuk mengangkat sel kulit mati. Hindari area sensitif
				seperti sekitar mata.
			</p>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="card-style flex h-96 flex-col items-center justify-center rounded-xl bg-white p-4 dark:bg-gray-800 dark:text-white">
			<div>
				<image
					src="/images/tutorial/wash-step-4.png"
					alt="image content"
					style="width:150px;border-radius:100%"
				/>
			</div>
			<h3 class="mb-4 text-xl font-bold">Bilas</h3>
			<p class="max-w-60 text-center text-sm text-gray-600 dark:text-gray-300">
				Bilas hingga bersih dan keringkan dengan handuk lembut
			</p>
		</div>
	</SwiperSlide>
	<SwiperSlide>
		<div class="card-style flex h-96 flex-col items-center justify-center rounded-xl bg-white p-4 dark:bg-gray-800 dark:text-white">
			<div>
				<image
					src="/images/tutorial/wash-step-5.png"
					alt="image content"
					style="width:150px;border-radius:100%"
				/>
			</div>
			<h3 class="mb-4 text-xl font-bold">Gunakan Rutin</h3>
			<p class="max-w-60 text-center text-sm text-gray-600 dark:text-gray-300">
				Gunakan sabun ini dua kali sehari, pagi dan malam, untuk hasil terbaik.
			</p>
		</div>
	</SwiperSlide>
</Swiper>
