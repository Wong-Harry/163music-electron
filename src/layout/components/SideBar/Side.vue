<template>
  <div>
    <Mine />
    <el-menu
      background-color="#e9e8e9"
      active-text-color="#409eff"
      default-active="1"
    >
      <el-menu-item index="1">
        <i class="iconfont icon-icon-5" />
        <span slot="title">发现音乐</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="iconfont icon-icon-1" />
        <span slot="title">私人FM</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="iconfont icon-icon-5" />
        <span slot="title">视频</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="iconfont icon-icon-5" />
        <span slot="title">朋友</span>
      </el-menu-item>

      <el-menu-item index="5-1">
        <i class="iconfont icon-icon-5" />
        <span slot="title">下载管理</span>
      </el-menu-item>
      <el-menu-item index="5-2">
        <i class="iconfont icon-icon-5" />
        <span slot="title">我的音乐云盘</span>
      </el-menu-item>
      <el-menu-item index="5-3">
        <i class="iconfont icon-icon-5" />
        <span slot="title">我的电台</span>
      </el-menu-item>
      <el-menu-item index="5-4">
        <i class="iconfont icon-icon-5" />
        <span slot="title">我的收藏</span>
      </el-menu-item>

      <MyCreateMusicList />
    </el-menu>
  </div>
</template>

<script>
import MyCreateMusicList from './MyCreateMusicList'
import Mine from './Mine'
export default {
  name: 'Side',
  components: {
    MyCreateMusicList,
    Mine
  },
  data: function() {
    return {}
  }
}
</script>

<style lang="scss">
.dockTitle {
  text-align: left;
}
.el-menu-item {
  text-align: left;
  i {
    font-size: 22px;
    color: #333;
    margin: 0 10px;
  }
}
</style>
