<script>
	import { page } from '$app/stores';
	import { NavBar, Icon } from 'stdf';
</script>

<div class="sticky top-0 z-10">
	<NavBar
		title={$page.url.pathname}
		left={showLeft ? 'back' : 'none'}
		rightSlot
		injClass="bg-white/60 dark:bg-black/60 backdrop-blur"
		on:clickleft={() => window.history.back()}
	></NavBar>
	<h1>gg</h1>
</div>
