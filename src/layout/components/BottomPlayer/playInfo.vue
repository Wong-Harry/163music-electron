<template>
  <div class="musicBox">
    <img :src="musicImg" class="musicImg">
    <div class="musicInfo">
      <div class="topBox">
        <h3 class="title">这是歌曲名称</h3>
        <span class="marginItem">-</span>
        <p>这是歌手</p>
      </div>
      <div class="bottombox">
        <span>00:00</span>
        <span class="marginItem">/</span>
        <span>12:12</span>
      </div>
    </div>
  </div>
</template>

<script>
const imgs = require('@/assets/img/Snipaste_2020-03-19_14-44-08.png')

export default {
  name: 'PlayInfo',
  data: function() {
    return {
      musicImg: imgs
    }
  }
}
</script>

<style lang="scss" scoped>
.musicBox {
  display: flex;
  align-items: center;
  .musicImg {
    width: 45px;
    height: 45px;
    margin-right: 20px;
  }

  .musicInfo {
    .topBox {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      h3 {
        color: #454545;
        font-size: 16px;
      }
      p {
        color: #c4c4c4;
        font-size: 14px;
        font-weight: 550;
      }
    }

    .bottombox {
      display: flex;
      align-items: center;
      span {
        color: #c4c4c4;
        font-size: 14px;
      }
    }
  }

  .marginItem {
    margin: 0 5px;
    font-size: 14px;
    color: #c4c4c4;
  }
}
</style>
