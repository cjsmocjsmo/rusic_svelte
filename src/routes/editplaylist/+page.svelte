<script>
    import PlaylistDivComp from "$lib/components/playlistDivComp.svelte";
    import { selplaylistid } from '$lib/stores.js';
</script>


<PlaylistDivComp />
<p>edit a playlist</p>
<p>{$selplaylistid}</p>