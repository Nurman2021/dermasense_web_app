<svelte:head>
	<title>My Skin</title>
	<meta name="description" content="DermaSense" />
</svelte:head>
<main class="mx-4 space-y-8">
	<div class="container mx-auto mt-4 max-w-5xl px-6">
		<!-- Header -->
		<div class="mb-10 text-center">
			<h1 class="text-4xl font-bold text-gray-800 dark:text-white">Skin Analyze Scan</h1>
			<p class="mt-2 text-lg text-gray-600 dark:text-gray-300">
				Get accurate insights about your skin condition by scanning or uploading your photo.
			</p>
		</div>

		<!-- Area Scan -->

		<a
			href="/faceScanner"
			class="card-style flex flex-wrap items-center justify-center gap-4 rounded-lg bg-white p-4 dark:bg-gray-800"
		>
			<img src="/images/face-dark.png" alt="face scan" class="hidden dark:block" width="300" />
			<img src="/images/face-light.png" alt="face scan" class="block dark:hidden" width="300" />
			<div>
				<h1 class="text-2xl font-bold">Scan Your Face First</h1>
				<p class="text-sm font-light">Klik <strong>GET STARTED</strong> untuk mulai analisa</p>
			</div>
		</a>

		<!-- Hasil Analisis -->
		<div class="mt-10">
			<!-- <h2 class="mb-6 text-2xl font-bold text-gray-800 dark:text-white">Scan Results</h2> -->
		</div>
	</div>
	<!-- <footer class="h-12">@Nurman Awaluddin Footer</footer> -->
</main>

<style>
</style>
