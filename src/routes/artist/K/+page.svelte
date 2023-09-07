<script>
  export let data;
  console.log(data.artistList);

  let fuck = (a1) => {
    alert(a1)
  }

</script>

{#each data.artistList as art}

    <h1 on:click={fuck(art[1])}>{art[0]}</h1>
    <!-- <h1>{art[1]}</h1> -->

{/each}
