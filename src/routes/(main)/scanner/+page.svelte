<script>
</script>

<svelte:head>
	<title>My Skin</title>
	<meta name="description" content="DermaSense" />
</svelte:head>
<main class="mx-4 space-y-8">
	<!-- svelte-ignore a11y_missing_attribute -->
	<iframe
		src="https://beekman1802.com/pages/skin-biome-analysis"
		class="mx-auto h-screen w-full max-w-[750px] rounded-lg border-2 border-gray-300"
		allowfullscreen
		allow="camera; microphone"
		id="myFrame"
	>
	</iframe>
	<!-- url#1 =>https://cloud.email.cetaphil.com/skin-selfie.html -->
	<!-- url#2 =>https://skin-analyzer.vlcc.com/analysis -->
	<h1>Data dari iframe:</h1>
	<div class="container mx-auto mt-4 max-w-5xl px-6">
		<!-- Header -->
		<div class="mb-10 text-center">
			<h1 class="text-4xl font-bold text-gray-800 dark:text-white">Skin Analyze Scan</h1>
			<p class="mt-2 text-lg text-gray-600 dark:text-gray-300">
				Get accurate insights about your skin condition by scanning or uploading your photo.
			</p>
		</div>

		<!-- Area Scan -->
		<div class="card-style rounded-xl bg-white p-8 dark:bg-gray-800">
			<div class="flex flex-col items-center space-y-6">
				<!-- Tempat Gambar / Placeholder -->
				<div
					class="flex h-64 w-64 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-100 dark:bg-gray-700"
				>
					<span class="text-lg text-gray-400">Upload your photo</span>
				</div>

				<!-- Tombol -->
				<div class="flex space-x-4">
					<button
						class="bg-blue-500 hover:bg-blue-600 rounded-lg px-6 py-2 font-semibold text-white dark:text-gray-300"
					>
						Upload Photo
					</button>
					<button
						class="bg-green-500 hover:bg-green-600 rounded-lg px-6 py-2 font-semibold text-white dark:text-gray-300"
					>
						Start Scan
					</button>
				</div>
			</div>
		</div>

		<!-- Hasil Analisis -->
		<div class="mt-10">
			<h2 class="mb-6 text-2xl font-bold text-gray-800 dark:text-white">Scan Results</h2>
		</div>
	</div>
	<footer class="h-12">@Nurman Awaluddin Footer</footer>
</main>

<style>
</style>
