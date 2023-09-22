<script>
	import { selalbumforartist } from '$lib/stores.js';
	import { selmediatoplay } from '$lib/stores.js';

	import HomeDivComp from '$lib/components/homeDivComp.svelte';
	import { onMount } from 'svelte';

	let songs = [];
	onMount(async () => {
		let URL = 'http://192.168.0.26:8080/songsforalbum/' + $selalbumforartist;
		console.log(URL);
		const res = await fetch(URL);
		songs = await res.json();
		console.log(songs);
	});

	let mp3_src = '';
	function toggle(fullpath) {
		selmediatoplay.set(fullpath);
		mp3_src = fullpath;
		console.log(fullpath);
	}
</script>

<HomeDivComp />

<div class="songDiv">
	{#each songs as item}
		<div class="songCard">
			<a href="/artist">
				<button class="songBtn" on:click={toggle(item.fullpath)}>
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
		width: 80%;
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
	/* .playBtn {
		width: 20%;
		height: 2em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 1.75em;
		margin: .25em;
	} */
</style>
