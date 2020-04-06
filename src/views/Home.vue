<template>
  <div class="home">
    <banner />
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import banner from '@/components/banner/Banner.vue'

export default {
  name: 'Home',
  components: {
    banner
  },
  created() {}
}
</script>

<style lang="scss" >
.home {
  // max-width: 1000px;
  // margin: 0 auto;
}
</style>
