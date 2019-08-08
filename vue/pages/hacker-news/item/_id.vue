<template>
  <div>
    <article>
      <a href="item.url">
        <h1>{{item.title}}</h1>
        <small>{{item.domain}}</small>
      </a>

      <p class="meta">
        submitted by {{item.user}} {{item.time_ago}}
      </p>
    </article>

    <div class="comments">
      <template v-for="comment in item.comments">
        <comment :comment="comment" :key="comment.id"/>
      </template>
    </div>
  </div>
</template>

<script>
import Comment from "~/components/Comment";

export default {
  name: "ItemView",
  components: { Comment },

  head() {
    return {
      title: this.item.title
    };
  },

  async asyncData({ params }) {
    const { id } = params;
    const res = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`);
    const item = await res.json();
    return { item };
  },

  methods: {
    isAbsolute(url) {
      return /^https?:\/\//.test(url);
    }
  }
};
</script>

<style lang="stylus" scoped>
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
