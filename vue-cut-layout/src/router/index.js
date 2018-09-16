import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import cards from '@/components/cards/cards.vue';
import myCharts from '@/components/myCharts/myCharts.vue';
import myFlot from '@/components/myFlot/myFlot.vue';

Vue.use(Router)

export default new Router({
  // base: '/app', // 設定base，相對根路徑 (当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写 (基路径) 了) 【https://router.vuejs.org/zh/api/】
  // mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/', redirect : '/cards' /* 預設路由 */
    },
    {
      path: '/cards/:passingMsg?/:passingMsg2?', // ? : 代表userId可有可無
      name: 'cardsPage',
      component: cards,
      props: true
    },
    {
      path: '/home', name: 'HelloWorld', component: HelloWorld
    },
    {
      path: '/charts', component: myCharts,
      children: [
        {
          // myFlot 會被渲染在 myCharts 的 <router-view> 中，
          // 所以 myCharts 中要記得寫 <router-view>
          path: 'flot', component: myFlot
        },
      ]
    },
    {
      path : '*' , redirect : '/' /* 萬用路由 */
    }
  ]
})
