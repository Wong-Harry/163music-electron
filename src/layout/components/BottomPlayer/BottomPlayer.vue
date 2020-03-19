<template>
  <div class="playBox">
    <playInfo />
    <h1>这是Player</h1>
    <BottomBtn />
  </div>
</template>

<script>
import playInfo from './playInfo'
import BottomBtn from './BottomBtn'
export default {
  name: 'Player',
  components: {
    playInfo,
    BottomBtn
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.playBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}
</style>
