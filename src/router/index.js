import Vue from 'vue'
import Router from 'vue-router'
import Index from 'business/index/index'
import Information from 'business/information/Information';
import InforDetail from 'business/inforDetail/inforDetail';
import Activity from 'business/activity/activity';
import Classroom from 'business/classroom/classroom'
import Mine from 'business/mine/mine';
import ActiveDetail from 'business/activeDetail/activeDetail';
import ScreenResult from 'business/screenResult/screenResult';
import ActiveScreen from 'business/activeScreen/activeScreen';
import HeaderSearch from 'business/search/HeaderSearch';
import Login from 'business/login/login';
import Register from 'business/register/register';
import PersonalSet from 'business/personalSet/personalSet'

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
    component: InforDetail
  }, {
    path: '/activity',    //活动页面
    name: 'activity',
    component: Activity
  }, {
    path: '/screenResult',
    name: 'screenResult',
    component: ScreenResult
  }, {
    path: '/activeScreen',
    name: 'activeScreen',
    component: ActiveScreen
  },
  {
    path: '/classroom',   //课堂页面
    name: 'classroom',
    component: Classroom
  }, {
    path: '/mine',          //个人中心页面
    name: 'mine',
    component: Mine,
    children: [{
      path: 'personalSet',        //个人设置页面
      name: 'personalSet',
      component:PersonalSet,
    }]
  }, {
    path: '/activeDetail',
    name: 'activeDetail',
    component: ActiveDetail
  }, {
    path: '/HeaderSearch',
    name: 'HeaderSearch',
    component: HeaderSearch
  }, {
    path: '/login', //登录页
    name: 'login',
    component: Login
  }, {
    path: '/register', //注册页
    name: 'register',
    component: Register
  }]
})
