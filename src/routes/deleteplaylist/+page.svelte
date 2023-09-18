<script>
    import PlaylistDivComp from "$lib/components/playlistDivComp.svelte";
    import { selplaylist } from '$lib/stores.js';
</script>


<PlaylistDivComp />
<p>are you sure you want to delete</p>
<p>{$selplaylist}</p>