<script>
	import Modal from '$lib/components/Modal.svelte';

	let showModal = false;
</script>

<!-- <h1>Add Empty PlayList</h1> -->

<div class="btnDiv">
    <button class="randPl" on:click={() => (showModal = true)}> Add Random Playlist </button>
</div>


<Modal bind:showModal>
	<form>
		<input type="text" name="name" placeholder="Playlist Name" />
        <input type="text" name="name" placeholder="Number Of Songs" />
		<button type="submit">Submit</button>
	</form>
</Modal>

<style>

    .btnDiv {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-left: 1em;
    }

    .randPl {
        height: 2.8em;
        width: 100%;
        border-radius: 12px;
        border-style: solid;
        border-width: 2.5px;
        border-color: red;
        color: rgb(64, 238, 58);
        background-color: black;
        padding-right: 12px;
		padding-left: 12px;
        font-size: 2em;
    }
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
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>
