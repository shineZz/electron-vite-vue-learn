import { defineStore } from 'pinia'
import { createPinia } from 'pinia'
import piniaPersistConfig from './config'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// defineStore 调用后返回一个函数，调用该函数获得 Store 实体
interface GlobalState {
  token: string
}
export const GlobalStore = defineStore({
  // id: 必须的，在所有 Store 中唯一
  id: 'GlobalState',
  // state: 返回对象的函数
  state: (): GlobalState => ({
    // token
    token: '',
    // userInfo
    // userInfo: '',
    // // element组件大小

    // themeConfig
  }),
  getters: {},
  actions: {
    // setToken
    setToken(token: string) {
      this.token = token
    },
    // // setUserInfo
    // setUserInfo(userInfo: any) {
    // 	this.userInfo = userInfo
    // },
    // setAssemblySizeSize

    // updateLanguage

    // setThemeConfig
  },
  persist: piniaPersistConfig('GlobalState'),
})

// piniaPersist(持久化)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
