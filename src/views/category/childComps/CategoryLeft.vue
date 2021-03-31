<template>
    <scroll class="content">
        <div v-for="(item,index) in category" 
            :key="index" class="left-item" 
            :class="{'active':currentIndex===index}"
            @click="cateClick(index)">
          <p>{{item.title}}</p>
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
   name: "CategoryLeft" ,
   components:{
     Scroll
   },
   props:{
   },
   data(){
     return {
       currentIndex:0,
       category:[]
     }
   },
   created(){
      getCategory().then((res)=>{
        this.category = res.data.category.list
        this.$bus.$emit('cateClick',this.category[this.currentIndex]) 
      })
      console.log('创建了',this.category);
   },
   methods:{
     cateClick(index){
        this.currentIndex = index
        this.$bus.$emit('cateClick',this.category[index])
     }
   }
} 
</script>
<style scoped>
.content{
  background-color:#eee;
  height: 100%;
  overflow: hidden;
  width: 30%;
}

.left-item{
  height: 47px;
  line-height: 47px;
  text-align: center;
}

.active p{
  display:inline-block;
  width: 100%;
  border-left:4px solid var(--color-high-text);
  color: var(--color-high-text);
  font-weight: 400;
  line-height: 25px;
}

.active{
  background-color: #fff;
}
</style>