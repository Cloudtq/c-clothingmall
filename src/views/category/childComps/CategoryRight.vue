<template>
<!-- <div></div> -->
      <scroll class="content">
        <div class="cate_info">
          <div  v-for="item in categoryInfo">
              <img :src="item.image" alt="">
              <p>{{item.title}}</p>
          </div>
        </div>
      </scroll>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
import  { 
          getCategory,
          getCategoryInfo,
          getCategoryDetail
        } from 'network/category'

export default { 
   name: "CategoryRight" ,
   components:{
     Scroll
   },
   data(){
     return {
       categoryInfo:[]
     }
   },
   created(){
      this.$bus.$on('cateClick',(data)=>{
        getCategoryInfo(data.maitKey).then((res)=>{
          this.categoryInfo = res.data.list
        })
      })
   }
} 
</script>

<style scoped>
.content{
  background-color: #fff;
  width: 70%;
  overflow: hidden;
}

.cate_info{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 20px;
}

.content img{
  height: 90px;
  width: 90px;
}

.content p {
  text-align: center;
}


</style>