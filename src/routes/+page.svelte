<script>
	import Swiper from '$lib/components/Swiper.svelte';
	import Swiper2 from '$lib/components/Swiper2.svelte';
	import {Divider} from 'stdf';
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
		  <h2 class="text-white text-lg font-bold">Scheduling</h2>
		  <p class="text-gray-300 text-sm">Plan your day ahead of time.</p>
		</div>
	  
		<!-- Ikon -->
		<div class="absolute right-4 top-1/2 transform -translate-y-1/2">
		  <div class="bg-green-500 rounded-full p-2">
			<svg
			  xmlns="http://www.w3.org/2000/svg"
			  fill="none"
			  viewBox="0 0 24 24"
			  stroke-width="2"
			  stroke="currentColor"
			  class="text-white w-6 h-6"
			>
			  <path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M8 7V3m8 4V3m-4 14h.01M4 11h16M10 21h4M12 11v10m-6-6h12"
			  />
			</svg>
		  </div>
		</div>
	  </div>
	  
	<footer class="card-style h-40 rounded-xl bg-white">@Nurman Awaluddin Footer</footer>
</main>

<style>
</style>
