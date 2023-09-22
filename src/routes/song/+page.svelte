<script>
	import Header from '$lib/components/Header.svelte';
	let searchTerm = '';
</script>

<svelte:head>
	<title>Songs</title>
	<meta name="description" content="Rusic Songs" />
</svelte:head>

<Header />
<h1>Song Search</h1>
<form>
	<input bind:value={searchTerm} type="text" name="searchTerm" placeholder="Song To Search For"/>
	<button type="submit">Search</button>
</form>

<style>
	input {
		height: 2.5em;
		width: 25em;
        border-radius: 12px;
        border: 3px solid greenyellow;
        color: white;
        background-color: black;
	}
	button {
		height: 2.8em;
        border-radius: 12px;
        border: 3px solid greenyellow;
        color: white;
        background-color: black;
        padding-right: 12px;
        padding-left: 12px;
	}
	form {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
        margin-top: 2em;
	}
</style>
