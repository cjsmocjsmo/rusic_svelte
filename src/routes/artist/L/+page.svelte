<script>
	import ArtComp from '$lib/components/artistComp.svelte';
	import HomeDivComp from '$lib/components/homeDivComp.svelte';
	export let data;

</script>

<svelte:head>
	<title>Artist/L</title>
	<meta name="description" content="Rusic Artists" />
</svelte:head>

<HomeDivComp />

<div class="albList">
	{#each data.artistList as art}
		<ArtComp artinfo={art} />
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
