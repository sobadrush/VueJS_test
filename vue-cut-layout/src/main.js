// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import myHeader from './components/myHeader/myHeader'

// Vue.component('myHeader', myHeader)

import header from './components/header/header.vue'
import sidebar from './components/sidebar/sidebar.vue'

Vue.component('app-header', header)
Vue.component('app-sidebar', sidebar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
