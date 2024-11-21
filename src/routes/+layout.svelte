<script>
	import NavBottom from '$lib/components/BottomBar.svelte';
	import Login from '$lib/components/Login.svelte';
	import { NavBar, Icon } from 'stdf';
	import { goto, invalidateAll } from '$app/navigation';
	import '../app.css';

	export let data;
	let { supabase, session } = data;
	$: ({ supabase, session } = data);

	supabase.auth.onAuthStateChange(async (event, session) => {
		if (event === 'SIGNED_IN') {
			invalidateAll();
		}

		if (event === 'SIGNED_OUT') {
			await goto('login');
			invalidateAll();
		}
	});
</script>

{#if session == null}
	<Login {data} />
{:else}
	<div class="bg-gray-100">
		<div class="nav-card sticky top-0 z-10">
			<NavBar titleSlot leftSlot rightSlot>
				<a
					href="/"
					slot="left"
					class="m-2 h-8 w-8 rounded-full bg-white text-center leading-8 dark:bg-black/50"
				>
					<Icon name="ri-home-7-line" size={18} top={-2} />
				</a>
				<div
					slot="title"
					class="my-2 h-8 rounded-full bg-white px-3 text-sm leading-8 dark:bg-black/50"
				>
					{#if session !== null}
						<span class="btn btn-ghost">{session.user.email}</span>
					{:else}
						Dermasense
					{/if}
				</div>
				<div
					slot="right"
					class="m-2 h-8 w-8 rounded-full bg-white text-center leading-8 dark:bg-black/50"
				>
					<button
						class="ml-2"
						on:click={async () => {
							await supabase.auth.signOut();
						}}>Logout</button
					>
					<Icon name="ri-sun-line" size={18} top={-2} />
				</div>
			</NavBar>
		</div>

		<slot />
		<NavBottom />
	</div>
{/if}
