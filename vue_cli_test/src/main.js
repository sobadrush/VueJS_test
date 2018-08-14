// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import footer from './components/footer/footer.vue'
import header from './components/header/header.vue'
import myFooter from './components/myFooter/myFooter.vue'

Vue.component('app-footer', footer)
Vue.component('app-header', header)
Vue.component('app-myFooter', myFooter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
