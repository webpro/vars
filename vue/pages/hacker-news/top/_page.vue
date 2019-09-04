<template>
  <div>
    <template v-for="(item, i) in items">
      <my-summary :item="item" :index="start + i" :key="item.id" />
    </template>
    <router-link v-if="next" className="more" :to="next">
      More...
    </router-link>
  </div>
</template>

<script>
  import MySummary from '~/components/Summary';

  const PAGE_SIZE = 30;

  export default {
    components: { MySummary },
    head() {
      return {
        title: 'Hacker News'
      };
    },

    computed: {
      start() {
        return 1 + (Number(this.$route.params.page) - 1) * PAGE_SIZE;
      },
      next() {
        return `/hacker-news/top/${Number(this.$route.params.page) + 1}`;
      }
    },

    async asyncData({ params }) {
      const { page } = params;
      const res = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
      const items = await res.json();
      return { items, page };
    }
  };
</script>

<style lang="stylus" scoped>
  a {
    padding: 2em;
    display: block;
  }
</style>
