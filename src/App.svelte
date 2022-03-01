<script>
	import { fishList, strings, getString } from "./fishList.js";
	export { fishList, strings, getString };
	export let version;
</script>

<main>
	<h1>2022 Mifernian Census</h1>
	Version {version}<br />
	(name idea by LandonHarter)<br /><br />
	<table>
		<thead>
			<tr>
				<th>{getString("fullName")}</th>
				<th>{getString("bitmap")}</th>
				<th>{getString("vector")}</th>
				<th>{getString("realName")}</th>
				<th>{getString("role")}</th>
				<th>{getString("category")}</th>
				<th>{getString("type")}</th>
				<th>{getString("creator")}</th>
				<th>{getString("textureCreator")}</th>
				<th>{getString("vectorTextureCreator")}</th>
			</tr>
		</thead>
		{#each Object.keys(fishList) as fish}
			<tr>
				<td>{fishList[fish].fullName}</td>
				<td>
					{#if fishList[fish].bitmap}
						<div class="fish-bitmap-container">
							<img
								class="fish-image fish-bitmap"
								class:pixelated={!fishList[fish].smooth}
								src="/assets/fish/{fish}.png"
								alt={fishList[fish].fullName}
							/>
						</div>
					{:else}
						<i>N/A</i>
					{/if}
				</td>
				<td>
					{#if fishList[fish].vector}
						<img
							class="fish-image fish-vector"
							width="48"
							height="auto"
							src="/assets/fish/vector/{fish}.svg"
							alt={fishList[fish].fullName + " vector"}
						/>
					{:else}
						<i>N/A</i>
					{/if}
				</td>
				<td>
					{#if fishList[fish].realName}
					{fishList[fish].realName}
					{:else}
						Unknown
					{/if}
				</td>
				<td>
					{#if fishList[fish].role}
						{fishList[fish].role}
					{:else}
						Unknown
					{/if}
				</td>
				<td>{getString(fishList[fish].category)}</td>
				<td>{getString(fishList[fish].type)}</td>
				<td>
					{#if !(fishList[fish].creator === undefined)}
						{fishList[fish].creator}
					{:else}
						Unknown
					{/if}
				</td>
				<td>
					{#if fishList[fish].textureCreator}
						{fishList[fish].textureCreator}
					{:else}
						<i>N/A</i>
					{/if}
				</td>
				<td>
					{#if fishList[fish].vectorTextureCreator}
						{fishList[fish].vectorTextureCreator}
					{:else if fishList[fish].vector}
						LandonHarter
					{:else}
						<i>N/A</i>
					{/if}
				</td>
			</tr>
		{/each}
	</table>
</main>
