<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { LayoutData } from './$types';
	import { base } from '$app/paths';
	import "./app.css";
	
	let {data, children}: {data: LayoutData, children: Snippet} = $props();
</script>

<h1>2022 Mifernian Census</h1>
<p>
	Version {__CENSUS_VERSION__}<br />
	(name idea by LandonHarter)
</p>

{#snippet tab(name, route)}
	{#if data.route === route}
		<b >{name}</b>
	{:else}
		<a href="{base}{route}">{name}</a>
	{/if}
{/snippet}
<nav>
	<p class="tabs">
		{@render tab("Fish List", "/")} |
		{@render tab("Statistics", "/stats")}
	</p>
</nav>
<main>
	{@render children()}
</main>
