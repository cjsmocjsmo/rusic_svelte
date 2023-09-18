<script>
	import PlaylistDivComp from '$lib/components/playlistDivComp.svelte';
</script>

<PlaylistDivComp />
<div class="emptyForm">
	<form>
		<input type="text" name="name" placeholder="Playlist Name" />
        <input type="text" name="numsongs" placeholder="Number of Songs" />
		<button type="submit">Add</button>
	</form>
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
        margin: 1em;
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
