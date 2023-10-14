<script>
	import PlaylistDivComp from '$lib/components/playlistDivComp.svelte';
	let emptyplaylistname = '';
	let answer = '';
	// submit the form data
	async function submitemptyplaylist() {
		const URL = `http://192.168.0.91:8080/createemptyplaylist/` + emptyplaylistname;
		const res = await fetch(URL);
		answer = await res.json();
		console.log('this is answer');
		console.log(answer);
	}
	console.log(answer);
</script>

<PlaylistDivComp />
{#if answer}
	<div class="answerDiv">
		<h1>{emptyplaylistname}</h1>
		<p>Playlist has been created</p>
	</div>
{:else}
	<div class="emptyForm">
		<form method="POST">
			<input bind:value={emptyplaylistname} type="text" name="name" placeholder="Playlist Name" />
			<button on:click|preventDefault={submitemptyplaylist} type="submit">Add</button>
		</form>
	</div>
{/if}

<style>
	.answerDiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 4em;
	}
	/* a {
		width: 100%;
		height: 2.5em;
	} */
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
		margin: 1em;
	}
	.emptyForm {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 4em;
	}
	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
