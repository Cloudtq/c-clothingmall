import { ADD_COUNTER, ADD_PRODUCT } from './mutations_types'

export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {

            // let oldProduct = null
            // for (let item of state.cartList) {
            //     if (item.iid === payload.iid) {
            //         //浅拷贝，相当于把数组中已有的那个商品的地址传给 oldProduct
            //         //这样做的好处时通过操作 oldProduct 就可以操作到数组中的商品
            //         oldProduct = item
            //     }
            // }

            let oldProduct = context.state.cartList.find((item) => item.iid === payload.iid)

            if (oldProduct) {
                //通过操作 oldProduct 的数量 +1，数组中的对应商品也会+1
                context.commit(ADD_COUNTER, oldProduct)
                resolve('当前商品数量+1')
            } else {
                context.commit(ADD_PRODUCT, payload)
                resolve('添加了新的商品')
            }
        })
    }
}