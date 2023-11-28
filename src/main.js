import { createApp } from 'vue'
import './http/request'
import App from './App.vue'
import '@/../node_modules/element-plus/dist/index.css'
import './http/request'
import router from './router/router'


createApp(App).use(router).mount('#app')
