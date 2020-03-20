<template>
  <div>
    <el-menu background-color="#e9e8e9" active-text-color="#409eff" default-active="1">
      <el-menu-item>
        <i class="iconfont icon-icon-5" />
        <span slot="title">发现音乐</span>
      </el-menu-item>
      <el-menu-item>
        <i class="iconfont icon-icon-1" />
        <span slot="title">私人FM</span>
      </el-menu-item>
      <el-menu-item>
        <i class="iconfont icon-icon-5" />
        <span slot="title">视频</span>
      </el-menu-item>
      <el-menu-item>
        <i class="iconfont icon-icon-5" />
        <span slot="title">朋友</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Side',
  data: function() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.el-menu-item {
  i {
    font-size: 22px;
    color: #333;
    margin: 0 10px;
  }
}
</style>
