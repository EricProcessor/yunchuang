<template>
  <div class="mine_tab">
    <ul>
      <li  v-for="(item,index) in tabList" :key="index">
        <div class="libox" @click="_pageJump(item.path,item.title)">
          <div><img :src="item.tabImg" alt=""><span>{{item.title}}</span></div>
          <img src="./gd.png" alt="">
        </div>
        
      </li>
        <i :class="{'news':!newSumShow}"></i>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      newSumShow: false,
      isOwn: "",
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
    // this.saveUserMessage();
    this.getNewsSumAjax();
    this.local();
  },
  methods: {
    _pageJump(path, title) {
      if (this.isOwn == "G" || this.isOwn == "Q") {
        //页面路由跳转方法
        console.log(title);
        this.$router.push({
          path: "/mine" + path
        });
      } else {
        //页面路由跳转方法
        this.$router.push({
          path: "/login"
        });
      }
    },
    //获取是否有新的消息
    getNewsSumAjax() {
      if (this.isOwn == "G" || this.isOwn == "Q") {
        this.axios({
          url: "/frontmessage",
          method: "post"
        }).then(res => {
          if (res.status === 200) {
            this.show = res.data.msg;
            if (res.data.msg == "s") {
              this.newSumShow = true;
              // console.log(this.newSumShow);
            } else {
              this.newSumShow = false;
              // console.log(this.newSumShow);
            }
          }
        });
      }
    },
    local() {
      this.isOwn = localStorage.getItem("isOwn");
      if (this.isOwn == "Q") {
        this.tabList[6].title = "企业设置";
        this.tabList[6].path = "/enterpriseSet";
      } else {
        this.tabList[6].title = "个人设置";
        this.tabList[6].path = "/personalSet";
      }
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
    overflow: hidden;
    line-height: 88px;
    height: 88px;
    border-bottom: 1px solid #dfdfdf;
    font-size: 24px;
    color: #000000;
    letter-spacing: 2px;

    align-items: center;
    .libox {
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
  i {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #f35828;
    float: right;
    top: -72px;
    position: relative;
    left: 14px;
  }
  .news {
    display: none;
  }
}
</style>
