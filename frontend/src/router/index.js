import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import NotFound from '@/components/NotFound'
import Main from '@/components/Main'
import Clock from '@/components/Clock'
import Dashboard from '@/components/Views/Dashboard/Dashboard'

Vue.use(Router)




export default new Router({
  hashbang: false,
  routes: [

    {
      path: '/',
      name: 'Home',
      component: Home,

    },
    {
      path: '/clock',
      name: 'Clock',
      component: Clock,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '*',
      name: 'Not Found',
      component: NotFound
    }
  ]
})
