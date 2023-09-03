import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8081'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头\
axios.defaults.headers.post['Authorization'] =  localStorage.getItem('token')

export default axios