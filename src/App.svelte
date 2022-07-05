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
			{@const obj = fishList[fish]}
			<tr>
				<td>{obj.fullName}</td>
				<td>
					{#if obj.bitmap}
						<div class="fish-bitmap-container">
							<img
								class="fish-image fish-bitmap"
								class:pixelated={!obj.smooth}
								src="/assets/fish/{fish}.png"
								alt={obj.fullName}
							/>
						</div>
					{:else}
						<i>N/A</i>
					{/if}
					{#if obj.alts}
						<details>
							<summary>Alts</summary>
							{#each Object.keys(obj.alts) as alt}
								{@const altObj = obj.alts[alt]}
								{@const altText = 
									altObj.name ?
										(
											altObj.creator ?
												(altObj.name)+", by "+(altObj.creator) 
												: altObj.name
										)
									: (
										altObj.creator ? "by " + altObj.creator : ""
									)
								}
								<img
									class="fish-image fish-bitmap fish-alt"
									class:pixelated={!altObj.smooth}
									src="/assets/fish/{alt}.png"
									alt={altText}
									title={altText}
								/> <br />
							{/each}
						</details>
					{/if}
				</td>
				<td>
					{#if obj.vector}
						<img
							class="fish-image fish-vector"
							width="48"
							height="auto"
							src="/assets/fish/vector/{fish}.svg"
							alt={obj.fullName + " vector"}
						/>
					{:else}
						<i>N/A</i>
					{/if}
					{#if obj.vectorAlts}
						<details>
							<summary>Alts</summary>
							{#each Object.keys(obj.vectorAlts) as alt}
								{@const altObj = obj.vectorAlts[alt]}
								{@const altText = (altObj.name)+", by "+(altObj.creator)}
								<img
									class="fish-image fish-vector fish-alt"
									width="48"
									height="auto"
									src="/assets/fish/vector/{alt}.svg"
									alt={altText}
									title={altText}
								/> <br />
							{/each}
						</details>
					{/if}
				</td>
				<td>
					{#if obj.realName}
					{obj.realName}
					{:else}
						Unknown
					{/if}
				</td>
				<td>
					{#if obj.role}
						{obj.role}
					{:else}
						Unknown
					{/if}
				</td>
				<td>{getString(obj.category)}</td>
				<td>{getString(obj.type)}</td>
				<td>
					{#if !(obj.creator === undefined)}
						{obj.creator}
					{:else}
						Unknown
					{/if}
				</td>
				<td>
					{#if obj.textureCreator}
						{obj.textureCreator}
					{:else}
						<i>N/A</i>
					{/if}
				</td>
				<td>
					{#if obj.vectorTextureCreator}
						{obj.vectorTextureCreator}
					{:else}
						<i>N/A</i>
					{/if}
				</td>
			</tr>
		{/each}
	</table>
</main>
