<script>
	import FishTable from "./FishTable.svelte";
	import FishStats from "./FishStats.svelte";
	import Music from "./Music.svelte";
	
	export let version;

	let currentTab = "fishlist";
	const tabs = {
		fishlist: {
			component: FishTable,
			name: "Fish List",
		},
		stats: {
			component: FishStats,
			name: "Statistics",
		},
		music: {
			component: Music,
			name: "Mineral Fish Soundtracks",
		},
	}

	function setTab(tab = location.hash.substring(1)) {
		currentTab = tabs[tab] ? tab : "fishlist";
	}

	setTab();
	window.addEventListener("hashchange", () => setTab());
</script>

<main>
	<h1>2022 Mifernian Census</h1>
	<p>
		Version {version}<br />
		(name idea by LandonHarter)
	</p>

	<p class="tabs">
		{#each Object.entries(tabs) as tab}
			<span class="tab">
				{#if currentTab === tab[0]}
					<b >{tab[1].name}</b>
				{:else}
					<a href="#{tab[0]}">{tab[1].name}</a>
				{/if}
			</span>
		{/each}
		</p>
	{#if tabs[currentTab]}
		<svelte:component this={tabs[currentTab].component}/>
	{/if}
</main>

<style>
	.tab:not(:first-child)::before {
		content: " | ";
	}
</style>