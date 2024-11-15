<script>
	import { Swiper } from 'stdf';
	import Item from '$lib/components/product/Item.svelte';
	import Item2 from '$lib/components/product/Item2.svelte';
	import Item3 from '$lib/components/product/Item3.svelte';

	/**
	 * @typedef {Object} img
	 * @property {'img'} type
	 * @property {String} url image url
	 */

	/**
	 * @typedef {Object} component
	 * @property {'component'} type
	 * @property {Object} component
	 */

	/**
	 * Data
	 * @type {Array<img|component>}
	 * @default []
	 */

	const data = [
		{
			type: 'component',
			component: Item
		},
		{
			type: 'component',
			component: Item2
		},
		{
			type: 'component',
			component: Item3
		}
	];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="DermaSense" />
</svelte:head>

<!-- <section> -->
<Swiper {data} indicatePosition="none" autoplay={false} />

<!-- </section> -->
<div class="rounded-xl">
	<h2 class=" mx-2 my-2 text-lg font-semibold">Use Ai to Scan Your Face</h2>
</div>

<style>
</style>
