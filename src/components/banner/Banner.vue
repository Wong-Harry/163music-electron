<template>
  <el-carousel :interval="5000" height="200px" type="card">
    <el-carousel-item v-for="item in imgList" :key="item.targetId">
      <div class="imgBox">
        <img :src="item.imageUrl" draggable="false" />
      </div>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getBanner as getBannerUrl, privateContentMv } from '@/api/home'

export default {
  name: 'Banner',
  data() {
    return {
      imgList: [],
      mvList: []
    }
  },
  created() {
    // 获取轮播图
    this.getBanner()
    // 获取推荐mv
    this.getMv()
  },
  methods: {
    getBanner() {
      getBannerUrl(0)
        .then(response => {
          console.log('getBanner', response)
          this.imgList = response.banners
        })
        .catch(error => {
          console.error(error)
        })
    },
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

<style lang="scss" scoped>
.el-carousel__item {
  .imgBox {
    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
  }
}
</style>
