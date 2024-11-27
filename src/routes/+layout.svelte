<script>
	import NavBottom from '$lib/components/BottomBar.svelte';
	import Login from '$lib/components/Login.svelte';
	import { NavBar, Icon } from 'stdf';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import '../app.css';
	import { setContext } from 'svelte'; // import setContext
	import en_US from 'stdf/lang/en_US'; // import language file

	setContext('STDF_lang', en_US);

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	supabase.auth.onAuthStateChange(async (event, session) => {
		if (event === 'SIGNED_IN') {
			invalidateAll();
		}

		if (event === 'SIGNED_OUT') {
			// await goto('login');
			invalidateAll();
		}
	});

	let darkMode = false;
	function handleSwitchDarkMode() {
		darkMode = !darkMode;

		darkMode
			? document.documentElement.classList.add('dark')
			: document.documentElement.classList.remove('dark');
	}

	if (browser) {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.documentElement.classList.add('dark');
			darkMode = true;
		} else {
			document.documentElement.classList.remove('dark');
			darkMode = false;
		}
	}
</script>

{#if session == null}
	<Login {data} useDark={darkMode} />
{:else}
	<div class="nav-card sticky top-0 z-10 dark:bg-darkBlack">
		<NavBar titleSlot leftSlot rightSlot>
			<a href="/" slot="left" class="m-2 h-8 w-8 text-center leading-8 dark:text-primary-100">
				<Icon name="ri-home-7-line" size={18} top={-2} />
			</a>
			<div slot="title" class="my-2 h-8 px-3 text-sm leading-8 dark:text-primary-100">
				{#if session !== null}
					<span class="btn btn-ghost">{session.user.email}</span>
				{:else}
					Dermasense
				{/if}
			</div>
			<div slot="right" class="m-2 space-x-3 text-center leading-8 dark:text-primary-100">
				<button
					class="ml-2"
					on:click={async () => {
						await supabase.auth.signOut();
					}}>Logout</button
				>
				<button on:click={handleSwitchDarkMode}>
					<Icon name={darkMode ? 'ri-moon-line' : 'ri-sun-line'} size={18} top={-2} />
				</button>
			</div>
		</NavBar>
	</div>

	<slot />
	<NavBottom />
{/if}
