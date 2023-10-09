<script>
    import { selSong } from '$lib/stores.js';
    import HomeDivComp from '$lib/components/homeDivComp.svelte';

</script>

<svelte:head>
	<title>Select Playlist</title>
	<meta name="description" content="Rusic Artists" />
</svelte:head>

<HomeDivComp />

<p>{$selSong}</p>