<script>
	import PlaylistDivComp from '$lib/components/playlistDivComp.svelte';
	import { selplaylistid } from '$lib/stores.js';
	import { selplaylistname } from '$lib/stores.js';

	async function delete_play_list(rusicid) {
		const URL = `http://192.168.0.26:8080/deleteplaylist/` + rusicid;
		const res = await fetch(URL);
		const data = await res.json();
		console.log(data);
	}
</script>

<PlaylistDivComp />
<h3>Are you sure you want to delete</h3>
<h1>{$selplaylistname}</h1>
<div class="homeDiv">
	<a href="/playlist">
		<button on:click={delete_play_list($selplaylistid)}>Yes</button>
	</a>
	<a href="/playlist">
		<button>No</button>
	</a>
</div>

<style>
	h3 {
		text-align: center;
	}
	.homeDiv {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 1em;
		margin-bottom: 2em;
	}
	button {
		width: 275px;
		height: 3em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 2em;
		margin: 1em;
	}
</style>
