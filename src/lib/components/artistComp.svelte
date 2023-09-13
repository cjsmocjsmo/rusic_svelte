<script>
	import { selartist } from '$lib/stores.js';
	export let artinfo;

	function fuck(a1) {
		selartist.set(a1);
	}
</script>

<a href="/albumsforartist">
	<button on:click={fuck(artinfo.artistid)}>
		{artinfo.artist}
	</button>
</a>

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
