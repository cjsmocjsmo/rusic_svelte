<script>
	import { selmedia } from '$lib/stores.js';
	import { selmediatoplay } from '$lib/stores.js';
	import { nowplayingimgurl } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import HomeDivComp from '$lib/components/homeDivComp.svelte';

	let songs = [];
	onMount(async () => {
		let URL = 'http://192.168.0.26:8080/songsforalbum/' + $selmedia;
		console.log(URL);
		const res = await fetch(URL);
		songs = await res.json();
		console.log(songs);
	});

	function toggle(fullpath, imageurl) {
		selmediatoplay.set(fullpath);
		nowplayingimgurl.set(imageurl);
	}
</script>

<HomeDivComp />

<h1>Songs For Album Album</h1>

<div class="songDiv">
	{#each songs as item}
		<div class="songCard">
			<a href="/album">
				<button class="songBtn" on:click={toggle(item.fullpath, item.imageurl)}>
					{item.song}
				</button>
			</a>
			<button class="addBtn">Add</button>
		</div>
	{/each}
</div>

<style>
	.songCard {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-style: solid;
		border-color: black;
		border-width: 2.5px;
		border-radius: 0.75em;
		margin: 0.25em;
		width: 20em;
	}

	.songDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.songBtn {
		width: 100%;
		height: 2.7em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 1.5em;
		margin: 0.25em;
	}
	.addBtn {
		width: 30%;
		height: 2.7em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 1.5em;
		margin: 0.25em;
	}
</style>
