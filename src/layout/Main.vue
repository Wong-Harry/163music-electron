<template>
  <div>
    <el-container class="app-wrapper">
      <el-header>
        <TopBar />
      </el-header>

      <el-container>
        <el-aside>
          <Side />
        </el-aside>
        <el-container>
          <el-main>
            <Content />
          </el-main>
        </el-container>
      </el-container>

      <el-footer>
        <BottomPlayer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { TopBar, BottomPlayer, Side, Content } from '@/layout/components'

export default {
  name: 'Main',
  components: {
    TopBar,
    BottomPlayer,
    Side,
    Content
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/variable.scss';

.app-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}

.el-header {
  background-color: #f7f7f7;
  text-align: center;
  overflow: hidden;
  height: $app-top-bar-height !important;
}
.el-footer {
  background-color: #ffffff;
  text-align: center;
  overflow: hidden;
}

.el-aside {
  background-color: #e9e8e9;
  width: $app-side-width !important;
  color: #333;
  text-align: center;
}

.el-main {
  color: #333;
  text-align: center;
  margin: 0 auto;
}
</style>
