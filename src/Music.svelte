<script>
	import AudioPlayer from "./lib/AudioPlayer.svelte";
	
	import {default as music, getString} from "./data/music.js";

	let selectedSong = 0, player = null;
	
	function start() {
		player.load();
		player.autoplay = true;
	}
</script>

<!--
{#if selectedSong !== null}
	<img
		height="400"
		src={music[selectedSong]?.bg}
		alt="'Background'"
	>
{/if}
-->

{#if selectedSong !== null}
	<h1>{music[selectedSong].name}</h1>
	<h2>"{music[selectedSong].title}"</h2>
{/if}
<AudioPlayer
	bind:audioEl={player}
	src={music[selectedSong]?.url}
	on:previous='{() => {
		selectedSong = selectedSong - 1;
		if (selectedSong < 0) {
			selectedSong = music.length - 1;
		}
		start();
	}}'
	on:next='{() => {
		selectedSong = (selectedSong + 1) % music.length;
		start();
	}}'
	on:random='{() => {
		selectedSong = Math.floor(Math.random() * music.length);
		start();
	}}'
/>

<br />

<table>
	<thead>
		<tr>
			<th></th>
			<th>Name</th>
			<th>Title</th>
			<th>Internal name</th>
			<th>Category</th>
		</tr>
	</thead>
	{#each music as obj, index}
		<tr class:selected={selectedSong === index}>
			<td>
				<button
					on:click={() => {
						selectedSong = index;
						start();
					}}
				>
					>
				</button>
			</td>
			<td>{obj.name}</td>
			<td>{obj.title}</td>
			<td>{obj.internalName}</td>
			<td>{getString(obj.category)}</td>
		</tr>
	{/each}
</table>

<style>
	audio {
		display: block;
		width: 100%;
	}
	.selected {
		font-weight: bold;
	}
</style>