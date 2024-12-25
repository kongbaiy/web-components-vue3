import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupI18n } from './locales'

import App from './App.vue'

import 'virtual:uno.css'
import '@/assets/scss/reset.scss'
import '@/assets/scss/element-plus.scss'

const app = createApp(App)

setupI18n(app)
app.use(createPinia())
app.mount('#app')
