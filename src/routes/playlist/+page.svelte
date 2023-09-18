<script>
	import { selplaylist } from '$lib/stores.js';
	import Header from '$lib/components/Header.svelte';
	export let data;
	console.log(data.allpls);

	let isVisible = false;
	function toggle(x) {
		selplaylist.set(x);
		isVisible = true;
		console.log(x);
	}
</script>

<svelte:head>
	<title>PlayLists</title>
	<meta name="description" content="Rusic PlayLists" />
</svelte:head>

<Header />

<h1>Playlists</h1>
{#if isVisible}
	<div class="btnDiv">
		<a href="">
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
	{#each data.allpls as pl}
		<button class="plBtn" on:click={toggle(pl.rusicid)}>{pl.name}</button>
	{/each}
</div>

<div class="btnDiv">
	<a href="/addemptyplaylist">
		<button class="randPl"> Add Empty Playlist </button>
	</a>
	<a href="/addrandomplaylist">
		<button class="randPl"> Add Random Playlist </button>
	</a>
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
