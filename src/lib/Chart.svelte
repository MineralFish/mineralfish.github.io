<script>
	import Chart from "chart.js/auto";
	import {onMount} from "svelte";

	let chartEl;
	export let config = {}, label = "";

	onMount(() => {
		new Chart(
			chartEl,
			config
		);
	});
</script>

<div>
	<h3>{label}</h3>
	<canvas bind:this={chartEl}></canvas>
</div>

<style>
	h3 {
		margin: 0;
		text-align: center;
	}
</style>