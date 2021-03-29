<template>
  <div id="detail">
      <detail-nav-bar @titleClick='titleClick' class="nav-bar"></detail-nav-bar>
      <scroll class="content" ref="scroll">
        <detail-swiper :top-images='topImages' ></detail-swiper>
        <detail-base-info :goods='goods'></detail-base-info>
        <detail-shop-info :shop='shop'></detail-shop-info>
        <detail-goods-info :detail-info='detailInfo' @imageLoad='imageLoad'></detail-goods-info>
        <detail-param-info ref="params" :param-info='paramInfo'></detail-param-info>
        <detail-comment-info ref="comment" :comment-info='commentInfo'></detail-comment-info>
        <goods-list ref="recommend" :goods="recommends"></goods-list>
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
           recommends:[],
           themeTopYs:[],
           getThemeTopY:null
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

            //根据最新的数据，对应的DOM已经被渲染出来
            //但是图片还没有加载完（目前获得的offsetTop没有包含其中的图片）
            // this.$nextTick(()=>{
            //     this.themeTopYs=[]
            //     this.themeTopYs.push(0)
            //     this.themeTopYs.push(-this.$refs.params.$el.offsetTop)
            //     this.themeTopYs.push(-this.$refs.comment.$el.offsetTop)
            //     this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop)

            //     console.log(this.themeTopYs);
            // })


        })

        //请求推荐数据
        getRecommend().then(res=>{
                this.recommends = res.data.list
        })

        this.getThemeTopY = debounce(()=>{
                this.themeTopYs=[]
                this.themeTopYs.push(0)
                this.themeTopYs.push(-this.$refs.params.$el.offsetTop)
                this.themeTopYs.push(-this.$refs.comment.$el.offsetTop)
                this.themeTopYs.push(-this.$refs.recommend.$el.offsetTop)
                console.log(this.themeTopYs);
        },20)
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
            this.getThemeTopY()

        },
        titleClick(index){
            // console.log(index);
            this.$refs.scroll.scrollTo(0,this.themeTopYs[index],200)
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