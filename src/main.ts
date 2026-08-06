import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'
import './styles/header.css'
import './styles/footer.css'
import './styles/shared-components.css'

createApp(App).use(router).mount('#app')
