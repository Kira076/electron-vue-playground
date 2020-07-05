import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Canvas from '@/components/Canvas'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: Home
    },
    {
      path: '/canvas',
      name: 'main-canvas',
      component: Canvas
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
