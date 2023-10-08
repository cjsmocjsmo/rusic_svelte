<script>
	// import { selplaylistid, selplaylistname, playlistcount } from '$lib/stores.js';
	import PlaylistDivComp from '$lib/components/playlistDivComp.svelte';

	let randplname = '';
	let plcount = '';
	let answer = '';
	async function submitrandplaylist() {
		const URL = `http://192.168.0.26:8080/createrandomplaylist/` + randplname + `/` + plcount;
		const res = await fetch(URL);
		answer = await res.json();
		console.log('this is answer');
		console.log(answer);
	}
	console.log(answer);
</script>

<PlaylistDivComp />
<div class="emptyForm">
	{#if answer}
		<div class="answerDiv">
			<h1>{randplname}</h1>
			<p>Playlist has been created</p>
		</div>
	{:else}
		<form>
			<input bind:value={randplname} type="text" name="name" placeholder="Playlist Name" />
			<input bind:value={plcount} type="text" name="numsongs" placeholder="Number of Songs" />
			<button on:click|preventDefault={submitrandplaylist} type="submit">Add</button>
		</form>
	{/if}
</div>

<style>
	button {
		width: 30%;
		height: 2.5em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 2em;
		margin: 1em;
	}
	input {
		width: 100%;
		height: 2.5em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 2em;
		margin: 0.5em;
	}
	.emptyForm {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 3em;
	}
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
