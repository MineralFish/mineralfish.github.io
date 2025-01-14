<script>
	import Chart from "chart.js/auto";
	import {onMount} from "svelte";

	let chartEl = $state();
	/**
	 * @typedef {Object} Props
	 * @property {any} [config]
	 * @property {string} [label]
	 */

	/** @type {Props} */
	let { config = {}, label = "" } = $props();


	onMount(() => {
		const mediaMatch = window?.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
		if (mediaMatch?.matches) {
			Chart.defaults.color = "#bbb";
		} else {
			Chart.defaults.color = "#555";
		}
		new Chart(
			chartEl,
			// @ts-ignore
			config
		);
	});
</script>

<div>
	<h3>{label}</h3>
	<canvas bind:this={chartEl} aria-label={label}></canvas>
</div>

<style>
	h3 {
		margin: 0;
		text-align: center;
	}
</style>