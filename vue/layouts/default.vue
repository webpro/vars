<template>
  <div id="app">
    <Nav />
    <main>
      <nuxt nuxt-child-key="none" role="main" />
    </main>
  </div>
</template>

<script>
import Nav from '~/components/Nav'
export default {
  components: { Nav },
}
</script>

<style lang="stylus">
main {
  position: relative;
  max-width: 56em;
  background-color: white;
  padding: 2em;
  margin: 0 auto;
  box-sizing: border-box;
}
</style>
