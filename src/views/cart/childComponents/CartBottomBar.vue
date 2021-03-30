<template>
  <div class="bottom-bar">
      <div @click="cbtnClick" class="check-content">
          <check-button :is-checked='isSelectAll' class="check-button"></check-button>
          <span>全选</span>
      </div>
      <div class="price">
          合计:{{totalPrice}}
      </div>

      <div class="calculate">
          去计算({{checkNum}})
      </div>
  </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default { 
   name: "CartBottomBar" ,
   components:{
       CheckButton
   },
   computed:{
       totalPrice(){
         return'￥'+this.$store.state.cartList.filter((item)=>{
             return item.checked
         }).reduce((preValue,item)=>{
            return preValue+=item.price * item.count
         },0)
       },
       checkNum(){
           return this.$store.state.cartList.filter((item)=>item.checked).length
       },
       isSelectAll(){
            if(this.$store.state.cartList.length===0){
                return false
            }
            return this.$store.state.cartList.every((item)=>{
                return item.checked
            })
       }
   },
    methods:{
        cbtnClick(){
            if(this.isSelectAll)
                this.$store.state.cartList.forEach(item => item.checked = false)
            else
                this.$store.state.cartList.forEach(item => item.checked = true)
        }
    }
} 
</script>
<style scoped>
.bottom-bar{
    height: 40px;
    background-color: #eee;
    position: relative;
    line-height: 40px;
    display: flex;
    justify-content: space-between;
}

.check-content{
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.check-button{
    line-height: 20px;
    margin-right: 5px;
}

.calculate{
    background-color: var(--color-high-text);
    color:#fff;
}
</style>