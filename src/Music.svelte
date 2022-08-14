<script>
	import {default as music} from "./data/music.js";

	let selectedSong = null, player = null;

	window.__music = structuredClone(music);
</script>

{#if selectedSong !== null}
	<h1 contenteditable on:input={(e) => {
		window.__music[selectedSong].name = e.target.textContent;
	}}>{music[selectedSong].name}</h1>
	<h2>"<span contenteditable on:input={(e) => {
		window.__music[selectedSong].title = e.target.textContent;
	}}>{music[selectedSong].title}</span>"</h2>
{/if}
<audio bind:this={player} controls={true} src={music[selectedSong]?.url}></audio>
{#if selectedSong !== null}
	<img
		on:click={() => {
			if (selectedSong >= music.length - 1) return;
			selectedSong += 1;
			player.load();
			player.autoplay = true;
		}}
		on:contextmenu|preventDefault={() => {
			if (selectedSong <= 0) return;
			selectedSong -= 1;
			player.load();
			player.autoplay = true;
		}}
		height="400"
		src={music[selectedSong]?.bg}
		alt="'Background'"
	>
{/if}

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
						player.load();
						player.autoplay = true;
					}}
				>
					>
				</button>
			</td>
			<td>{obj.name}</td>
			<td>{obj.title}</td>
			<td>{obj.internalName}</td>
			<td>{obj.category}</td>
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
	img {
		position: fixed;
		right: 1em;
		top: 50%;
		transform: translateY(-50%);
	}
</style>