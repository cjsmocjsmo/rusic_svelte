<script>
	import PlaylistDivComp from '$lib/components/playlistDivComp.svelte';
	import { selplaylistid } from '$lib/stores.js';
	import { selplaylistname } from '$lib/stores.js';
	import { onMount } from 'svelte';

	let pldata = [];
	onMount(async () => {
		let URL = 'http://192.168.0.91:8080/getplaylistdata/' + $selplaylistid;
		console.log(URL);
		const res = await fetch(URL);
		pldata = await res.json();
	});
	async function delsongfromplaylist(songid) {
		let URL = 'http://192.168.0.91:8080/delsongfromplaylist/' + $selplaylistid + '/' + songid;
		console.log(URL);
		const res = await fetch(URL);
		let delsong = await res.json();
		console.log(delsong);
		const res2 = await fetch(`http://192.168.0.91:8080/allplaylists`);
		const allpls = await res2.json();
		allplaylists.set(allpls);
	}
</script>

<PlaylistDivComp />
<div>
	<h1>Selected Playlist</h1>
	<h2>{$selplaylistname}</h2>
</div>

<div class="playlistDiv">
	{#each pldata as item}
		<div class="playlistCard">
			<div class="playlistItem">
				<h3>{item.song}</h3>
				<button on:click={delsongfromplaylist(item.rusicid)}><a href="/playlist">delete</a></button>
			</div>
		</div>
	{/each}
</div>

<style>
	.playlistDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
	.playlistCard {
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		background-color: black;
		border-style: solid;
		border-width: 2px;
		border-radius: 8px;
		border-color: red;
		padding: 8px;
		width: 40%;
		margin: 1em;
	}
	.playlistItem {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	h2 {
		font-size: 1.5em;
		text-align: center;
	}
	h3 {
		color: greenyellow;
	}
</style>
