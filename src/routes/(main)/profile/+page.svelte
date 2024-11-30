<script>
	import { onMount } from 'svelte';
	import { Cell, CellGroup } from 'stdf';
	export let data;

	let profile = {};
	onMount(async () => {
		profile = await data.session.user.identities[0].identity_data;
	});
</script>

<svelte:head>
	<title>My Account</title>
	<meta name="description" content="DermaSense" />
</svelte:head>
<main class="mx-4 space-y-8">
	<div class="relative h-[60vh] rounded-lg bg-gray-900">
		<!-- Background Blur -->
		<div class="absolute inset-0 flex items-center justify-center">
			<img
				src={profile.avatar_url}
				alt="Profile Background"
				class="h-full w-full object-cover blur-xl"
			/>
		</div>

		<!-- Card Content -->
		<div
			class="relative flex h-full w-full flex-col items-center justify-center rounded-xl bg-gray-900 bg-opacity-50 backdrop-blur-sm"
		>
			<!-- Gambar Profil -->
			<div class="relative">
				<img
					src={profile.avatar_url}
					alt="Profile"
					class="h-36 w-36 rounded-full border-4 border-gray-700 object-cover shadow-[-1px_-2px_19px_5px_rgba(245,_128,_130,_0.26)] dark:shadow-[-1px_-2px_19px_5px_rgba(50,_25,_174,_0.26)]"
				/>
				<div
					class="bg-red-500 absolute bottom-0 right-0 flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-800"
				>
					❤️
				</div>
			</div>
			<!-- Nama -->
			<h1 class="mt-4 text-xl font-semibold text-white">{profile.full_name}</h1>
			<!-- Lokasi -->
			<p class="text-gray-300">{profile.email}</p>
		</div>
	</div>

	<!-- Wrapper Profil -->

	<div class="card-style rounded-xl bg-white py-10 dark:bg-gray-800">
		<div class="px-6">
			<!-- Judul Section -->
			<div class="mb-8 text-center">
				<h2 class="text-3xl font-bold text-gray-800 dark:text-darkWhite">Skin Analysis Points</h2>
				<p class="mt-2 text-gray-600">Discover detailed insights about your skin condition.</p>
			</div>

			<!-- Grid Cards -->
			<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				<!-- Card 1 -->
				<div class="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md dark:bg-darkBlack">
					<div class="bg-red-100 text-red-500 rounded-full p-3">
						<!-- Ikon 1 -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12h6m-3-3v6m-9 2a9 9 0 1118 0H3z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-white">Hydration Level</h3>
						<p class="mt-1 text-sm text-gray-600">
							Analyze how hydrated your skin is for better care.
						</p>
					</div>
				</div>

				<!-- Card 2 -->
				<div class="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md dark:bg-darkBlack">
					<div class="bg-blue-100 text-blue-500 rounded-full p-3">
						<!-- Ikon 2 -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M17 20h5v-2a2 2 0 00-2-2h-3v4zM5 20v-4H2a2 2 0 00-2 2v2h5z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-white">Skin Texture</h3>
						<p class="mt-1 text-sm text-gray-600">
							Check for smoothness or rough patches in your skin.
						</p>
					</div>
				</div>

				<!-- Card 3 -->
				<div class="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md dark:bg-darkBlack">
					<div class="bg-green-100 text-green-500 rounded-full p-3">
						<!-- Ikon 3 -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M16 7h-2a3 3 0 00-6 0H6a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2V9a2 2 0 00-2-2z"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-800">Oiliness</h3>
						<p class="mt-1 text-sm text-gray-600">
							Understand areas prone to excess oil production.
						</p>
					</div>
				</div>

				<!-- Card 4 -->
				<div class="flex items-start space-x-4 rounded-lg bg-white p-6 shadow-md dark:bg-darkBlack">
					<div class="bg-yellow-100 text-yellow-500 rounded-full p-3">
						<!-- Ikon 4 -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M13.828 21.743a9.015 9.015 0 002.585-.672l.867-.444a8.99 8.99 0 001.56-1.06m-10.504.452A8.99 8.99 0 013.92 19.566M21.743 13.828A9 9 0 015 5m.218 7.588a7.5 7.5 0 1111.764 0m-11.764 0a3 3 0 100-2"
							/>
						</svg>
					</div>
					<div>
						<h3 class="text-lg font-semibold text-gray-800 dark:text-white">Sensitivity</h3>
						<p class="mt-1 text-sm text-gray-600">Evaluate areas sensitive to external factors.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<CellGroup shadow="lg" radius="xl">
		<Cell
			title="Group"
			detail="Increase projection"
			mx="0"
			my="0"
			shadow="none"
			line
			radius="none"
		/>
		<Cell title="Group" detail="Increase the corner" mx="0" my="0" shadow="none" radius="none" />
	</CellGroup>
	<footer class="h-12">@Nurman Awaluddin Footer</footer>
</main>
