<script>
	import {getString} from "./data/fishList.js";
	import * as stats from "./data/fishStats.js";
	
	import Chart from "./lib/Chart.svelte";

	const colors = {
		"CST1229": "#639bff",
		"-gge": "#fdd53a",
		"main": "#fdd53a",
		"LandonHarter": "#a2f82e",
		"roketH77": "#0088ff",
		"Marc92020": "#4dff00",
		"JackyBorderCollie": "#555555",
		"Unithlees3": "#4c92ff",
	}

	function colorChecksum(str) {
		if (!colors[str]) {
			colors[str] = "#" + ((parseInt(
				Array.from(str.substring(0, 10))
					.filter(l => /[A-Za-z0-9]/.test(l))
					.join(""),
				36
			) + str.length * 0xFBFA) % 0x1000000).toString(16).padEnd(6, "0");
		}
		return colors[str];
	}
</script>
<div class="stats">
	<div class="other-item">
		<h3>Numbers</h3>
		Number of fish:
			<b class="big">{stats.count}</b>
		<br />
		Number of fish alts:
			<b class="big">{stats.altCount}</b>
		<br />
		Total number of fish (including alts):
			<b class="big">{stats.count + stats.altCount}</b>
		<br />
		Percentage of fish with bitmaps:
			<b class="big">{Math.round((stats.bitmapCount / stats.count) * 100)}%</b>
		<br />
		Percentage of fish with vectors:
			<b class="big">{Math.round((stats.vectorCount / stats.count) * 100)}%</b>
	</div>
	<Chart
		label="Fish authors sorted by number of fish"
		config={{
			type: "pie",
			data: {
				labels: Object.keys(stats.creators),
				datasets: [{
					label: "Fish creators",
					data: Object.values(stats.creators),
					backgroundColor: Object.keys(stats.creators).map(colorChecksum),
					hoverOffset: 10
				}]
			}
		}}
	/>
	<Chart
		label="Bitmap authors sorted by number of fish"
		config={{
			type: "pie",
			data: {
				labels: Object.keys(stats.bitmapCreators),
				datasets: [{
					label: "Bitmap creators",
					data: Object.values(stats.bitmapCreators),
					backgroundColor: Object.keys(stats.bitmapCreators).map(colorChecksum),
					hoverOffset: 10
				}]
			}
		}}
	/>
	<Chart
		label="Vector authors sorted by number of fish"
		config={{
			type: "pie",
			data: {
				labels: Object.keys(stats.vectorCreators),
				datasets: [{
					label: "Vector creators",
					data: Object.values(stats.vectorCreators),
					backgroundColor: Object.keys(stats.vectorCreators).map(colorChecksum),
					hoverOffset: 10
				}]
			}
		}}
	/>
	<Chart
		label="Fish types"
		config={{
			type: "pie",
			data: {
				labels: Object.keys(stats.types).map(t => getString(t)),
				datasets: [{
					label: "Fish types",
					data: Object.values(stats.types),
					backgroundColor: Object.keys(stats.types).map(colorChecksum),
					hoverOffset: 10
				}]
			}
		}}
	/>
	<Chart
		label="Fish categories"
		config={{
			type: "pie",
			data: {
				labels: Object.keys(stats.categories).map(t => getString(t)),
				datasets: [{
					label: "Fish categories",
					data: Object.values(stats.categories),
					backgroundColor: Object.keys(stats.categories).map(colorChecksum),
					hoverOffset: 10
				}]
			}
		}}
	/>
</div>

<style>
	.stats {
		display: grid;
		grid-template-columns: repeat(auto-fit, 600px);
		grid-gap: 1em;
	}

	.other-item {
		text-align: center;
	}

	h3 {
		margin: 0;
	}

	.big {
		font-size: 200%;
		vertical-align: middle;
	}
</style>