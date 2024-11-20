<script>
	import Swiper from '$lib/components/Swiper.svelte';
	import Swiper2 from '$lib/components/Swiper2.svelte';
	import { Divider, Icon } from 'stdf';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="DermaSense" />
</svelte:head>
<main class="mx-4 space-y-8">
	<Swiper />

	<div class="card-style my-5 flex flex-col justify-center rounded-xl bg-white p-4">
		<div>
			<h1 class="text-center text-2xl font-bold">Keunggulan Sabun Dermasense</h1>
			<p class="text-center text-sm text-gray-600">
				Kami percaya bahan alami lebih baik untuk kulit
			</p>
			<Divider px="4" />
			<div class="grid grid-cols-2 grid-rows-2 space-y-6 text-center">
				<div class="p-4">
					<h2 class="text-xl font-bold">
						<span class="text-4xl">🌟</span><br /> Mencerahkan Kulit
					</h2>
					<p class="text-sm text-gray-600">Mengurangi noda hitam dan kulit kusam</p>
				</div>
				<div>
					<h2 class="text-xl font-bold"><span class="text-4xl">🌿</span><br /> Bahan Alami</h2>
					<p class="text-sm text-gray-600">Tanpa bahan kimia keras, aman untuk kulit sensitif</p>
				</div>
				<div class="p-4">
					<h2 class="text-xl font-bold">
						<span class="text-4xl">🛀</span> <br /> Scrub Lembut Alami
					</h2>
					<p class="text-sm text-gray-600">Mengangkat sel kulit mati</p>
				</div>
				<div class="p-4">
					<h2 class="text-xl font-bold"><span class="text-4xl">☕</span> <br /> Aroma Relaksasi</h2>
					<p class="text-sm text-gray-600">Memberikan Kesegaran dengan wangi kopi Alami</p>
				</div>
			</div>
		</div>
	</div>

	<Swiper2 />

	<div class="relative flex h-32 items-center overflow-hidden rounded-lg bg-gray-800">
		<!-- Background -->
		<img
			src="/images/makeup.jpg"
			alt="Background"
			class="absolute inset-0 h-full w-full object-cover opacity-50"
		/>

		<!-- Konten Teks -->
		<div class="relative z-10 p-4">
			<h2 class="text-lg font-bold text-white">Daily Routine</h2>
			<p class="text-sm text-gray-300">Selesaikan Perawatan harian</p>
		</div>

		<!-- Ikon -->
		<div class="absolute right-4 top-1/2 -translate-y-1/2 transform">
			<div class="rounded-full p-2 text-white">
				<Icon name="ri-checkbox-multiple-fill" size={24} />
			</div>
		</div>
	</div>

	<div class="card-style w-full rounded-xl bg-white p-6 text-center">
		<!-- Header -->
		<div class="mb-4">
			<h1 class="text-pink-600 text-xl font-bold">DermaSense</h1>
			<p class="text-gray-500">Made with <span class="text-red-500">❤️</span> by Sikobe</p>
		</div>

		<!-- Deskripsi -->
		<p class="mb-6 text-sm text-gray-600">
			Memberikan dukungan terbaik untuk Kulit Cerah Alami. Menemani berbagai Rutinitas
		</p>

		<!-- Copyright -->

		<div class="mb-4 border-y border-gray-100 py-4 text-xs text-gray-400">
			Copyright © Enabled 2024. All Rights Reserved.
		</div>

		<!-- Link tambahan -->
		<div class="space-x-4 text-xs text-gray-500">
			<a href="/" class="hover:text-pink-600">Privacy Policy</a>
			<a href="/" class="hover:text-pink-600 border-x border-gray-100 px-4">Terms and Conditions</a>
			<a href="/" class="hover:text-pink-600">Back to Top</a>
		</div>
	</div>
	<footer class="h-12">@Nurman Awaluddin Footer</footer>
</main>

<style>
</style>
