import { debounce } from 'common/utils.js'


export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        //通过防抖函数包装 refresh，然后在监听图片加载的回调中调用。
        const refresh = debounce(this.$refs.scroll.refresh, 50)

        this.itemImgListener = () => {
                // this.$refs.scroll.refresh()
                refresh()
            }
            //3、监听item中图片加载完成
        this.$bus.$on('itemImageLoad', this.itemImgListener)
    }
}