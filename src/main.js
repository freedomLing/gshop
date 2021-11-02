/***
 * 入口文件
 */
import Vue from 'vue'
import {Button} from 'mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'//使用vue-lazyload库实现图片懒加载
import loading from './common/imgs/loading.gif'

import './mock/mockServer'
import './fiters' // 加载过滤器

//注册全局组件标签
Vue.component(Button.name,Button)//则全局有了<mt-button>标签
//使用vue-lazyload
Vue.use(VueLazyload, {//使得内部自定义产生lazy指令
  loading
})

new Vue({
   el:'#app',
   render: h => h(App),
   router,//使用上vue-router
   store,//使用上vuex
})