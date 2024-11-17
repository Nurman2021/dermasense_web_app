<script>
	import Swiper from '$lib/components/Swiper.svelte';
	import Swiper2 from '$lib/components/Swiper2.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="DermaSense" />
</svelte:head>
<main class="mx-4 space-y-8">
	<div class="card-style my-5 h-screen rounded-xl bg-white">
		<Swiper />
	</div>

	<div class="card-style my-5 h-64 rounded-xl bg-white px-4">
		<h1>Keunggulan Sabun Dermasense</h1>
		<hr />
		<div class="grid grid-cols-2 grid-rows-2 gap-4">
			<div>🌟 Mencerahkan Kulit:</div>
			<div>🌿 Bahan Alami:</div>
			<div>🛀 Scrub Lembut Alami</div>
			<div>☕ Aroma Relaksasi</div>
		</div>
	</div>

	<div class="">
		<Swiper2 />
	</div>
	<footer class="card-style h-40 rounded-xl bg-white">@Nurman Awaluddin Footer</footer>
</main>

<style>
</style>
