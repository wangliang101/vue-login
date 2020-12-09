import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ant from './plugins/Ant'

createApp(App).use(router).use(store).use(ant).mount('#app')
