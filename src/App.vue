<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import util from './utils.js'
export default {
  name: 'App',
  data() {
    return {}
  },
  created: function() {
    this.$store.commit('SET_USERINFO', util.session.get('USERINFO'))
  }
}
</script>

<style lang="scss">
@import './styles/variable.scss';

#app {
  max-width: $app-max-width;
  max-height: $app-max-height;
  margin: 0 auto;
  overflow: hidden;
}
</style>
