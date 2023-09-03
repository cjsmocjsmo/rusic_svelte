<script>

    let searchTerm = '';

</script>

<h1>Artist Search</h1>
<form >
    <input type="text" name="searchTerm" placeholder="Artist To Search For"/>
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
    }
</style>