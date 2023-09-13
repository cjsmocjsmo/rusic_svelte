<script>
	import ArtComp from '$lib/components/artistComp.svelte';
	import ArtistHomeDivComp from '$lib/components/artistHomeDivComp.svelte';
	export let data;

</script>

<svelte:head>
	<title>Artist/I</title>
	<meta name="description" content="Rusic Artists" />
</svelte:head>

<ArtistHomeDivComp />

<div class="albList">
	{#each data.artistList as art}
		<ArtComp artingo={art} />
	{/each}
</div>

<style>
	.albList {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
	}
</style>

