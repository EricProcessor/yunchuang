<template>
  <div class="mine_tab">
    <ul>
      <li @click="_pageJump(item.path)" v-for="(item,index) in tabList" :key="index">
        <div><img :src="item.tabImg" alt=""><span>我的首页</span></div>
        <img src="./gd.png" alt="">
      </li>
      <!-- <li @click="_pageJump('/MyIndex')">
        <div><img src="./myIndex.png" alt=""><span>我的首页</span></div>
        <img src="./gd.png" alt="">
      </li>
      <li @click="_pageJump('/MyProject')">
        <div><img src="./myProject.png" alt="">我的项目</div>
        <img src="./gd.png" alt="">
      </li>
      <li @click="_pageJump('/MyInterview')">
        <div><img src="./myInterview.png" alt="">我的约谈</div>
        <img src="./gd.png" alt="">
      </li>
      <li @click="_pageJump('/MyActivity')">
        <div><img src="./myActivity.png" alt="">我的活动</div>
        <img src="./gd.png" alt="">
      </li>
      <li>
        <div><img src="./mySafety.png" alt="">账号安全</div>
        <img src="./gd.png" alt="">
      </li>
      <li @click="_pageJump('/personalSet')">
        <div><img src="./mySetting.png" alt="">个人设置</div>
        <img src="./gd.png" alt="">
      </li>
      <li @click="_pageJump('/MyNews')">
        <div><img src="./myNews.png" alt="">我的消息</div>
        <img src="./gd.png" alt="">
      </li> -->
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
          path: "",
          title: "账号安全",
          tabImg: require("./mySafety.png")
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
  methods: {
    _pageJump(path) {
      //页面路由跳转方法
      this.$router.push({
        path: "/mine" + path
      });
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
