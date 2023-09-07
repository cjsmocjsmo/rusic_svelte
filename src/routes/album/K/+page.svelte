<script>
    export let data;
    console.log(data.albumList);

    let fuck = (a1) => {
      alert(a1)
    }

  </script>

  {#each data.albumList as alb}

      <h1 on:click={fuck(alb[1])}>{alb[0]}</h1>
      <!-- <h1>{alb[1]}</h1> -->

  {/each}