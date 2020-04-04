<template>
  <div class="pos-r">
    <div class="tips" @click="loginBox = !loginBox">
      <div class="header">
        <img :src="$store.getters.userInfo.head" alt>
      </div>
      <div class="name">
        <span>{{ $store.getters.userInfo.nickname }}</span>
        <i class="el-icon-arrow-right" />
      </div>
    </div>

    <div v-if="loginBox" class="login-box">
      <div>
        <label>手机</label>
        <input v-model="phone" type="phone" placeholder="请输入电话">
      </div>
      <div>
        <label>密码</label>
        <input v-model="password" type="password" placeholder="请输入密码">
      </div>
      <el-button type="primary" size="small" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import apiConfig from '../../../router/httpConfig'
export default {
  name: 'Mine',
  data() {
    return {
      phone: '',
      password: '',
      loginBox: false
    }
  },
  created: function() {},
  methods: {
    login: function() {
      this.$axios
        .get(`${apiConfig.login}?phone=${this.phone}&password=${this.password}`)
        .then(res => {
          this.$store.commit('SET_USERINFO', res.data.profile)
          if (res.data.code === 200) {
            this.$message({
              message: '登陆成功',
              type: 'success'
            })
          }
          console.log(res.data)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.login-box {
  // background: white;
  // position: absolute;
  // right: -100%;
  // top: 0;
  // z-index: 2;
}
</style>
