import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/home/index.vue'
Vue.use(Router)
export default new Router(
    {
        routes:[
            {
                path:'/',
                redirect:{
                    name:'Home'
                }
            },
            {
                path:'/home',
                name:'Home',
                component: Home,
                // children:[
                //     {

                //     }
                // ]
            }
        ]
    }
)