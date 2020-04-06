<template>
  <div class="pos-r">
    <div class="tips" @click="loginBoxShow = !loginBoxShow">
      <div class="header">
        <img :src="head" alt />
      </div>
      <div class="name">
        <span>{{ nickname }}</span>
        <i class="el-icon-arrow-right" />
      </div>
    </div>
    <LoginBox v-if="loginBoxShow" />
  </div>
</template>

<script>
import LoginBox from './LoginBox'
export default {
  name: 'Mine',
  components: { LoginBox },
  data() {
    return {
      loginBoxShow: false
    }
  },
  computed: {
    head: function() {
      return this.$store.getters.userInfo
        ? this.$store.getters.userInfo.avatarUrl
        : ''
    },
    nickname: function() {
      return this.$store.getters.userInfo
        ? this.$store.getters.userInfo.nickname
        : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.tips {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  font-size: 16px;
  .header {
    width: 45px;
    height: 45px;
    overflow: hidden;
    border-radius: 100%;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .name {
    i {
      margin-left: 5px;
    }
  }
}
</style>
