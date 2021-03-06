import { ADD_COUNTER, ADD_PRODUCT } from './mutations_types'

export default {
    [ADD_COUNTER](state, payload) {
        payload.count += 1
    },
    [ADD_PRODUCT](state, payload) {
        payload.checked = true
        payload.count = 1
        state.cartList.push(payload)
    }
}