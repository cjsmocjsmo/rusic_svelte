<script>
	import welcome from '$lib/images/github.svg';
	import TestPic from '$lib/images/testpic.jpg';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="nowPlayingPic">
		<h1>Now Playing</h1>
		<img class="mainImg" src={TestPic} alt="Welcome" />
	</div>
	<div>
		<h1>Albums Of Interest</h1>
		<ul>
			<img class="randPic" src={TestPic} alt="Welcome" />
			<img class="randPic" src={TestPic} alt="Welcome" />
			<img class="randPic" src={TestPic} alt="Welcome" />
			<img class="randPic" src={TestPic} alt="Welcome" />
			<img class="randPic" src={TestPic} alt="Welcome" />
			<img class="randPic" src={TestPic} alt="Welcome" />
		</ul>
	</div>
</section>

<style>
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
	}

	/* .welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	} */
</style>
