import Home from '../pages/Home/Home.vue'
import Cartory from '../pages/Cartory/Cartory.vue'
import Identifying from '../pages/Identifying/Identifying.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personal from '../pages/Personal/Personal.vue'
import Search from '../pages/Search/Search.vue'

export default[
    {
        path:'/home',
        component:Home,
        meta:{
            isShowFooter:true
        }
    },
    {
        path:'/cartory',
        component:Cartory,
        meta:{
            isShowFooter:true
        }
    },
    {
        path: '/identifying',
        component: Identifying,
        meta:{
            isShowFooter:true
        }
    },
    {
        path: '/shopping',
        component: Shopping,
        meta:{
            isShowFooter:true
        }
    },
    {
        path: '/personal',
        component: Personal,
        meta:{
            isShowFooter:true
        }
    },
    {
        path: '/search',
        component: Search
    },
    {
        path: '/',
        redirect: '/home'
    },
]