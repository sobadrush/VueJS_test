// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import myHeader from '@/components/myHeader/myHeader.vue';
import mySideBar from '@/components/mySideBar/mySideBar.vue';

import axios from 'axios'

Vue.config.productionTip = false

/* 不用像前一篇載入Vue plugin */
Vue.prototype.$http = axios

Vue.component('app-header' , myHeader)
Vue.component('app-sidebar' , mySideBar)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
