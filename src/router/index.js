import Vue from 'vue'
import Router from 'vue-router'
import Index from 'business/index/index'
import Information from 'business/information/Information';
import inforDetail from 'business/inforDetail/inforDetail';
import activity from 'business/activity/activity';
import activeDetail from 'business/activeDetail/activeDetail';
import screenResult from 'business/screenResult/screenResult';
import activeScreen from 'business/activeScreen/activeScreen';
import HeaderSearch from 'business/search/HeaderSearch';
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
  } ,{
    path: '/activity',
    name: 'activity',
    component: activity
  }, {
    path: '/screenResult',
    name: 'screenResult',
    component: screenResult
  },{
    path: '/activeScreen',
    name: 'activeScreen',
    component: activeScreen
  },{
    path: '/activeDetail',
    name: 'activeDetail',
    component: activeDetail
  },{
    path: '/HeaderSearch',
    name: 'HeaderSearch',
    component: HeaderSearch
  }]
})
