<script>
	import {onMount, createEventDispatcher} from "svelte";
	
	const dispatch = createEventDispatcher();
	
	export let src = "";
	export let audioEl = null;
	
	let progress = 0, loaded = [],
		seeking = false, seekPaused = false,
		progressBar = null;
	
	function tickPlayer() {
		if (!audioEl) {
			progress = 0;
			loaded = [];
			requestAnimationFrame(tickPlayer);
			return;
		}
		
		const ranges = audioEl.buffered;
		loaded = new Array(ranges.length).fill().map(
			(v, i) => ({
				start: ranges.start(i) / audioEl.duration,
				end: ranges.end(i) / audioEl.duration,
			})
		);
		
		if (audioEl.duration === 0) {
			progress = 0;
		} else {
			progress = audioEl.currentTime / audioEl.duration;
		}
		
		audioEl.currentTime = audioEl.currentTime;
		requestAnimationFrame(tickPlayer);
	}
	onMount(tickPlayer);
	
	function handleSeek(e, type) {
		if (type === "start") {
			if (seeking) return;
			
			seeking = true;
			seekPaused = audioEl.paused;
			audioEl.pause();
			
			document.documentElement.style.userSelect = "none";
			document.documentElement.style.cursor = "grabbing";
			progressBar.style.cursor = "inherit";
		} else if (type === "end") {
			if (!seeking) return;
			
			document.documentElement.style.userSelect = "";
			document.documentElement.style.cursor = "";
			progressBar.style.cursor = "";
			
			seeking = false;
			if (!seekPaused) audioEl.play();
			seekPaused = false;
		} else if (type === "move") {
			if (!seeking) return;
		}
		
		const rect = progressBar.getBoundingClientRect();
		if (rect.width === 0) {
			return;
		}
		let newProgress = (e.clientX - rect.left) / rect.width;
		progress = newProgress;
		audioEl.currentTime = newProgress * audioEl.duration;
	}
	
	let loopStyle = "on";
</script>

<svelte:window
	on:mousemove="{e => handleSeek(e, 'move')}"
	on:mouseup="{e => handleSeek(e, 'end')}"
/>

<audio
	{src}
	autoplay={false}
	bind:this={audioEl}
	
	on:ended="{() => {
		switch (loopStyle) {
			case 'next':
				dispatch('next');
			break;
			case 'random':
				dispatch('random');
			break;
		}
	}}"
></audio>
<div
	class="progressbar"
	bind:this={progressBar}
	on:contextmenu|preventDefault="{() => {}}"
	on:mousedown="{e => handleSeek(e, 'start')}"
	on:mousemove="{e => handleSeek(e, 'move')}"
>
	{#each loaded as range}
		<div
			class="loaded"
			style:left="{range.start * 100}%"
			style:width="{(range.end - range.start) * 100}%"
		></div>
	{/each}
	<div
		class="progress"
		style:width="{progress * 100}%"
	></div>
	<div
		class="thumb"
		style:left="{progress * 100}%"
		on:mousedown="{e => handleSeek(e, 'start')}"
	></div>
</div>
<div class="controls">
	<button on:click="{() => dispatch('previous')}">
		&lt; P
	</button>
	<button on:click="{() => dispatch('next')}">
		N &gt;
	</button>
	<button on:click="{() => {
		if (audioEl.paused) {
			audioEl.play();
		} else {
			audioEl.pause();
		}
	}}">
		{#if seeking ? seekPaused : audioEl?.paused}
			Play
		{:else}
			Pause
		{/if}
	</button>
	<button on:click="{() => {
		audioEl.currentTime = 0;
		audioEl.play();
	}}">
		Restart
	</button>
	<button
		on:click="{() => {
			audioEl.playbackRate = audioEl.playbackRate + 0.5;
			if (audioEl.playbackRate > 4) {
				audioEl.playbackRate = 0.5;
			}
		}}"
	>
		Speed: {audioEl?.playbackRate || 1}
	</button>
	<button on:click="{() => {
		switch (loopStyle) {
			case 'off':
				loopStyle = 'on';
				audioEl.loop = true;
			break;
			case 'on':
				loopStyle = 'next';
				audioEl.loop = false;
			break;
			case 'next':
				loopStyle = 'random';
				audioEl.loop = false;
			break;
			case 'random':
				loopStyle = 'off';
				audioEl.loop = false;
			break;
		}
	}}">
		Looping:
		{#if loopStyle === "on"}
			On
		{:else if loopStyle === "next"}
			Next
		{:else if loopStyle === "random"}
			Random
		{:else}
			Off
		{/if}
	</button>
	<div class="controls-pad"></div>
	{#if isNaN(audioEl?.currentTime) || isNaN(audioEl?.duration)}
		?:??/?:??
	{:else}
		{
			Math.floor((audioEl?.currentTime || 0) / 60)
		}:{
			Math.floor((audioEl?.currentTime || 0) % 60).toString().padStart(2, "0")
		}/{
			Math.floor((audioEl?.duration || 0) / 60)
		}:{
			Math.floor((audioEl?.duration || 0) % 60).toString().padStart(2, "0")
		}
	{/if}
</div>

<style>
	.progressbar {
		height: 12px;
		background-color: #222;
		border-radius: 5px;
		
		border: solid 1px #000;
		
		position: relative;
		
		cursor: grab;
	}
	.progress, .loaded {
		height: 100%;
		width: 0;
		pointer-events: none;
		
		position: absolute;
		top: 0;
		left: 0;
		
		border-radius: 4px;
	}
	.progress {
		background-color: #eee;
	}
	.loaded {
		background-color: #fff7;
	}
	.thumb {
		display: inline-block;
		
		position: absolute;
		top: 50%;
		transform: translate(-50%, -50%);
		
		width: 20px;
		height: 20px;
		border-radius: 100%;
		
		background-color: white;
		border: solid 1px #aaa;
	}
	
	.controls {
		display: flex;
		align-items: center;
		padding: 8px 8px 0 0;
		gap: 5px;
		
		font-variant-numeric: tabular-nums;
	}
	.controls-pad {
		flex-grow: 1;
	}
</style>