<script>
	import { onMount, onDestroy } from 'svelte';

	let overlayGone = false;

	function hideOverlay() {
		overlayGone = true;
		alert('SOME CLICK');
	}

	onMount(() => {
		// let theButton = document.getElementById('joe');
		document.addEventListener('click', hideOverlay);
	});

	onDestroy(() => {
		document.removeEventListener('click', hideOverlay);
	});
</script>

<section class="h-screen overflow-hidden bg-[#F3F3F4]">
	<iframe
		onloadeddata={() => alert('meta data berubah')}
		title="beekman scanner skin"
		src="https://beekman1802.com/pages/skin-biome-analysis"
		class="relative -top-[27rem] mx-auto min-h-[200vh] max-w-[350px]"
		allowfullscreen
		allow="camera; microphone"
		id="myFrame"
		scrolling="no"
	>
	</iframe>
	<div
		class={overlayGone
			? 'hidden'
			: ' pointer-events-none fixed top-0 flex h-full w-full items-center justify-center bg-darkBlack opacity-50'}
	>
		<!-- <button class="p-10" id="joe">CLIDK ME</button> -->
	</div>
	<!-- url#1 =>https://cloud.email.cetaphil.com/skin-selfie.html -->
	<!-- url#2 =>https://skin-analyzer.vlcc.com/analysis -->
</section>
