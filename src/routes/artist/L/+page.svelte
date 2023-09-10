<script>
	export let data;
	console.log(data.artistList);

	let fuck = (a1) => {
		alert(a1);
	};
</script>

<svelte:head>
	<title>L Artists</title>
	<meta name="description" content="Rusic Artists" />
</svelte:head>

<div>
	{#each data.artistList as art}
		<button on:click={fuck(art[1])} on:keypress={fuck(art[1])}>
			{art[0]}
		</button>
	{/each}
</div>

<style>
	button {
		width: 175px;
		height: 3em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		margin: 0.2em;
	}
</style>
