<script>
	import Header from '$lib/components/Header.svelte';
	import TestPic from '$lib/images/testpic.jpg';
	export let data;
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<Header />
<section>
	<div class="nowPlayingPic">
		<h1>Now Playing</h1>
		<img class="mainImg" src={TestPic} alt="Welcome" />
	</div>
	<div>
		<h1>Albums Of Interest</h1>
		<ul>
			{#each data.cart as cart}
				<button>
					<img class="randPic" src={cart.httpthumbpath} alt="Welcome" />
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
	}
	.mainImg {
		width: 250px;
		height: 250px;
	}
	.randPic {
		width: 150px;
		height: 150px;
		margin: 7px;
		/* border-style: solid;
		border-color: rgb(67, 240, 44);
		border-width: 2.5px; */
		border-radius: 8px;
	}
</style>
