<svelte:head>
	<title>My Skin</title>
	<meta name="description" content="DermaSense" />
</svelte:head>
<main class="min-h-screen py-10">
    <div class="container mx-auto max-w-5xl px-6">
      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl font-bold text-gray-800">Skin Analyze Scan</h1>
        <p class="text-gray-600 mt-2 text-lg">
          Get accurate insights about your skin condition by scanning or uploading your photo.
        </p>
      </div>
  
      <!-- Area Scan -->
      <div class="bg-white card-style rounded-xl p-8">
        <div class="flex flex-col items-center space-y-6">
          <!-- Tempat Gambar / Placeholder -->
          <div class="w-64 h-64 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <span class="text-gray-400 text-lg">Upload your photo</span>
          </div>
  
          <!-- Tombol -->
          <div class="flex space-x-4">
            <button class="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600">
              Upload Photo
            </button>
            <button class="bg-green-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-green-600">
              Start Scan
            </button>
          </div>
        </div>
      </div>
  
      <!-- Hasil Analisis -->
      <div class="mt-10">
        <h2 class="text-2xl font-bold text-gray-800 mb-6">Scan Results</h2>
  
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Kartu Analisis -->
          <div class="bg-white card-style rounded-xl p-6 flex items-start space-x-4">
            <div class="bg-blue-100 text-blue-500 p-3 rounded-full">
              <!-- Ikon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11m4-4h4m-4 0l-4 4m0-4l4 4M3 14h6m4 0h11m-11 0l-4-4m0 4l4-4" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Hydration Level</h3>
              <p class="text-gray-600 text-sm mt-1">Your skin hydration is 85% optimal.</p>
            </div>
          </div>
  
          <!-- Kartu Analisis Lainnya -->
          <div class="bg-white card-style rounded-xl p-6 flex items-start space-x-4">
            <div class="bg-red-100 text-red-500 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h11m4-4h4m-4 0l-4 4m0-4l4 4M3 14h6m4 0h11m-11 0l-4-4m0 4l4-4" />
              </svg>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Oiliness</h3>
              <p class="text-gray-600 text-sm mt-1">Excess oil detected in T-zone.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
</main>
  