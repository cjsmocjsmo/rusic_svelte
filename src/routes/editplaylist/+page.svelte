<script>
    import PlaylistDivComp from "$lib/components/playlistDivComp.svelte";
    import { selplaylist } from '$lib/stores.js';
</script>


<PlaylistDivComp />
<p>edit a playlist</p>
<p>{$selplaylist}</p>