<script>
	import { Button } from 'stdf';
	import Divider from 'stdf/components/divider/Divider.svelte';
	// export let title = 'Default Title';
	// export let imgUrl = '';
</script>

<div class="card-style mx-3 flex flex-col items-center space-y-4 rounded-xl">
	<div>
		<image src="/images/placeholder/placeholder_1.png" alt="image content" style="width:300px" />
	</div>

	<div class="w-full">
		<div class="font-bold">Different length</div>
		<Divider />
	</div>
	<div class="w-full">
		<Button radius="xl">button</Button>
	</div>
</div>
