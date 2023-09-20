<script>
	import { selmedia } from '$lib/stores.js';
	import HomeDivComp from '$lib/components/homeDivComp.svelte';
	export let data;
	console.log(data.albumList);

	function fuck(a1) {
		selmedia.set(a1);
	}
</script>

<svelte:head>
	<title>Album/R</title>
	<meta name="description" content="Rusic Album" />
</svelte:head>

<HomeDivComp />
<div class="albImgDiv">
	{#each data.albumList as alb}
		<a href="/songsforalbumalbum">
			<button on:click={fuck(alb.albumid)}>
				<img src={alb.imageurl} alt={alb.albumid} />
			</button>
		</a>
	{/each}
</div>

<style>
	button {
		background-color: black;
		margin: 0.5em;
		border-style: solid;
		border-radius: 8px;
		border-width: 2.5px;
		border-color: red;
	}
	.albImgDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	img {
		border-radius: 8px;
		margin: 8px;
	}
</style>
