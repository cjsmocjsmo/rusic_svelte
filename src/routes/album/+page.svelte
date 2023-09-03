<script>
    import AlbumSearchForm from "../../lib/components/albumSearchForm.svelte";



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
        <a href="/artist/A">
            <h1>A</h1>
        </a>
        <a href="/artist/B">
            <h1>B</h1>
        </a>
        <a href="/artist/C">
            <h1>C</h1>
        </a>
        <a href="/artist/D">
            <h1>D</h1>
        </a>
        <a href="/artist/E">
            <h1>E</h1>
        </a>
    </ul>
    <ul class="alphaList">
        <a href="/artist/F">
            <h1>F</h1>
        </a>
        <a href="/artist/G">
            <h1>G</h1>
        </a>
        <a href="/artist/H">
            <h1>H</h1>
        </a>
        <a href="/artist/I">
            <h1>I</h1>
        </a>
        <a href="/artist/J">
            <h1>J</h1>
        </a>
    </ul>
    <ul class="alphaList">
        <a href="/artist/K">
            <h1>K</h1>
        </a>
        <a href="/artist/L">
            <h1>L</h1>
        </a>
        <a href="/artist/M">
            <h1>M</h1>
        </a>
        <a href="/artist/N">
            <h1>N</h1>
        </a>
        <a href="/artist/O">
            <h1>O</h1>
        </a>
    </ul>
    <ul class="alphaList">
        <a href="/artist/P">
            <h1>P</h1>
        </a>
        <a href="/artist/Q">
            <h1>Q</h1>
        </a>
        <a href="/artist/R">
            <h1>R</h1>
        </a>
        <a href="/artist/S">
            <h1>S</h1>
        </a>
        <a href="/artist/T">
            <h1>T</h1>
        </a>
    </ul>
    <ul class="alphaList">
        <a href="/artist/U">
            <h1>U</h1>
        </a>
        <a href="/artist/V">
            <h1>V</h1>
        </a>
        <a href="/artist/W">
            <h1>W</h1>
        </a>
        <a href="/artist/X">
            <h1>X</h1>
        </a>
        <a href="/artist/Y">
            <h1>Y</h1>
        </a>
    </ul>
    <ul class="alphaList">
        <a href="/artist/Z">
            <h1>Z</h1>
        </a>
    </ul>
</div>

<style>
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