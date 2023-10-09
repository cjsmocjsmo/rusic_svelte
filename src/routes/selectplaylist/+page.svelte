<script>
	import { selsong } from '$lib/stores.js';
	import HomeDivComp from '$lib/components/homeDivComp.svelte';
	export let data;
	console.log(data.allpls);

    function addSongToPlaylist(playlistid, sname) {
        let URL = 'http://192.168.0.26:8080/addsongtoplaylist/' + playlistid + '/' + $selsong;
        fetch(URL);
        let msg = "Song " + sname + " has been added to playlist!";
        alert(msg);
    }
</script>

<svelte:head>
	<title>Select Playlist</title>
	<meta name="description" content="Rusic Artists" />
</svelte:head>

<HomeDivComp />

<h1>Select Playlist to add song to.</h1>

<p>Rusicid of song to add: {$selsong}</p>
<ul>
	{#each data.allpls as item}
		<a href="/artist">
			<button class="songBtn" on:click={addSongToPlaylist(item.rusicid, item.name)}>
				{item.name}
			</button>
		</a>
	{/each}
</ul>

<style>
	p {
		text-align: center;
	}
	ul {
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: center;
		align-items: center;
		margin: 8px;
	}
	a {
		margin: 8px;
		text-decoration: none;
		color: rgb(64, 238, 58);
	}
	/* .songCard {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-style: solid;
		border-color: black;
		border-width: 2.5px;
		border-radius: 0.75em;
		margin: 0.25em;

	} */
	/* .songDiv {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	} */
	.songBtn {
		width: 100%;
		height: 2.7em;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 1.5em;
		margin: 0.25em;
	}
	/* .addBtn {
		padding: 8px;
		color: rgb(64, 238, 58);
		background-color: black;
		border-radius: 0.75em;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
		font-size: 1em;
		margin: 0.25em;
	} */
</style>
