<script>
	import HomeDivComp from '$lib/components/homeDivComp.svelte';
	import { selmedia } from '$lib/stores.js';
	import { selalbumforartist } from '$lib/stores.js';
	import { onMount } from 'svelte';

	let datad = [];
	onMount(async () => {
		let URL = 'http://192.168.0.26:8080/albforart/' + $selmedia;
		console.log(URL);
		const res = await fetch(URL);
		datad = await res.json();
		console.log(datad);
	});

	function fuck2(a1) {
		selalbumforartist.set(a1);
	}
</script>

<HomeDivComp />

<h1>Albums For Artist</h1>
<div class="albforartImg">
	<ul>
		{#each datad as d}
			<a href="/songsforalbum" on:click={fuck2(d.albumid)}>
				<button>
				<img src={d.imageurl} alt={d.title} />
				</button>
			</a>
		{/each}
	</ul>
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
	.albforartImg {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}

	img {
		margin: 1em;
		border-radius: 8px;
		border-style: solid;
		border-width: 3.5px;
		border-color: black;
	}
</style>
