<template>
  <div class="login-box">
    <div class="mask" @click="$parent.loginBoxShow = false" />
    <div
      class="content"
      :style="{ height: status == 'login' ? '400px;' : '250px' }"
    >
      <el-form v-if="!status" ref="form" :model="form" label-width="80px">
        <el-form-item label="手机">
          <el-input v-model="form.phone" type="phone" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" />
        </el-form-item>
        <el-button
          type="primary"
          size="small"
          :disabled="!form.phone || !form.password"
          @click="login"
        >登录</el-button>
      </el-form>
      <div v-if="status" class="info">
        <div class="header">
          <img :src="$store.getters.userInfo.avatarUrl" alt>
        </div>

        <h4>{{ $store.getters.userInfo.nickname }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import apiConfig from '../../../router/httpConfig'
import util from '../../../utils.js'
export default {
  name: 'LoginBox',
  data: function() {
    return {
      form: {
        phone: '',
        password: ''
      }
    }
  },
  computed: {
    status: function() {
      return this.$store.getters.userInfo
        ? this.$store.getters.userInfo.userId
        : null
    }
  },
  methods: {
    login: function() {
      this.$axios
        .get(
          `${apiConfig.login}?phone=${this.form.phone}&password=${this.form.password}`
        )
        .then(res => {
          this.$store.commit('SET_USERINFO', res.data.profile)
          if (res.data.code === 200) {
            this.$parent.loginBoxShow = false
            util.session.set('USERINFO', this.$store.getters.userInfo)
            this.$message({
              message: '登陆成功',
              type: 'success'
            })
          }
        })
    }
  }
}
</script>

<style lang="scss">
@import '../../../styles/variable.scss';

.login-box {
  z-index: 999;
  position: fixed;
  width: $app-max-width;
  height: $app-max-height;
  top: 0;
  left: 0;
  .mask {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .content {
    background: white;
    position: absolute;
    left: 150px;
    top: 55px;
    z-index: 999;
    width: 320px;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

.info {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .header {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
}
</style>
