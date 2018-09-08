import Vue from 'vue'
import Router from 'vue-router'

import cHomePage from '@/components/HomePage/HomePage.vue'
import cfetchEmpData from '@/components/fetchEmpData/fetchEmpData.vue'
import cfetchRandomUserApi from '@/components/fetchRandomUserApi/fetchRandomUserApi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', redirect: 'goHomePage' /* 預設路由(放最前面) */
    },
    {
      path: '/goHomePage', name: 'toHomePage', component: cHomePage
    },
    {
      path: '/goFetchEmpData', name: 'toFetchEmpData', component: cfetchEmpData
    },
    {
      path: '/goFetchRandUserData', name: 'toFetchRandUserData', component: cfetchRandomUserApi
    },
    {
      path : '*' , redirect : '/' /* 萬用路由(放最後) */
    }
  ]
})
