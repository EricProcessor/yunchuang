import Vue from 'vue'
import Router from 'vue-router'
import Index from 'business/index/index'
import Information from 'business/information/Information';
import inforDetail from 'business/inforDetail/inforDetail';
import activity from 'business/activity/activity';
import HeaderSearch from 'business/search/HeaderSearch';
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',          //首页
    name: 'index',
    component: Index
  }, {
    path: '/information',   //资讯页面
    name: 'Information',
    component: Information
  }, {
    path: '/infordetail',
    name: 'inforDetail',    
    component: inforDetail
  } ,{
    path: '/activity',
    name: 'activity',
    component: activity
  }, {
    path: '/HeaderSearch',
    name: 'HeaderSearch',
    component: HeaderSearch
  }]
})
