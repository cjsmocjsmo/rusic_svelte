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
	<title>Album/M</title>
	<meta name="description" content="Rusic Album" />
</svelte:head>

<HomeDivComp />
<div class="albImgDiv">
	{#each data.albumList as alb}
		<a href="/songsforalbumalbum">
			<img src={alb.imageurl} alt={alb.albumid} on:click={fuck(alb.albumid)} />
		</a>
	{/each}
</div>

<style>
	.albImgDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	img {
		border-radius: 8px;
		border-width: 3px;
		border-style: solid;
		border-color: rgb(67, 240, 44);
		background-color: black;
		margin: 8px;
	}
</style>
