import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '@/components/Portfolio'
import PortfolioDetails from '@/components/PortfolioDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Portfolio',
      component: Portfolio
    },
    {
      path: '/PortfolioDetails/:id',
      name: 'PortfolioDetails',
      component: PortfolioDetails
    }
  ]
})
