import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/index.scss'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ru from 'element-plus/es/locale/lang/ru'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import {createPinia} from 'pinia'
import {useApi} from '@/api'

const pinia = createPinia()

const app = createApp(App)
    .use(pinia)
useApi(app)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router)
   .use(ElementPlus, { locale: ru })
   .mount('#app')
