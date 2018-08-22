// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import myHeader from '@/components/myHeader/myHeader.vue';
import mySideBar from '@/components/mySideBar/mySideBar.vue';

import eventBus from './eventBus.js';

import axios from 'axios'; // 使用Axios ... (1)

// =-=-=-=-=-=-=-=-【全域註冊 ... Start】-=-=-=-=-=-=-=-=-=
Vue.prototype.$http = axios // 使用Axios ... (2)

Vue.config.productionTip = false

// 註冊全域共用function，組件js中可用 this.toJson(xxx) 呼叫
Vue.prototype.toJson = function( _input ){
  return JSON.stringify( _input );
}

Vue.component('app-header' , myHeader)
Vue.component('app-sidebar' , mySideBar)

Vue.filter("globalFirst1Chars", str => str.substring(0, 1))
Vue.filter("globalPrompt", function(val/*第一個參數是 pipe 傳入的值*/, arg1, arg2){
  console.log('globalPrompt , val >>> ' + val);
  console.log('globalPrompt , arg1 >>> ' + arg1);
  console.log('globalPrompt , arg2 >>> ' + arg2);
  return val + ' ' + arg1 + ', ' + arg2;
});

Vue.filter('toJson', val => { return JSON.stringify(val, null, 2) } );
Vue.filter('fromJson', val => { return JSON.parse(val) } );

// =-=-=-=-=-=-=-=-【全域註冊 ... End】-=-=-=-=-=-=-=-=-=-=-=


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
    return {
      // Bind our event-bus to our $root Vue model
      bus : eventBus
    }
  },
  router, // 表示 router : router (ES6 屬性名稱與值相同可如此sugar)
  components: { App },
  template: '<App/>'
})


