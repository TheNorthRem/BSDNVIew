import axios from 'axios'

const service = axios.create({
    baseURL: ' ',
    timeout: 5000
})

// 请求拦截器
service.interceptors.request.use(
    config => config
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        return response.data;
    }
)

// 添加GET请求方法
export function get(url, params) {
    return service({
        method: 'get',
        url: url,
        params: params
    })
}

// 添加POST请求方法
export function post(url, data) {
    return service({
        method: 'post',
        url: url,
        data: data
    })
}

// 添加PUT请求方法
export function put(url, data) {
    return service({
        method: 'put',
        url: url,
        data: data
    })
}

// 添加DELETE请求方法
export function del(url, data) {
    return service({
        method: 'delete',
        url: url,
        data: data
})
}