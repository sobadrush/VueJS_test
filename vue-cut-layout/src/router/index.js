import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import cards from '@/components/cards/cards.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: cards
    },
    {
      path: '/cards/:userId?',
      name: 'cardsPage',
      component: cards
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
