<script context="module">
  export async function preload({ params }, session) {
    const { page } = params;
    const res = await this.fetch(
      `https://node-hnapi.herokuapp.com/news?page=${page}`
    );
    const items = await res.json();
    const offset = Number(page) * PAGE_SIZE;
    return { page, items };
  }
</script>

<script>
  import Summary from "./_Summary.svelte";

  const PAGE_SIZE = 30;

  export let page;
  export let items;

  $: start = 1 + (Number(page) - 1) * PAGE_SIZE;
  $: next = `/hacker-news/top/${Number(page) + 1}`;
</script>

<style>
  a {
    padding: 2em;
    display: block;
  }
</style>

<svelte:head>
  <title>Hacker News</title>
</svelte:head>

{#each items as item, i}
  <Summary {item} index={start + i} />
{/each}

{#if next}
  <a class="more" href={next}>More...</a>
{/if}
