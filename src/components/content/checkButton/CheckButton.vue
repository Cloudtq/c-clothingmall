<template>
  <div class="check-button" :class="{checked:isChecked}">
      <img  src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>
<script>
export default { 
   name: "App" ,
   props:{
       isChecked:{
           type:Boolean,
           default:false
       }
   }
} 
</script>
<style scoped>
.check-button{
    border: 2px solid #aaa;
    border-radius: 50%;
    width: 20px;
    height: 20px;
}

.checked{
    border-color:var(--color-tint) ;
    background-color: var(--color-tint);
}
</style>