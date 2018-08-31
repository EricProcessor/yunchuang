import Vue from 'vue'
import Router from 'vue-router'
import Index from 'business/index/index'
import Information from 'business/information/Information';
import InforDetail from 'business/inforDetail/inforDetail';
import Activity from 'business/activity/activity';
import Classroom from 'business/classroom/classroom'
import Mine from 'business/mine/mine';
import MyInterview from 'business/MyInterview/MyInterview';
import MyCare from 'business/MyCare/MyCare';
import MyProject from 'business/MyProject/MyProject';
import MyNews from 'business/MyNews/MyNews';
import ActiveDetail from 'business/activeDetail/activeDetail';
import ScreenResult from 'business/screenResult/screenResult';
import ActiveScreen from 'business/activeScreen/activeScreen';
import HeaderSearch from 'business/search/HeaderSearch';
import Login from 'business/login/login';
import Register from 'business/register/register';
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
      path: 'MyInterview',
      name: 'MyInterview',
      component: MyInterview
    }, {
      path: 'MyCare',
      name: 'MyCare',
      component: MyCare
    }, {
      path: 'MyProject',
      name: 'MyProject',
      component: MyProject
    }, {
      path: 'MyNews',
      name: 'MyNews',
      component: MyNews
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
