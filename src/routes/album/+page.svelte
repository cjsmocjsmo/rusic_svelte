<script>
	import AlbumSearchForm from '../../lib/components/albumSearchForm.svelte';
</script>

<svelte:head>
	<title>Albums</title>
	<meta name="description" content="Rusic Albums" />
</svelte:head>

<!-- <h1>Album Search</h1>
<form >
    <input type="text" name="searchTerm" />
    <button type="submit">Search</button>
</form> -->

<AlbumSearchForm />
<div>
	<ul class="alphaList">
		<a href="/album/A">
			<h1>A</h1>
			<h3>15</h3>
		</a>
		<a href="/album/B">
			<h1>B</h1>
			<h3>20</h3>
		</a>
		<a href="/album/C">
			<h1>C</h1>
			<h3>22</h3>
		</a>
		<a href="/album/D">
			<h1>D</h1>
			<h3>100</h3>
		</a>
		<a href="/album/E">
			<h1>E</h1>
			<h3>22</h3>
		</a>
	</ul>
	<ul class="alphaList">
		<a href="/album/F">
			<h1>F</h1>
		</a>
		<a href="/album/G">
			<h1>G</h1>
		</a>
		<a href="/album/H">
			<h1>H</h1>
		</a>
		<a href="/album/I">
			<h1>I</h1>
		</a>
		<a href="/album/J">
			<h1>J</h1>
		</a>
	</ul>
	<ul class="alphaList">
		<a href="/album/K">
			<h1>K</h1>
		</a>
		<a href="/album/L">
			<h1>L</h1>
		</a>
		<a href="/album/M">
			<h1>M</h1>
		</a>
		<a href="/album/N">
			<h1>N</h1>
		</a>
		<a href="/album/O">
			<h1>O</h1>
		</a>
	</ul>
	<ul class="alphaList">
		<a href="/album/P">
			<h1>P</h1>
		</a>
		<a href="/album/Q">
			<h1>Q</h1>
		</a>
		<a href="/album/R">
			<h1>R</h1>
		</a>
		<a href="/album/S">
			<h1>S</h1>
		</a>
		<a href="/album/T">
			<h1>T</h1>
		</a>
	</ul>
	<ul class="alphaList">
		<a href="/album/U">
			<h1>U</h1>
		</a>
		<a href="/album/V">
			<h1>V</h1>
		</a>
		<a href="/album/W">
			<h1>W</h1>
		</a>
		<a href="/album/X">
			<h1>X</h1>
		</a>
		<a href="/album/Y">
			<h1>Y</h1>
		</a>
	</ul>
	<ul class="alphaList">
		<a href="/album/Z">
			<h1>Z</h1>
		</a>
	</ul>
</div>

<style>
	h3 {
		color: rgb(241, 7, 7);
	}
	a {
		color: black;
	}
	.alphaList {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
