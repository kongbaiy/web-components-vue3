import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupI18n } from './locales'

import zsComponents from './components'

import App from './App.vue'
import router from './router'

import 'virtual:uno.css'
import '@/assets/scss/reset.scss'
import '@/assets/scss/element-plus.scss'

const app = createApp(App)

setupI18n(app)
// zsComponents(app)

app.use(createPinia())
app.use(router)
app.mount('#app')
