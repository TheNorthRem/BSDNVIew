import { createApp } from 'vue'
import App from './App.vue'
// import {
//     components,
//     plugins
// } from './utils/elementPlus.js'

// const app = createApp(App)
// components.forEach(component => {
//     app.component(component.name, component)
// })

// plugins.forEach(plugin => {
//     app.use(plugin)
// })
// app.mount('#app')

// import ElementPlus from '@/../node_modules/element-plus'
import '@/../node_modules/element-plus/dist/index.css'

const app = createApp(App).mount('#app')

// app.use(ElementPlus)