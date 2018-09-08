// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from 'axios';
// Vue2.0 axios报错： Cannot read property 'protocol' of undefined
// 解决方法：註釋掉Vue.use(axios) → 改用 Vue.prototype
// Vue.use(axios); // 會報error
Vue.prototype.$axios = axios

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
