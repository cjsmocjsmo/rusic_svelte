<script>
	import { selplaylistid } from '$lib/stores.js';
	import { selplaylistname } from '$lib/stores.js';
	import { allplaylists } from '$lib/stores.js';
	import { onMount } from 'svelte';
	import Header from '$lib/components/Header.svelte';
	// export let data;

	onMount(async () => {
		const res = await fetch(`http://192.168.0.91:8080/allplaylists`);
		const allpls = await res.json();
		allplaylists.set(allpls);
	});

	let isVisible = false;
	function toggle(rusicid, plname) {
		selplaylistid.set(rusicid);
		selplaylistname.set(plname);
		isVisible = true;
		console.log(rusicid);
	}
	console.log('this is allplaylist');
	console.log($allplaylists);

	// Create an array of objects, each of which contains the URL of an audio file and a track title.
	const playlist = [
		{
			url: 'https://example.com/audio/track1.mp3',
			title: 'Track 1'
		},
		{
			url: 'https://example.com/audio/track2.mp3',
			title: 'Track 2'
		},
		{
			url: 'https://example.com/audio/track3.mp3',
			title: 'Track 3'
		}
	];

	function playNextTrack() {
		// Get the current track index.
		let currentTrackIndex = playlist.findIndex((track) => track.url === audio.src);

		// Increment the track index to play the next track.
		currentTrackIndex++;

		// If the track index is greater than the length of the playlist, loop back to the beginning.
		if (currentTrackIndex >= playlist.length) {
			currentTrackIndex = 0;
		}

		// Get the URL of the next track.
		const nextTrackUrl = playlist[currentTrackIndex].url;

		// Load and play the next track.
		audio.src = nextTrackUrl;
		audio.play();
	}

	// Add event listeners to the audio element to detect when the current track has ended, and then call the function to play the next track.
	audio.addEventListener('ended', playNextTrack);
</script>

<svelte:head>
	<title>PlayLists</title>
	<meta name="description" content="Rusic PlayLists" />
</svelte:head>

<Header />
<div class="btnDiv">
	<a href="/addemptyplaylist">
		<button class="randPl"> Add Empty Playlist </button>
	</a>
	<a href="/addrandomplaylist">
		<button class="randPl"> Add Random Playlist </button>
	</a>
</div>
<h1>Playlists</h1>
{#if isVisible}
	<div class="btnDiv">
		<a href="/playlists">
			<button class="randPl" on:click={() => (isVisible = false)}> Play Playlist </button>
		</a>
		<a href="/deleteplaylist">
			<button class="randPl"> Delete Playlist </button>
		</a>
		<a href="/editplaylist">
			<button class="randPl"> Edit Playlist </button>
		</a>
	</div>
{:else}
	<p />
{/if}

<div>
	{#each $allplaylists as pl}
		<button class="plBtn" on:click={toggle(pl.rusicid, pl.name)}>{pl.name} {pl.numsongs}</button>
	{/each}
</div>

<style>
	.plBtn {
		width: 45%;
		padding: 0.5em;
		border-radius: 12px;
		border: 3px solid red;
		color: rgb(64, 238, 58);
		background-color: black;
		margin: 0.5em;
		font-size: 1.5em;
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
