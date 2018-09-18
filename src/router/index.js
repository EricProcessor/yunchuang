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
import Accountsecuritys from 'business/Accountsecurity/Accountsecuritys.vue' //账号安全
import CompanyAccount from 'business/companyAccount/companyAccount';
import Changepassword from 'business/Accountsecurity/Changepassword.vue' //手机绑定
import Tel from 'business/Accountsecurity/Tel.vue' //修改密码
import Emaild from 'business/Accountsecurity/Emaild.vue' //邮箱认证
import EnterpriseSet from 'business/enterpriseSet/enterpriseSet'
import SetServiceIns from 'business/SetServiceIns/SetServiceIns';
import SetInvestment from 'business/setInvestment/setInvestment';
import SetTeacher from 'business/setTeacher/setTeacher';
import SetInvestor from 'business/setInvestor/setInvestor';
import ClassVideo from 'business/classVideo/classVideo';
import FindPwd from 'business/findPwd/findPwd';
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/', //首页
      name: 'index',
      component: Index
    }, {
      path: '/information', //资讯页面
      name: 'Information',
      component: Information,
      children: [{ //资讯详情页面
        path: ':id/:title',
        name: 'inforDetail',
        component: InforDetail
      }, ]
    }, {
      path: '/activity', //活动页面
      name: 'activity',
      component: Activity
    }, {
      path: '/screenResult', //筛选结果页面
      name: 'screenResult',
      component: ScreenResult
    }, {
      path: '/activeScreen', //活动筛选页面
      name: 'activeScreen',
      component: ActiveScreen
    },
    {
      path: '/classroom', //课堂页面
      name: 'classroom',
      component: Classroom,
      children: [{
        path: ':id', //课堂视频页面
        name: 'classVideo',
        component: ClassVideo
      }]
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
        },
        {
          path: 'accountsecuritys', //账号安全 
          name: 'Accountsecuritys',
          component: Accountsecuritys,
          children: [{
              path: 'tel', //修改密码   
              name: 'Tel',
              component: Tel
            },
            {
              path: 'changepassword', //手机绑定  
              name: 'Changepassword',
              component: Changepassword
            },
            {
              path: 'emaild', //邮箱认证   
              name: 'Emaild',
              component: Emaild
            },
          ]
        },
        {
          path: 'companyAccount', //企业认证 _ （账号认证）
          name: 'companyAccount',
          component: CompanyAccount
        }, {
          path: 'personalSet', //个人设置页面
          name: 'personalSet',
          component: PersonalSet,
        }, {
          path: 'enterpriseSet', //企业设置页面
          name: 'enterpriseSet',
          component: EnterpriseSet
        },
      ]
    }, {
      path: '/activeDetail/:id', //活动详情页面
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
      path: '/findPwd', //找回密码
      name: 'findPwd',
      component: FindPwd
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
