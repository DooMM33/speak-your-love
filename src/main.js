import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

import {Button,Uploader,ImagePreview,Col,Row,Image as VanImage,Lazyload} from "vant";

import 'swiper/css/swiper.min.css'
import animate from 'animate.css'

Vue.config.productionTip = false
Vue.use(animate)
Vue.use(axios)
Vue.use(Button)
Vue.use(Uploader)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Lazyload)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
