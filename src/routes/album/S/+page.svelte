<script>
	import { selmedia } from '$lib/stores.js';
	import HomeDivComp from '$lib/components/homeDivComp.svelte';
	export let data;
	console.log(data.albumList);

	function fuck(a1) {
		selmedia.set(a1)
		alert(a1);
	};
</script>

<svelte:head>
	<title>Album/S</title>
	<meta name="description" content="Rusic Album" />
</svelte:head>

<HomeDivComp />
<div>
	{#each data.albumList as alb}
		<img src={alb.imageurl} alt={alb.albumid} on:click{fuck(alb.albumid)}/>
	{/each}
</div>

<style>
	img {
		border-radius: 8px;
		border-width: 3px;
		border-style: solid;
		border-color: rgb(67, 240, 44);
		background-color: black;
		margin: 8px;
	}
</style>