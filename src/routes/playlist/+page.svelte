<script>
	import Header from '$lib/components/Header.svelte';
	import HomeDivComp from '$lib/components/homeDivComp.svelte';
	// import AddEmptyPlaylist from '../../lib/components/addEmptyPlaylist.svelte';
	// import AddRandomPlaylist from '../../lib/components/addRandomPlaylist.svelte';
</script>

<svelte:head>
	<title>PlayLists</title>
	<meta name="description" content="Rusic PlayLists" />
</svelte:head>

<Header />
<div class="btnDiv">
	<a href="http://192.168.0.26:8080/addemptyplaylist">
		<button class="randPl"> Add Empty Playlist </button>
	</a>
	<a href="/addrandomplaylist">
		<button class="randPl"> Add Random Playlist </button>
	</a>
</div>

<h1>Playlists</h1>
<div>
	<ul>
		<div class="playlistDiv">
			<div class="plcard">
				<p>Playlist1</p>
				<div class="plcontrols">
					<p>+</p>
					<p>-</p>
					<p>e</p>
				</div>
			</div>
		</div>
		<div class="playlistDiv">
			<div class="plcard">
				<p>Playlist2</p>
				<div class="plcontrols">
					<p>+</p>
					<p>-</p>
					<p>e</p>
				</div>
			</div>
		</div>
	</ul>
</div>

<style>
	p {
		font-size: 1.5em;
		margin: 0.5em;
	}
	.plcontrols {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.plcard {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 1em;
		padding: 1em;
		border-radius: 12px;
		border: 3px solid rgb(64, 238, 58);
		color: white;
		background-color: black;
	}
	a {
		margin: 1em;
	}
	.btnDiv {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin: 1em;
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
		font-size: 1.7em;
	}
</style>
