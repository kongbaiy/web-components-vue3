import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupI18n } from './locales'

import App from './App.vue'
import router from './router'

import 'virtual:uno.css'
import '@/assets/scss/reset.scss'
import '@/assets/scss/element-plus.scss'
// import '../dist/style.css'

// import registerGlobalComponent from '../dist/index'

const app = createApp(App)

setupI18n(app)

// registerGlobalComponent(app, 'test');

app.use(createPinia())
app.use(router)
app.mount('#app')
