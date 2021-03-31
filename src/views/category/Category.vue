<template>
  <div class="category">
      <nav-bar class="nav-bar">
        <div slot="center">分类</div>
      </nav-bar>
      <div class="cate-content">
      <category-left></category-left>
      <category-right></category-right>
      </div>
  </div>
</template>

<script>
import CategoryLeft from './childComps/CategoryLeft'
import CategoryRight from './childComps/CategoryRight'



import NavBar from 'components/common/navbar/NavBar'

export default { 
   name: "Category", 
   components: {
     CategoryLeft,
     CategoryRight,
     NavBar
   },
   data(){
     return {
     }
   },
   created(){

   }
} 
</script>
<style scoped>

.nav-bar{
  color: #fff;
  background-color: var(--color-tint);
}

.category{
  height: 100vh;
}

.cate-content{
  display: flex;
  height: calc(100% - 44px - 49px);

}
/* .cate-content{
  display: flex;
} */
</style>