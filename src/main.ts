import { createApp } from 'vue'
import App from './App.vue'
import router from './router/intex'
import { createPinia } from 'pinia'
import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'
const pinia = createPinia()
createApp(App).use(router).use(pinia).use(ArcoVue).mount('#app')
