import { createApp } from 'vue'
import App from './App.vue'
import router from './router/intex'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
import '//at.alicdn.com/t/c/font_3761931_99omxbp69tq.js'
const pinia = createPinia()
createApp(App).use(router).use(pinia).use(ArcoVue).mount('#app')
