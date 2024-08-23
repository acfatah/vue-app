import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './styles/app.css'
import App from './App.vue'
import router from './router'

document.title = 'Vue + Vite'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.mount('#app')
