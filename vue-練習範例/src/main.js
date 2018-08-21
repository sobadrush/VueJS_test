// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import myHeader from '@/components/myHeader/myHeader.vue';
import mySideBar from '@/components/mySideBar/mySideBar.vue';

import axios from 'axios'; // 使用Axios ... (1)

// =-=-=-=-=-=-=-=-【全域註冊 ... Start】-=-=-=-=-=-=-=-=-=
Vue.prototype.$http = axios // 使用Axios ... (2)

Vue.config.productionTip = false

Vue.component('app-header' , myHeader)
Vue.component('app-sidebar' , mySideBar)

Vue.filter("globalFirst1Chars", str => str.substring(0, 1))
Vue.filter("globalPrompt", function(val/*第一個參數是 pipe 傳入的值*/, arg1, arg2){
  console.log('globalPrompt , val >>> ' + val);
  console.log('globalPrompt , arg1 >>> ' + arg1);
  console.log('globalPrompt , arg2 >>> ' + arg2);
  return val + ' ' + arg1 + ', ' + arg2;
});

// Vue.filter('limitFilter', function(array, length) {
//   console.log(array);
//   return array;
//   // var limitCount = parseInt(length, 10);
//   // if (limitCount <= 0) {
//   //     ("development") !== 'production' && _.warn(
//   //         'The limit filter requires an argument defining the limit count.'
//   //     );
//   //     return array;
//   // }
//   // return array.slice(0, limitCount);
// });
// =-=-=-=-=-=-=-=-【全域註冊 ... End-=-=-=-=-=-=-=-=-=-=-=


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


