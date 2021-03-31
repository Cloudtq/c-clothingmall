import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import toast from 'components/common/toast/index.js'
import VueLazyLoad from 'vue-lazyload'

import FastClick from 'fastclick'

Vue.config.productionTip = false

//为 Vue 赋值 事件总线对象
Vue.prototype.$bus = new Vue()

Vue.use(toast)
Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/loading.gif')
})

//解决移动端300ms延迟
FastClick.attach(document.body)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')