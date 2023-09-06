import axios from 'axios';
import router from '@/router/router';
import { Message } from '@/../node_modules/element-plus';
axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
axios.defaults.headers.post['Authorization'] =  localStorage.getItem('token')
const request = axios.create({
    baseURL: 'http://localhost:8081',
    timeout: 5000, // 请求超时时间
    headers: {
    }
})

//请求拦截器
request.interceptors.request.use(
(config) => {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')
    console.log(token)
    console.log(userId)
    if (token) {
        config.headers.token = token; // 请求头部添加token
        config.headers.userId = userId; // 请求头部添加userId
    }
    return config;
},
(error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
}
);

//响应拦截器
request.interceptors.response.use(
    console.log("响应拦截器"),
(response) => {
    console.log("response");

    // 对响应数据做点什么
    return response;
},
({response}) => {
    const {status, data} = response; // 获取状态码
    const{ message } = data;
   
    Message.error(message); // 提示错误信息
    if (status === 401) router.push('/login'); // 跳转到登录页面
},
(error) => {  
    // 对响应错误做点什么
    console.dir(error);
    return Promise.reject( error );
  }

);
export default axios