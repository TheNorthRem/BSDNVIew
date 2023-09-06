import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import '@/../node_modules/element-plus/dist/index.css'
import router from './router/router'
// import tool from "./utils/tool";
// Vue.use(tool);

createApp(App).use(router).mount('#app')
