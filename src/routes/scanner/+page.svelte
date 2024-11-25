<script>
</script>

<svelte:head>
	<title>My Skin</title>
	<meta name="description" content="DermaSense" />
</svelte:head>
<main class="mx-4 space-y-8">
	<!-- svelte-ignore a11y_missing_attribute -->
	<iframe
		src="https://skin-analyzer.vlcc.com/analysis"
		class="h-[500px] w-full rounded-lg border-2 border-gray-300"
		allowfullscreen
		allow="camera; microphone"
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
		<div class="card-style rounded-xl bg-white dark:bg-gray-800 p-8">
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

			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Kartu Analisis -->
				<div class="card-style flex items-start space-x-4 rounded-xl bg-white dark:bg-gray-800 p-6">
					<div class="bg-blue-100 rounded-full p-3">
						<!-- Ikon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 10h11m4-4h4m-4 0l-4 4m0-4l4 4M3 14h6m4 0h11m-11 0l-4-4m0 4l4-4"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-white">Hydration Level</h3>
						<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Your skin hydration is 85% optimal.</p>
					</div>
				</div>

				<!-- Kartu Analisis Lainnya -->
				<div class="card-style flex items-start space-x-4 rounded-xl bg- dark:bg-gray-800 p-6">
					<div class="bg-red-100 text-red-500 rounded-full p-3">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3 10h11m4-4h4m-4 0l-4 4m0-4l4 4M3 14h6m4 0h11m-11 0l-4-4m0 4l4-4"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-white">Oiliness</h3>
						<p class="mt-1 text-sm text-gray-600 dark:text-gray-300">Excess oil detected in T-zone.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<footer class="h-12">@Nurman Awaluddin Footer</footer>
</main>
