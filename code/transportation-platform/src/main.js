// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/css/common.less'
import utils from './utils/utils'
import config from './utils/config'
import global from './utils/global'

Vue.use(router);
Vue.use(ElementUI);
Vue.use(VueResource);

Vue.config.productionTip = false
//注册全局组件
Vue.prototype.$config = config;
Vue.prototype.$global = global;
Vue.prototype.$utils = utils;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
