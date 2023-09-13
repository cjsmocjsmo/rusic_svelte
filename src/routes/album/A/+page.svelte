<script>
	export let data;
	console.log(data.albumList);

	let fuck = (a1) => {
		alert(a1);
	};
</script>

<svelte:head>
	<title>Album/A</title>
	<meta name="description" content="Rusic Album" />
</svelte:head>

<h1>Albums</h1>
<div>
	{#each data.albumList as alb}
		<img src={alb[0]} alt={alb[1]} />
	{/each}
</div>

<style>
	img {
		border-radius: 8px;
		border-width: 3px;
		border-style: solid;
		border-color: rgb(67, 240, 44);
		background-color: black;
		margin: 8px;
	}
</style>
