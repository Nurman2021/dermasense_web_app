<script>
	import { TabBar } from 'stdf';
	import { goto } from '$app/navigation';

	const labels4 = [
		{
			text: 'Home',
			icon: { name: 'ri-home-3-line', size: 20 },
			activeIcon: { name: 'ri-home-3-line', size: 20 },
			path: '/'
		},
		{
			text: 'My Skin',
			icon: { name: 'ri-user-smile-line', size: 20 },
			activeIcon: { name: 'ri-user-smile-line', size: 20 },
			path: '/scanner'
		},
		{
			text: 'Account',
			icon: { name: 'ri-account-circle-line', size: 20 },
			activeIcon: { name: 'ri-account-circle-line', size: 20 },
			path: '/profile'
		}
	];

	let active;

	const tabBarChangeFun = (e) => {
		active = e.detail;
		console.log(active);
		goto(labels4[active].path);
	};
</script>

<div class="nav-card fixed bottom-0 z-10 w-full">
	<TabBar labels={labels4} on:change={tabBarChangeFun} line={true} />
</div>
