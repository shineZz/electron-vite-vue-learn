import { createApp } from 'vue'
import App from './App.vue'
// import './samples/node-api'
import router from '@/router/index'
// vue i18n
// pinia store
import pinia from '@/store/index'
import Element from 'element-plus'
// element icons
import * as Icons from '@element-plus/icons-vue'
// element css
import 'element-plus/dist/index.css'
// element dark(内置暗黑模式)
import 'element-plus/theme-chalk/dark/css-vars.css'
const app = createApp(App)
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app
  .use(router)
  .use(pinia)
  .use(Element)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
