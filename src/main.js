import Vue from 'vue'
import App from './App.vue'

import 'swiper/css/swiper.min.css'
import animate from 'animate.css'

Vue.config.productionTip = false
Vue.use(animate)


new Vue({
  render: h => h(App),
}).$mount('#app')
