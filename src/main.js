// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import 'lib-flexible'
import '../static/css/reset.css'
import 'mint-ui/lib/style.min.css'
import '../src/components/business/Accountsecurity/font_bvnd5sczwrm/iconfont.css'
Vue.config.productionTip = false

Vue.use(MintUI);

//时间格式化过滤器。传入 date时间对象。全局可用
Vue.filter('formatDate', function(date) {
  
  if (Object.prototype.toString.call(date).indexOf('Date') === -1) return

  let year = date.getFullYear(),
      month = date.getMonth() - 0 + 1,
      day = date.getDate()
  return `${year}-${month}-${day}`
})

//全局引用axios
Vue.prototype.axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
