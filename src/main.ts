import { createApp } from 'vue'
import App from './App.vue'
import router from './router/intex'
import { createPinia } from 'pinia'
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
