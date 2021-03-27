<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load='imageLoad'>
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        isEmitImageLoad:false
        }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      imageLoad(){
        if(!this.isEmitImageLoad){
          this.$emit('imageLoad')
          this.isEmitImageLoad=true
        }

      }
    }
  }
</script>

<style scoped>

</style>
