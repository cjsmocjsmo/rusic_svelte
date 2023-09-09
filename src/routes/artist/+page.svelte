<script>
	export let data;

	import ArtistSearchForm from '../../lib/components/artistSearchForm.svelte';
</script>

<svelte:head>
	<title>Artists</title>
	<meta name="description" content="Rusic Artists" />
</svelte:head>

<ArtistSearchForm />

<div>
	<ul class="alphaList">
		{#each data.artistCount as ac}
			<div class="alpha">
				<a href="/artist/{ac.alpha}">
					<h1>{ac.alpha}</h1>
					<h3>{ac.count}</h3>
				</a>
			</div>
		{/each}
	</ul>
</div>

<style>
	h3 {
		color: rgb(241, 7, 7);
        padding-left: 6px;
	}
	a {
		color: black;
	}
	.alphaList {
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: 10px;
		grid-auto-rows: minmax(100px, auto);
	}

    .alpha {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
