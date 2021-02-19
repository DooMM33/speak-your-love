import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'

import {Button,Uploader,ImagePreview,Col,Row,Image as VanImage,Lazyload,
        Icon,Dialog,Overlay,NavBar,Loading} from "vant";

import 'swiper/css/swiper.min.css'
import animate from 'animate.css'

Vue.config.productionTip = false
Vue.use(animate)
Vue.prototype.axios=axios
Vue.use(Button)
Vue.use(Uploader)
Vue.use(Col)
Vue.use(Row)
Vue.use(VanImage)
Vue.use(Lazyload)
Vue.use(Icon)
Vue.use(Dialog)
Vue.use(Overlay)
Vue.use(NavBar)
Vue.use(Loading)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
