<script>
	import { onMount } from 'svelte';

	// Data produk (bisa dipindahkan ke database)
	const products = [
		{ id: 1, name: 'Sabun Eksfoliasi', type: 'sabun' },
		{ id: 2, name: 'Sabun Minyak Esensial', type: 'sabun' },
		{ id: 3, name: 'Sabun Aroma Terapi', type: 'sabun' },
		{ id: 4, name: 'Lotion Eksfoliasi', type: 'lotion' },
		{ id: 5, name: 'Lotion Minyak Esensial', type: 'lotion' },
		{ id: 6, name: 'Lotion Aroma Terapi', type: 'lotion' }
	];

	let dailyRoutine = [];
	let selectedProduct = null;

	// Tambahkan produk ke rutinitas harian
	function addToRoutine() {
		if (selectedProduct) {
			const product = products.find((p) => p.id === selectedProduct);
			dailyRoutine = [...dailyRoutine, { ...product, date: new Date() }];
			selectedProduct = null;
		}
	}

	// Simulasi fetch jika ingin mengambil data dari database
	onMount(() => {
		console.log('Aplikasi dimulai');
	});
</script>

<div class="container">
	<h1>Aplikasi Daily Routine</h1>

	<!-- Pilih produk -->
	<div class="product-list">
		<h2>Pilih Produk</h2>
		<select bind:value={selectedProduct}>
			<option value="" disabled selected>Pilih produk...</option>
			{#each products as product}
				<option value={product.id}>{product.name} ({product.type})</option>
			{/each}
		</select>
		<button on:click={addToRoutine} disabled={!selectedProduct}>Tambah ke Rutinitas</button>
	</div>

	<!-- Daftar rutinitas harian -->
	<div class="routine-list">
		<h2>Rutinitas Harian</h2>
		{#if dailyRoutine.length > 0}
			<ul>
				{#each dailyRoutine as routine (routine.date)}
					<li>
						{routine.name} - {routine.type} (Tanggal: {new Date(routine.date).toLocaleDateString()})
					</li>
				{/each}
			</ul>
		{:else}
			<p>Belum ada rutinitas untuk hari ini.</p>
		{/if}
	</div>
</div>

<style>
	.container {
		max-width: 600px;
		margin: 0 auto;
		padding: 1rem;
	}

	.product-list,
	.routine-list {
		margin-bottom: 1rem;
	}

	select {
		padding: 0.5rem;
		margin-right: 0.5rem;
	}

	button {
		padding: 0.5rem 1rem;
		cursor: pointer;
	}
</style>
