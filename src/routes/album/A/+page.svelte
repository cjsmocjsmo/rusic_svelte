<script>
	import { selalbum } from '$lib/stores.js';
	import AlbumHomeDivComp from '$lib/components/albumHomeDivComp.svelte';
	export let data;
	console.log(data.albumList);


	function fuck(a1) {
		selalbum.set(a1);
	}
</script>

<svelte:head>
	<title>Album/A</title>
	<meta name="description" content="Rusic Album" />
</svelte:head>

<AlbumHomeDivComp />
<div>
	{#each data.albumList as alb}
	<p>{alb.rusticid}</p>
		<a href={alb.rusticid}>
			<button on:click={fuck(alb.albumid)}>
				<img src={alb.imageurl} alt={alb.albumid} />
			</button>
		</a>
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
