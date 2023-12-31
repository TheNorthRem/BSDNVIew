import axios from 'axios';
import router from '@/router/router';
import { ElMessage } from '@/../node_modules/element-plus';
// axios.defaults.baseURL = 'http://82.157.75.213:8081'
axios.defaults.baseURL = 'http://localhost:8082'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
// axios.defaults.headers.common['Authorization'] =  'Bearer'+ localStorage.getItem('token')
axios.defaults.headers.common['X-token'] =   localStorage.getItem('token')
const request = axios.create({
    // baseURL: 'http://82.157.75.213:8081/',
    baseURL: 'http://localhost:8082/',
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
    console.log('axios_token',token)
    console.log(userId)
    if (token) {
        config.headers['X-token'] = token; // 请求头部添加token
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
// ({response}) => {
//     const {status, data} = response; // 获取状态码
//     const{ message } = data; 
//     ElMessage.error(message); // 提示错误信息
//     if (status === 401) router.push('/'); // 跳转到首页
// },
// (error) => {  
//     // 对响应错误做点什么
//     console.dir(error);
//     return Promise.reject( error );
//   }
(error) => {
    const { status, data } = error.response; // 获取状态码和响应数据
    const { message } = data;
    ElMessage.error(message); // 提示错误信息
    if (status === 401) router.push('/'); // 跳转到首页
    return Promise.reject(error);
  }

);
export default axios