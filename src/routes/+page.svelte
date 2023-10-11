<script>
	import Header from '$lib/components/Header.svelte';
	import { nowplayingimgurl } from '$lib/stores.js';
	import { selrandalbumid } from '$lib/stores.js';
	export let data;

	function toggle(albumid) {
		console.log(albumid)
		selrandalbumid.set(albumid);
	}
</script>

<svelte:head>
	<title>Rusic</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header />
<section>
	<div class="nowPlayingPic">
		<img class="mainImg" src={$nowplayingimgurl} alt="Welcome" />
	</div>
	<div>
		<h1>Albums Of Interest</h1>
		<ul>
			{#each data.cart as cart}
				<button on:click={toggle(cart.albumid)}>
					<a href="/songsforrandalbum">
						<img
							class="randPic"
							src={cart.httpthumbpath}
							alt="Welcome"
						/>
					</a>
				</button>
			{/each}
		</ul>
	</div>
</section>

<style>
	button {
		background-color: black;
		border: none;
		margin: 0.5em;
		border-radius: 7px;
		border-style: solid;
		border-color: red;
		border-width: 2.5px;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	h1 {
		width: 100%;
	}
	.nowPlayingPic {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 2em;
	}
	.mainImg {
		width: 200px;
		height: 200px;
		border-radius: 8px;
	}
	.randPic {
		width: 100px;
		height: 100px;
		margin: 7px;
		/* border-style: solid;
		border-color: rgb(67, 240, 44);
		border-width: 2.5px; */
		border-radius: 8px;
	}


</style>
