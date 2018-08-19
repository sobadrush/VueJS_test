import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import cards from '@/components/cards/cards.vue';
import myCharts from '@/components/myCharts/myCharts.vue';
import myFlot from '@/components/myFlot/myFlot.vue';

Vue.use(Router)

export default new Router({
  // mode:'history',
  mode:'hash',
  routes: [
    {
      path: '/',
      component: cards
    },
    {
      path: '/cards/:passingMsg?/:passingMsg2?', // ? : 代表userId可有可無
      name: 'cardsPage',
      component: cards,
      props: true
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/charts', component: myCharts,
      children: [
        {
          path: 'flot', component: myFlot
        },
      ]
    }
  ]
})
