import Home from '../pages/Home/Home.vue'
import Cartory from '../pages/Cartory/Cartory.vue'
import Identifying from '../pages/Identifying/Identifying.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Personal from '../pages/Personal/Personal.vue'
export default[
    {
        path:'/home',
        component:Home,
    },
    {
        path:'/cartory',
        component:Cartory
    },
    {
        path: '/identifying',
        component: Identifying
    },
    {
        path: '/shopping',
        component: Shopping
    },
    {
        path: '/personal',
        component: Personal
    },
    {
        path: '/',
        redirect: '/home'
    },
]