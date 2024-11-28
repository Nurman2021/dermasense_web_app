<script>
	import { TabBar } from 'stdf';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const labels = [
		{
			text: 'Home',
			icon: { name: 'ri-home-3-line', size: 20 },
			activeIcon: { name: 'ri-home-3-line', size: 20 },
			path: '/home'
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

	$: active = labels.findIndex((tab) => tab.path === $page.url.pathname);
	$: active = active !== -1 ? active : 0;

	function handleChange(e) {
		const newIndex = e.detail;
		active = newIndex;
		goto(labels[newIndex].path);
	}
</script>

<div class="nav-card fixed bottom-0 z-10 w-full">
	<TabBar {labels} {active} line={true} injClass="dark:!bg-[#090C00]" on:change={handleChange} />
</div>
