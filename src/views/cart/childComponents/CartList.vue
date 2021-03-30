<template>
  <div class="cart-list">
      <scroll class="content" ref="scroll">
          <div v-for='item in cartList'>
          <cart-list-item :item='item'></cart-list-item>
          </div>
      </scroll>
          
  </div>
</template>
<script>

    import CartListItem from './CartListItem'
    import { mapGetters } from 'vuex'
    import Scroll from 'components/common/scroll/Scroll'

    export default {
        name: "CartList",
        components: {
            Scroll,
            CartListItem
        }, 
        computed:{
            ...mapGetters(['cartList'])
        },
        activated(){
            this.$refs.scroll.refresh()
        }
    } 
</script>
<style scoped>

    .cart-list{
        height: calc(100% - 44px - 49px - 40px);
    }

    .content{
        height: 100%;
        overflow: hidden;
    }
</style>