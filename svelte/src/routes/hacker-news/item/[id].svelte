<script context="module">
  export async function preload(page, session) {
    const { id } = page.params;
    const res = await this.fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
    const item = await res.json();
    return { item };
  }
</script>

<script>
  import Comment from "./_Comment.svelte";
  export let item;
</script>

<style>
  article {
    margin: 0 0 1em 0;
  }

  a {
    display: block;
    margin: 0 0 1em 0;
  }

  h1 {
    font-size: 1.4em;
    margin: 0;
  }
</style>

<svelte:head>
  <title>{item.title}</title>
</svelte:head>

<article>
  <a href={item.url}>
    <h1>{item.title}</h1>
    <small>{item.domain}</small>
  </a>

  <p class="meta">submitted by {item.user} {item.time_ago}</p>
</article>

<div class="comments">
  {#each item.comments as comment}
    <Comment {comment} />
  {/each}
</div>
