<script>
	// let dailyRoutine = [
	// 	{
	// 		time: '08:00 AM - 09:00 AM',
	// 		product: 'Sabun Eksfoliasi',
	// 		type: 'Sabun',
	// 		notes: 'Digunakan untuk mandi pagi',
	// 		icon: '🛁'
	// 	},
	// 	{
	// 		time: '10:00 AM - 10:15 AM',
	// 		product: 'Lotion Minyak Esensial',
	// 		type: 'Lotion',
	// 		notes: 'Melembabkan kulit setelah mandi pagi',
	// 		icon: '🧴'
	// 	},
	// 	{
	// 		time: '08:00 PM - 09:00 PM',
	// 		product: 'Sabun Aroma Terapi',
	// 		type: 'Sabun',
	// 		notes: 'Mandi malam untuk relaksasi',
	// 		icon: '🌸'
	// 	}
	// ];

	let newRoutine = { time: '', product: '', type: '', notes: '' };
	let dailyRoutine = []; // Data seperti sebelumnya

	function addRoutine() {
		if (newRoutine.product && newRoutine.time) {
			dailyRoutine = [...dailyRoutine, { ...newRoutine, icon: '🛁' }];
			newRoutine = { time: '', product: '', type: '', notes: '' };
		}
	}
</script>

<div class="bg-gray-100 p-4">
	<h2 class="text-lg font-semibold">Tambah Rutinitas</h2>
	<form on:submit|preventDefault={addRoutine}>
		<input
			type="text"
			bind:value={newRoutine.time}
			placeholder="Waktu"
			class="rounded border p-2"
		/>
		<input
			type="text"
			bind:value={newRoutine.product}
			placeholder="Produk"
			class="rounded border p-2"
		/>
		<select bind:value={newRoutine.type} class="rounded border p-2">
			<option value="Sabun">Sabun</option>
			<option value="Lotion">Lotion</option>
		</select>
		<input
			type="text"
			bind:value={newRoutine.notes}
			placeholder="Catatan"
			class="rounded border p-2"
		/>
		<button type="submit" class="bg-blue-500 rounded px-4 py-2 text-white">Tambah</button>
	</form>
</div>
<div class="mx-auto mt-10 max-w-lg">
	<!-- Header Rutinitas -->
	<div class="routine-box bg-blue-500 p-4 text-white">
		<h1 class="text-lg font-semibold">Rutinitas Sabun Harian</h1>
		<p class="mt-2">Catat penggunaan sabun dan lotion Anda setiap hari!</p>
	</div>

	<!-- Daftar Rutinitas -->
	<ul class="mt-4 rounded-md bg-white shadow-md">
		{#each dailyRoutine as routine}
			<li class="flex items-start border-b border-gray-200 p-4 last:border-none">
				<!-- Waktu -->
				<div class="w-32 text-sm text-gray-500">
					<p>{routine.time}</p>
				</div>

				<!-- Detail Produk -->
				<div class="flex-1">
					<h3 class="font-semibold text-gray-900">
						{routine.product} <span class="text-xs text-gray-400">({routine.type})</span>
					</h3>
					<div class="mt-1 flex items-center text-sm text-gray-500">
						<span class="mr-2">{routine.icon}</span>
						<p>{routine.notes}</p>
					</div>
				</div>
			</li>
		{/each}
	</ul>
</div>

<style>
	.routine-box {
		border-radius: 0.5rem;
		box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
	}
</style>
