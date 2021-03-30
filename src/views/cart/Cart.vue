<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{length}})</div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>

  </div>
</template>

<script>
  import CartList from './childComponents/CartList'
  import CartBottomBar from './childComponents/CartBottomBar'

  import NavBar from 'components/common/navbar/NavBar'

  import {mapGetters} from 'vuex'

  export default {
    name: "Cart",
    components:{
      NavBar,
      CartList,
      CartBottomBar
    },
    computed:{
      // ...mapGetters(['cartLength'])
      //将 store中的 getters 方法添加到 computed 中。
      ...mapGetters({
        length:'cartLength'
      })

    }
  }
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: white;
    font-weight: 700;
  }

</style>
