<script>
	import NavBottom from '$lib/components/BottomBar.svelte';
	import { Cell, NavBar, Icon, Popup } from 'stdf';
	import '../app.css';

	let visible2 = false;
</script>

<div class="sticky top-0 z-10">
	<NavBar titleSlot injClass="bg-white/60 dark:bg-black/60 backdrop-blur" leftSlot rightSlot>
		<div
			slot="left"
			class="m-2 h-8 w-8 rounded-full bg-white text-center leading-8 dark:bg-black/50"
		>
			<Icon name="ri-home-7-line" size={18} top={-2} />
		</div>
		<div
			slot="title"
			class="my-2 h-8 rounded-full bg-white px-3 text-sm leading-8 dark:bg-black/50"
		>
			injClass and slot combine custom styles
		</div>
		<div
			slot="right"
			class="m-2 h-8 w-8 rounded-full bg-white text-center leading-8 dark:bg-black/50"
		>
			<Icon name="ri-customer-service-2-line" size={18} top={-2} />
		</div>
	</NavBar>
</div>

<main class="flex flex-col py-4">
	<slot />
</main>
<NavBottom />
