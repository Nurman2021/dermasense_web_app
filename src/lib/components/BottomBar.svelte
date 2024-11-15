<script>
	import { TabBar } from 'stdf';
	import { goto } from '$app/navigation';

	const labels4 = [
		{
			text: 'Home',
			icon: { name: 'ri-home-3-line', size: 20 },
			activeIcon: { name: 'ri-home-3-fill', size: 20 },
			path: '/'
		},
		{
			text: 'My Skin',
			icon: { name: 'ri-discuss-line', size: 20 },
			activeIcon: { name: 'ri-discuss-fill', size: 20 },
			path: '/sverdle'
		},
		{
			text: 'Account',
			icon: { name: 'ri-account-circle-line', size: 20 },
			activeIcon: { name: 'ri-account-circle-fill', size: 20 },
			path: '/about'
		}
	];

	let active = 0;

	const tabBarChangeFun = (e) => {
		active = e.detail;
		goto(labels4[active].path);
	};
</script>

<div class="fixed bottom-0 w-full">
	<TabBar
		labels={labels4}
		injClass="bg-white/50 dark:bg-black/50 backdrop-blur"
		on:change={tabBarChangeFun}
	/>
</div>
