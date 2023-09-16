<script>
	import ArtistHomeDivComp from '$lib/components/artistHomeDivComp.svelte';
	import AlbumHomeDivComp from '$lib/components/albumHomeDivComp.svelte';
	import AddEmptyPlaylist from '../../lib/components/addEmptyPlaylist.svelte';
	import AddRandomPlaylist from '../../lib/components/addRandomPlaylist.svelte';
</script>

<svelte:head>
	<title>PlayLists</title>
	<meta name="description" content="Rusic PlayLists" />
</svelte:head>

<div class="btnDiv">
	<ArtistHomeDivComp />
	<AlbumHomeDivComp />
</div>

<div class="btnDiv">
	<AddEmptyPlaylist />
	<AddRandomPlaylist />
</div>

<h1>Playlists</h1>

<style>
	.btnDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
        margin: 2em;
	}
</style>
