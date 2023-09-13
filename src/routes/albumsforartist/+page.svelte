<script>
	import { selartist } from '$lib/stores.js';
	import { selalbum } from '$lib/stores.js';
	import { onMount } from 'svelte';

	let datad = [];
	onMount(async () => {
		let URL = 'http://192.168.0.26:8080/albforart/' + $selartist;
		console.log(URL);
		const res = await fetch(URL);
		datad = await res.json();
		console.log(datad);
	});

	function fuck2(a1) {
		selalbum.set(a1);
	}
</script>

<h1>Albums For Artist</h1>
<div class="albforartImg">
	<ul>
		{#each datad as d}
			<a href="/songsforalbum">
				<img id={d.albumid} src={d.imageurl} alt={d.title} on:click={fuck2(d.albumid)} />
			</a>
		{/each}
	</ul>
</div>

<style>
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
