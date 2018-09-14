<template>
  <div class="mine_tab">
    <ul>
      <li @click="_pageJump(item.path)" v-for="(item,index) in tabList" :key="index">
        <div><img :src="item.tabImg" alt=""><span>{{item.title}}</span></div>
        <img src="./gd.png" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabList: [
        {
          path: "/MyIndex",
          title: "我的首页",
          tabImg: require("./myIndex.png")
        },
        {
          path: "/MyProject",
          title: "我的项目",
          tabImg: require("./myProject.png")
        },
        {
          path: "/MyInterview",
          title: "我的约谈",
          tabImg: require("./myInterview.png")
        },
        {
          path: "/MyActivity",
          title: "我的活动",
          tabImg: require("./myActivity.png")
        },
        {
          path: "/accountsecuritys",
          title: "账号安全",
          tabImg: require("./mySafety.png")
        },
        {
          path: "/companyAccount",
          title: "账号认证",
          tabImg: require("./authen.png")
        },
        {
          path: "/personalSet",
          title: "个人设置",
          tabImg: require("./mySetting.png")
        },
        {
          path: "/MyNews",
          title: "我的消息",
          tabImg: require("./myNews.png")
        }
      ]
    };
  },
  mounted() {
    this.saveUserMessage();
  },
  methods: {
    _pageJump(path) {
      //页面路由跳转方法
      this.$router.push({
        path: "/mine" + path
      });
    },
    saveUserMessage() {
      var d = new Date();
      d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      // console.info(cname + "=" + +"; " + expires);
      document.cookie =
        "SESSION=6988c996-9d9a-489b-b33c-fd9d81f65ff7" + "; " + expires;
      console.info(document.cookie);
      //   var user = {
      //     fmi_id: "183",
      //     fmi_acc: "haoqing",
      //     fmi_username: "张超",
      //     fmi_pwd: "yongchao3",
      //     fmi_pwd_jm: "e1ec2061a7167ebfc2f6c29d3c6b8f09",
      //     fmi_tel: "15010142698",
      //     fmi_status: "Y",
      //     fmi_path: "",
      //     fmi_group: "G",
      //     fmi_type: "R",
      //     fmi_mile: "369800761@qq.com",
      //     fmi_datetimes: "2017/12/4  16:32:01",
      //     fmi_pho_verify: "N",
      //     fmi_mail_verify: "N"
      //   };
      //   // 存储值：将对象转换为Json字符串
      //   sessionStorage.setItem("memberInfo", JSON.stringify(user));
      //   localStorage.setItem("memberInfo", JSON.stringify(user));

      //   // 取值时：把获取到的Json字符串转换回对象

      //   var userJsonStr = sessionStorage.getItem("memberInfo");

      //   var userEntity = JSON.parse(userJsonStr);
      //   console.log(userEntity);
      //   // console.log(userEntity.name); // => james
    }
  }
};
</script>
<style lang="less" scoped>
//我的tab切换
.mine_tab {
  margin: 0 30px;
  border-top: 1px solid #dfdfdf;
  li {
    line-height: 88px;
    height: 88px;
    border-bottom: 1px solid #dfdfdf;
    font-size: 24px;
    color: #000000;
    letter-spacing: 2px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > img {
      height: 30px;
    }
    div {
      display: flex;
      align-items: center;
      img {
        width: 32px;
        padding-right: 20px;
      }
    }
  }
}
</style>
