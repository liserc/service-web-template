// vue 引导js
import Vue from 'vue'

// ant-design-vue组件懒加载
import './component/ant-design-load'
import './component/element-ui-load'

// vue本地存储
import VueStorage from 'vue-ls'

// 配置文件
import config from '../config/settings'

// icon
import '@/icons'

// 权限控制
import '../permission'

Vue.config.productionTip = false

Vue.use(VueStorage, config.storageOptions)

// 非生产环境打印
const environment = process.env.ENV
if (environment !== 'production') {
  console.warn('vue加载中...')
}
