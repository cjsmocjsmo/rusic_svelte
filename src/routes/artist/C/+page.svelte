<script>
	import { selartist } from '$lib/stores.js';
	export let data;
	console.log(data.artistList);

	function fuck(a1) {
		selartist.set(a1);
	}
</script>

<div>
	{#each data.artistList as art}
	<a href="/albforart">
		<button on:click={fuck(art.artistid)}>
			{art.artist}
		</button>
	</a>
{/each}
</div>

<style>
	button {
		width: 175px;
		height: 3em;
		color: white;
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		margin: 0.2em;
	}
</style>
