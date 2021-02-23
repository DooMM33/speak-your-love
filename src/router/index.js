import Vue from 'vue'
import Router from 'vue-router'

import Donghua from '@/views/DongHua'
import slides from '@/views/Slides'

Vue.use(Router)

export default new Router({
    routes:[
        {
            path:'',
            redirect:'/xuanchuan'
        },
        {
            path:'/donghua',
            component:Donghua
        },
        {
            path:'/xuanchuan',
            component:slides
        }
    ]
})