<template>
  <h1>Vue (with Nuxt.js)</h1>
</template>

<script>
export default {
  layout: 'default',
  head() {
    return {
      title: 'Vue (with Nuxt.js)'
    };
  },
}
</script>

<style lang="stylus" scoped>
  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
