<script>

</script>

<div class="homeDiv">
	<a href="/">
		<button class="homeBtn">Home</button>
	</a>
	<a href="/artist">
		<button class="homeBtn">Artist</button>
	</a>
	<a href="/album">
		<button class="homeBtn">Album</button>
	</a>
</div>

<style>
	a {
		margin-right: 0.5em;
		margin-left: 0.5em;
	}
    .homeDiv {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 1em;
		margin-bottom: 2em;
	}
	.homeBtn {
		width: 200px;
		height: 2em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 2em;
	}
</style>