import Vue from 'vue'
import Router from 'vue-router'
import Index from 'business/index/index'
import Information from 'business/information/Information';
import InforDetail from 'business/inforDetail/inforDetail';
import Activity from 'business/activity/activity';
import Classroom from 'business/classroom/classroom'
import Mine from 'business/mine/mine';
import MyIndex from 'business/MyIndex/MyIndex';
import MyActivity from 'business/MyActivity/MyActivity';
import MyInterview from 'business/MyInterview/MyInterview';
import MyProject from 'business/MyProject/MyProject';
import MyNews from 'business/MyNews/MyNews';
import ActiveDetail from 'business/activeDetail/activeDetail';
import ScreenResult from 'business/screenResult/screenResult';
import ActiveScreen from 'business/activeScreen/activeScreen';
import HeaderSearch from 'business/search/HeaderSearch';
import Login from 'business/login/login';
import Register from 'business/register/register';
import PersonalSet from 'business/personalSet/personalSet';
import Err404 from 'business/err404/err404';
import CompanyAccount from 'business/companyAccount/companyAccount';
import EnterpriseSet from 'business/enterpriseSet/enterpriseSet'
import SetServiceIns from 'business/SetServiceIns/SetServiceIns';
import SetInvestment from 'business/setInvestment/setInvestment';
import SetTeacher from 'business/setTeacher/setTeacher';
import SetInvestor from 'business/setInvestor/setInvestor';
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
      path: '/activity', //活动页面
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
      path: '/classroom', //课堂页面
      name: 'classroom',
      component: Classroom
    }, {
      path: '/mine', //个人中心页面
      name: 'mine',
      component: Mine,
      children: [{
        path: 'MyIndex', // 我的首页页面
        name: 'MyIndex',
        component: MyIndex
      }, {
        path: 'MyActivity', // 我的活动页面
        name: 'MyActivity',
        component: MyActivity
      }, {
        path: 'MyInterview', // 我的约谈页面
        name: 'MyInterview',
        component: MyInterview
      }, {
        path: 'MyProject', // 我的项目页面
        name: 'MyProject',
        component: MyProject
      }, {
        path: 'MyNews', // 我的消息页面
        name: 'MyNews',
        component: MyNews
      }, {
        path: 'personalSet', //个人设置页面
        name: 'personalSet',
        component: PersonalSet,
      }, {
        path: 'enterpriseSet', //企业设置页面
        name: 'enterpriseSet',
        component: EnterpriseSet
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
    },
    {
      path: '/err404', //404
      name: 'err404',
      component: Err404
    },
    {
      path: '/companyAccount', //企业认证
      name: 'companyAccount',
      component: CompanyAccount
    },
    {
      path: '/setServiceIns', //认证服务机构
      name: 'setServiceIns',
      component: SetServiceIns
    },
    {
      path: '/setInvestment', //认证投资机构
      name: 'setInvestment',
      component: SetInvestment
    },
    {
      path: '/setTeacher', //认证导师
      name: 'setTeacher',
      component: SetTeacher
    },
    {
      path: '/setInvestor', //认证投资人
      name: 'setInvestor',
      component: SetInvestor
    }
  ]
})
