<template>
  <div id="detail-nav-bar">
      <nav-bar> 
          <div slot="left" class="back" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div class='center' slot="center">
              <div :class='{active:currentIndex===index}' @click="titleClick(index)" v-for='(item,index) in titles' :key="index">
                  {{item}}
              </div>
          </div>
      </nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar';
export default { 
    name: "DetailNavBar" ,
    components:{
        NavBar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index
        },
        backClick(){
            this.$router.back()
        }
    }
} 
</script>
<style scoped>
    .center{
        display: flex;
        justify-content: space-evenly;
        font-size: 14px;
    }

    .active{
        color: var(--color-tint);
    }
    .back{
        position: relative;
        top: 5px;
    }
</style>