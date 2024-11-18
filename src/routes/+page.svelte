<script>
	import Swiper from '$lib/components/Swiper.svelte';
	import Swiper2 from '$lib/components/Swiper2.svelte';
	import {Divider, Icon} from 'stdf';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="DermaSense" />
</svelte:head>
<main class="mx-4 space-y-8">
		<Swiper />

	<div class="card-style my-5 rounded-xl bg-white p-4 flex flex-col justify-center">
		<div>
			<h1 class="text-2xl font-bold text-center">Keunggulan Sabun Dermasense</h1>
			<p class="text-sm text-gray-600 text-center">Kami percaya bahan alami lebih baik untuk kulit</p>
			<Divider px="4"/>
			<div class="grid grid-cols-2 grid-rows-2 text-center space-y-6">
				<div class="p-4">
					<h2 class="text-xl font-bold"><span class="text-4xl">🌟</span><br> Mencerahkan Kulit</h2>
					<p class="text-sm text-gray-600">Mengurangi noda hitam dan kulit kusam</p>
				</div>
				<div>
					<h2 class="text-xl font-bold"><span class="text-4xl">🌿</span><br> Bahan Alami</h2>
					<p class="text-sm text-gray-600">Tanpa bahan kimia keras, aman untuk kulit sensitif</p>
				</div>
				<div class="p-4">
					<h2 class="text-xl font-bold"><span class="text-4xl">🛀</span> <br> Scrub Lembut Alami</h2>
					<p class="text-sm text-gray-600">Mengangkat sel kulit mati</p>
				</div>
				<div class="p-4">
					<h2 class="text-xl font-bold"><span class="text-4xl">☕</span> <br> Aroma Relaksasi</h2>
					<p class="text-sm text-gray-600">Memberikan Kesegaran dengan wangi kopi Alami</p>
				</div>
			</div>
		</div>
	</div>

	<Swiper2 />

	<div class="relative bg-gray-800 rounded-lg overflow-hidden h-32 flex items-center">
		<!-- Background -->
		<img
		  src="/images/makeup.jpg" 
		  alt="Background"
		  class="absolute inset-0 w-full h-full object-cover opacity-50"
		/>
	  
		<!-- Konten Teks -->
		<div class="relative z-10 p-4">
		  <h2 class="text-white text-lg font-bold">Daily Routine</h2>
		  <p class="text-gray-300 text-sm">Selesaikan Perawatan harian</p>
		</div>
	  
		<!-- Ikon -->
		<div class="absolute right-4 top-1/2 transform -translate-y-1/2">
		  <div class="text-white rounded-full p-2">
			<Icon name="ri-checkbox-multiple-fill" size={24}/>
		  </div>
		</div>
	  </div>
	  
	<div class="bg-white card-style rounded-xl p-6 text-center w-full">
		<!-- Header -->
		<div class="mb-4">
		  <h1 class="text-xl font-bold text-pink-600">DermaSense</h1>
		  <p class="text-gray-500">Made with <span class="text-red-500">❤️</span> by Sikobe</p>
		</div>
	  
		<!-- Deskripsi -->
		<p class="text-sm text-gray-600 mb-6">
		 Memberikan dukungan terbaik untuk Kulit Cerah Alami. Menemani berbagai Rutinitas
		</p>
	  	  
		<!-- Copyright -->
		 
		<div class="text-xs text-gray-400 mb-4 border-y border-gray-300 py-4">
		  Copyright © Enabled 2024. All Rights Reserved.
		</div>
	  
		<!-- Link tambahan -->
		<div class="text-xs text-gray-500 space-x-4">
		  <a href="/" class="hover:text-pink-600">Privacy Policy</a>
		  <a href="/" class="hover:text-pink-600 border-x border-gray-300 px-4">Terms and Conditions</a>
		  <a href="/" class="hover:text-pink-600">Back to Top</a>
		</div>
	  </div>
	  <footer class="h-12">@Nurman Awaluddin Footer</footer>

	  
</main>

<style>
</style>
