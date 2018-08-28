import Vue from 'vue'
import Router from 'vue-router'
import Index from 'business/index/index'
import Information from 'business/information/Information';
import inforDetail from 'business/inforDetail/inforDetail';
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: Index
  }, {
    path: '/information',
    name: 'Information',
    component: Information
  }, {
    path: '/infordetail',
    name: 'inforDetail',
    component: inforDetail
  }]
})
