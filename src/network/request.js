import axios from 'axios'
export function instance(config){
    const instance1 = axios.create({
        //接口地址
        baseURL:'',
        timeout:3000
    })

    instance1.interceptors.request.use(config=>{
        return config;
    },error=>{
        return error
    })

    instance1.interceptors.response.use(res=>{
        return res;
    },error=>{
        return error
    })

    return instance1(config)
}