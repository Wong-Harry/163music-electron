<template>
  <div class="playBox">
    <playInfo />
    <div class="playBtns">
      <i class="iconfont icon-icon-17" />
      <i class="iconfont icon-icon-18" />
      <i class="iconfont icon-icon-15" />
    </div>
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

  .playBtns {
    display: flex;
    align-items: center;
    i {
      color: #4c4c4c;
      font-size: 42px;
      margin-left: 20px;

      &:first-child,
      &:last-child {
        font-size: 32px;
      }
    }
  }
}
</style>
