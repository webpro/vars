<template>
  <article>
    <h2>
      <a v-if="item.domain" :href="item.url">
        {{item.title}}
        <small>({{item.domain}})</small>
      </a>
      <router-link v-else :to="`/item/${item.id}`">
        {{item.title}}
      </router-link>
    </h2>

    <p v-if="item.type === 'job'">{{item.time_ago}</p>
    <p v-else>
      {{item.points}} points by {{item.user}} | {{item.time_ago}} |
      <router-link rel="prefetch" :to="`/hacker-news/item/${item.id}`">
        {{item.comments_count}}
        {{item.comments_count === 1 ? 'comment' : 'comments'}}
      </router-link>
    </p>

    <span class="index">{{index}}</span>
  </article>
</template>

<script>
export default {
  name: 'MySummary',
  props: {
    item: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  }
}
</script>

<style lang="stylus" scoped>
  article {
    position: relative;
    padding: 0 0 0 4em;
    margin: 0 0 1.5em 0;
  }
  h2 {
    font-size: 1em;
    font-weight: 500;
    margin: 0 0 0.5em 0;
    color: #333;
  }
  h2 a {
    text-decoration: none;
  }
  p {
    font-size: 0.8em;
    color: #666;
    margin: 0;
    font-weight: 300;
  }
  small {
    color: #666;
    font-weight: 300;
  }
  .index {
    position: absolute;
    font-size: 1.6em;
    font-weight: 200;
    color: #666;
    left: 0.2em;
    top: 0;
    text-align: right;
    width: 0.75em;
    line-height: 1;
  }
</style>

