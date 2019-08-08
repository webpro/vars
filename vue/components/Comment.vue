<template>
  <article>
    <p class="meta">
      {{comment.user}} {{comment.time_ago}}
    </p>

    <div v-html="comment.content"></div>

    <div class="replies">
      <template v-for="comment in comment.comments">
        <comment :comment="comment" :key="comment.id"/>
      </template>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="stylus" scoped>
  article {
    border-top: 1px solid #eee;
    margin: 1em 0 0 0;
    padding: 1em 0 0 0;
    font-size: 14px;
  }

  .meta {
    color: #999;
  }

  .replies {
    padding: 0 0 0 1em;
  }
</style>
