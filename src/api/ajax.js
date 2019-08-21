import axios from 'axios'
//编译请求数据为urlincoded格式，为后台接口接收
import qs from 'qs';
import store from '../store'
import {Toast} from 'mint-ui'
import router from '../router'
//添加请求拦截器
axios.interceptors.request.use(config=>{
    const{method,data}=config
    if(method.toUpperCase()==='POST'&& data instanceof Object){
        config.data=qs.stringify(data)
    }
    // 4.如果需要携带token的请求，从state中取出token
    if(config.headers.needToken) {
        const token = store.state.user.token
        if(!token){//没有token，不发请求，直接进入失败的流程
            const error = new Error('没有token，不能发请求')
            error.status = 401
            throw error
        } else { //有token ,添加到请求头中
            config.headers['Authorization'] = token 
        }
    }
    return config
})
//添加相应拦截器
axios.interceptors.response.use(response=>{
    return response.data
},error=>{
    // alert('error'+error.message)
    // return new Promise(()=>{})
    //发请求前如果没有需要的token就失败
    const {response, status, message} = error
    if(!response){
        if(status===401){
            if(router.currentRoute.path!=='/login'){
                Toast(message)
                router.replace('/login')
            }
        }
    }else { //有token
        const status= response.status
        
        //发了请求，请求过期了
        if(status===401){
            if(router.currentRoute.path!=='/login'){
                Toast(response.data.message)
                // 退出登陆
                store.dispatch('logout')
                // 跳转到登陆页面
                router.replace('/login')
            }
        }else if(status===404){// 请求的资源不存在
            Toast('请求的资源不存在')
        }else{
            Toast('请求错误: ' + message)
        } 
    }
     // 中断promise链
    return new Promise(() => {})
})

export default axios