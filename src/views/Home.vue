<template>
  <div class="home">
    <banner />
    <div class="privateMv">
      <el-link :underline="false">
        推荐MV
        <i class="el-icon-arrow-right" />
      </el-link>
      <el-row :gutter="15">
        <el-col v-for="(item, index) in mvList" :key="index" :span="6">
          <div>
            <img :src="item.picUrl" draggable="false">
          </div>
          <div class="textBox">
            <p>{{ item.name }}</p>
            <span v-for="(artist, artistIndex) in item.artists" :key="artistIndex">{{ artist.name }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import banner from '@/components/banner/Banner.vue'
import { privateContentMv } from '@/api/home'
export default {
  name: 'Home',
  components: {
    banner
  },
  data() {
    return {
      mvList: []
    }
  },
  created() {
    // 获取推荐mv
    this.getMv()
  },
  methods: {
    getMv() {
      privateContentMv()
        .then(response => {
          console.log('getMv', response)
          this.mvList = response.result
        })
        .catch(error => {
          console.error(error)
        })
    }
  }
}
</script>

<style lang="scss" >
.home {
  // max-width: 1000px;
  // margin: 0 auto;

  .privateMv{

    .el-col{
      max-width: 25%;
      img{
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
