<script>
	import Header from '$lib/components/Header.svelte';
	export let data;

	import AlbumSearchForm from '$lib/components/albumSearchForm.svelte';
</script>

<svelte:head>
	<title>Album</title>
	<meta name="description" content="Rusic Album" />
</svelte:head>

<Header />
<AlbumSearchForm />

<div>
	<ul class="alphaList">
		{#each data.albumCount as ac}
			<div class="alpha">
				<a href="/album/{ac.alpha}">
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
