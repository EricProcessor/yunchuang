import Vue from 'vue'
import Router from 'vue-router'
import Index from 'business/index/index'
import Information from 'business/information/Information';
import inforDetail from 'business/inforDetail/inforDetail';
import activity from 'business/activity/activity';
import mine from 'business/mine/mine';
import activeDetail from 'business/activeDetail/activeDetail';
import screenResult from 'business/screenResult/screenResult';
import activeScreen from 'business/activeScreen/activeScreen';
import HeaderSearch from 'business/search/HeaderSearch';
import login from 'business/login/login';
import register from 'business/register/register';
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/', //首页
    name: 'index',
    component: Index
  }, {
    path: '/information', //资讯页面
    name: 'Information',
    component: Information
  }, {
    path: '/infordetail',
    name: 'inforDetail',
    component: inforDetail
  }, {
    path: '/activity',
    name: 'activity',
    component: activity
  }, {
    path: '/screenResult',
    name: 'screenResult',
    component: screenResult
  }, {
    path: '/activeScreen',
    name: 'activeScreen',
    component: activeScreen
  }, {
    path: '/mine',
    name: 'mine',
    component: mine
  }, {
    path: '/activeDetail',
    name: 'activeDetail',
    component: activeDetail
  }, {
    path: '/HeaderSearch',
    name: 'HeaderSearch',
    component: HeaderSearch
  }, {
    path: '/login', //登录页
    name: 'login',
    component: login
  }, {
    path: '/register', //注册页
    name: 'register',
    component: register
  }]
})
