<script>
	import { Modal } from 'stdf';

	let modalVisible = false;
	let afterModalClass = false;

	function handleModal() {
		afterModalClass = !afterModalClass;
		console.log('after modal', afterModalClass);
	}
</script>

<section class="h-screen overflow-hidden bg-[#F3F3F4]">
	<iframe
		onLoad={setTimeout(() => (modalVisible = true), 5000)}
		title="beekman scanner skin"
		src="https://beekman1802.com/pages/skin-biome-analysis"
		class={`relative mx-auto w-[350px] ${afterModalClass ? '-top-[5rem] min-h-screen' : '-top-[28rem] min-h-[200vh]'}`}
		allowfullscreen
		allow="camera; microphone"
		id="myFrame"
		scrolling="no"
	>
	</iframe>

	<!-- url#1 =>https://cloud.email.cetaphil.com/skin-selfie.html -->
	<!-- url#2 =>https://skin-analyzer.vlcc.com/analysis -->
</section>
<Modal
	bind:visible={modalVisible}
	title="Letakkan Wajah Sesuai Batas pendeteksi"
	btnText="Saya Mengerti"
	contentSlot
	on:close={handleModal}
>
	<img src="/images/face-scan.gif" alt="step for scan" width="200" class="mx-auto rounded-lg" />
</Modal>
