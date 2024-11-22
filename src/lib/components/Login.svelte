<script>
	export let data;
	export let useDark;
	import { Auth } from '@supabase/auth-ui-svelte';
	import { ThemeSupa } from '@supabase/auth-ui-shared';
	import { goto } from '$app/navigation';

	let splash = true;

	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	console.log(supabase);
	console.log(session);
	$: if (session) {
		goto('/');
	}

	
</script>

{#if splash}
	<div class="relative h-screen w-full overflow-hidden">
		<!-- Background Video -->
		<video autoplay loop muted class="absolute inset-0 h-full w-full object-cover">
			<source src="/video/splash-content.mp4" type="video/mp4" />
			Your browser does not support the video tag.
		</video>

		<!-- Overlay -->
		<div
			class="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-40 px-6 text-center"
		>
			<!-- Heading -->
			<h1 class="mb-4 text-4xl font-bold text-white md:text-6xl">Rahasia Kulit Glowing Alami</h1>

			<!-- Subheading -->
			<p class="mb-8 text-lg text-gray-200 md:text-xl">
				Dengan kebaikan ekstrak kopi murni, Dermasense memberikan nutrisi terbaik untuk kulit Anda.
			</p>

			<!-- Call to Action -->
			<button
				on:click={() => (splash = false)}
				class="rounded-lg bg-white px-6 py-3 text-lg font-medium text-black shadow-lg transition hover:bg-gray-200"
			>
				Coba Sekarang
			</button>
		</div>
	</div>
{/if}

<div class="min-h-screen p-6 bg-primaryWhite dark:bg-primaryBlack" style={splash ? 'display: none;' : 'display: block;'}>
		<div class="flex flex-col mx-auto items-center space-y-8">
			<h1 class="font-bold text-4xl dark:text-dark-300">SB</h1>
			<p class="dark:text-darkWhite">Create an account or login for <strong>Dermasense</strong></p>
			<!-- Supabase Auth UI -->
			 <div class="w-full bg-white dark:bg-gray-800 px-8 py-4 rounded-xl shadow-xl">
				 <Auth
				 supabaseClient={supabase}
				 theme={useDark ? 'dark' : 'light'}
				 appearance={{ theme: ThemeSupa }}
				 />
			</div>
	</div>
</div>
