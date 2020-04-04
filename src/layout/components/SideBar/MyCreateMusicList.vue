<template>
  <div>
    <el-submenu index="2">
      <template slot="title" class="dockTitle">
        <span>创建的歌单</span>
      </template>

      <el-menu-item-group>
        <el-menu-item v-for="(item, index) in musicList" :key="index">
          <i class="iconfont icon-icon-5" />
          <span slot="title">{{ item.title }}{{ item.musicListId }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'MyCreateMusicList',
  data() {
    return {
      musicList: [
        {
          title: '歌单1',
          musicListId: 1
        },
        {
          title: '歌单2',
          musicListId: 2
        },
        {
          title: '歌单3',
          musicListId: 3
        },
        {
          title: '歌单4',
          musicListId: 4
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
