<script>
	export let mp3;
</script>

<div class="audioCtls">
	{#key mp3}
		<audio controls preload="auto" autoplay>
			<source src={mp3} type="audio/mpeg" />
		</audio>
	{/key}
</div>

<style>
	audio {
		width: 100%;
	}
	.audioCtls {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-bottom: 1.5em;
	}
</style>
