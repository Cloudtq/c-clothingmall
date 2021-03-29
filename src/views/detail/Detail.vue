<template>
  <div id="detail">
      <detail-nav-bar class="nav-bar"></detail-nav-bar>
      <scroll class="content" ref="scroll">
        <detail-swiper :top-images='topImages' ></detail-swiper>
        <detail-base-info :goods='goods'></detail-base-info>
        <detail-shop-info :shop='shop'></detail-shop-info>
        <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'></detail-goods-info>
        <detail-param-info :param-info='paramInfo'></detail-param-info>
        <detail-comment-info :comment-info='commentInfo'></detail-comment-info>
        <goods-list :goods="recommends"></goods-list>
      </scroll>
  </div>
</template>
<script>
import DetailNavBar from './childCpmponents/DetailNavBar'
import DetailSwiper from './childCpmponents/DetailSwiper'
import DetailBaseInfo from './childCpmponents/DetailBaseInfo'
import DetailShopInfo from './childCpmponents/DetailShopInfo'
import DetailGoodsInfo from './childCpmponents/DetailGoodsInfo'
import DetailParamInfo from './childCpmponents/DetailParamInfo'
import DetailCommentInfo from './childCpmponents/DetailCommentInfo'

import Scroll from 'components/common/scroll/Scroll'
import GoodsList from 'components/content/goods/GoodsList'

import {debounce} from 'common/utils.js'
import {itemListenerMixin} from 'common/mixin.js'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'

export default { 
    name: "Detail" ,
    components:{
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList
    },
    mixins:[itemListenerMixin],
    data(){
        return {
           iid:null,
           topImages:[],
           goods:{},
           shop:{},
           detailInfo:{},
           paramInfo:{},
           commentInfo:{},
           recommends:[]
        }
   },
    created(){
        this.iid = this.$route.query.id
        getDetail(this.iid).then(res=>{

            const data = res.result

            this.topImages = res.result.itemInfo.topImages

            //获取商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
            this.shop = new Shop(data.shopInfo)
            console.log(this.shop)

            this.detailInfo = data.detailInfo
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

            if(data.rate.cRate !== 0){
                this.commentInfo = data.rate.list[0]
            }

            getRecommend().then(res=>{
                this.recommends = res.data.list
            })

        })
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
        }
    },
    mounted(){

    },
    destroyed(){
      this.$bus.$off('itemImageLoad',this.itemImgListener)
    }
} 
</script>
<style scoped>

#detail{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: #fff;
}

.content{
    height: calc(100% - 44px);
}

.nav-bar{
    position: relative;
    z-index: 9;
    background-color: #fff;
}
</style>