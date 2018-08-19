import Vue from 'vue'
import Router from 'vue-router'

import HomePageComp from '@/components/HomePage/HomePage.vue';
import practiceComp from '@/components/practice/practice.vue';
import test_001Comp from '@/components/test_001/test_001.vue';

Vue.use(Router)

const router = new Router({
  // base: '/app', // 設定base，相對根路徑 (当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写 (基路径) 了) 【https://router.vuejs.org/zh/api/】
  // mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/',
      redirect: 'HomePage'
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePageComp
    },
    {
      path: '/practice' , component : practiceComp ,
      children : [ // 子路由(嵌套路由) ,
        { path: 'test001', component: test_001Comp } // ※※※ 當 /practice/test001 test_001Comp 会被渲染在 practiceComp 的 <router-view> 中
      ]
    },
    { path: '*', redirect: '/' } // 萬用路由(放最後)
  ]
})

// router.replace({ path: '/', redirect: '/' });
export default router
