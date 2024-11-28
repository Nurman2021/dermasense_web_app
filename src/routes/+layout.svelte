<script>
	// @ts-ignore
	import Login from '$lib/components/Login.svelte';
	import { NavBar, Icon, Dialog, Toast } from 'stdf';
	import { invalidateAll } from '$app/navigation';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';
	import '../app.css';
	import { setContext } from 'svelte';
	import en_US from 'stdf/lang/en_US';

	setContext('STDF_lang', en_US);

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	$: showLeft = !(
		$page.url.pathname === '/home' ||
		$page.url.pathname === '/scanner' ||
		$page.url.pathname === '/profile'
	);

	supabase.auth.onAuthStateChange(async (event, session) => {
		if (event === 'SIGNED_IN') {
			invalidateAll();
			toastMessage = true;
			toastMessage = false;
		}

		if (event === 'SIGNED_OUT') {
			// await goto('login');
			signOutDialog = false;
			invalidateAll();
		}
	});

	let darkMode = false;
	let signOutDialog = false;
	let toastMessage = false;
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

<svelte:head>
	<title>Dermasense</title>
	<meta name="description" content="DermaSense" />
</svelte:head>

<Dialog
	bind:visible={signOutDialog}
	on:primary={async () => {
		await supabase.auth.signOut();
	}}
	title="Logout"
	content="Apakah kamu yakin ingin logout?"
/>
<Toast bind:visible={toastMessage} type="success" message="Login Berhasil" />
{#if session == null}
	<Login {data} useDark={darkMode} />
{:else}
	<div class="nav-card sticky top-0 z-10 font-semibold capitalize dark:bg-darkBlack">
		<NavBar
			left={showLeft ? 'back' : 'none'}
			title={$page.url.pathname === '/home' ? 'dermasense' : $page.url.pathname.replace(/\//g, '')}
			rightSlot
			on:clickleft={() => window.history.back()}
		>
			<div slot="right" class="m-2 space-x-3 text-center leading-8 dark:text-primary-100">
				<button class="ml-2" on:click={() => (signOutDialog = true)}>Logout</button>
				<button on:click={handleSwitchDarkMode}>
					<Icon name={darkMode ? 'ri-moon-line' : 'ri-sun-line'} size={18} top={-2} />
				</button>
			</div>
		</NavBar>
	</div>
	<slot />
{/if}
