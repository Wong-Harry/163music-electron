<template>
  <div class="pos-r">
    <div class="tips" @click="loginBoxShow = !loginBoxShow">
      <div class="header">
        <img :src="head" alt>
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
        ? this.$store.getters.userInfo.head
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

<style lang="scss" scoped></style>
