<template>
  <div class="mine_tab">
    <ul>
      <li>
        <div @click="linkMyIndex"><img src="./myIndex.png" alt=""><span>我的首页</span></div>
        <img src="./gd.png" alt="">
      </li>
      <li>
        <div @click="linkMyProject"><img src="./myProject.png" alt="">我的项目</div>
        <img src="./gd.png" alt="">
      </li>
      <li>
        <div @click="linkMyInterview"><img src="./myInterview.png" alt="">我的约谈</div>
        <img src="./gd.png" alt="">
      </li>
      <li>
        <div @click="linkMyCare"><img src="./myCare.png" alt="">我的关注</div>
        <img src="./gd.png" alt="">
      </li>
      <li>
        <div @click="linkMyActivity"><img src="./myInterview.png" alt="">我的活动</div>
        <img src="./gd.png" alt="">
      </li>
      <li>
        <div><img src="./mySafety.png" alt="">账号安全</div>
        <img src="./gd.png" alt="">
      </li>
      <li>
        <div><img src="./mySetting.png" alt="">个人设置</div>
        <img src="./gd.png" alt="">
      </li>
      <li>
        <div @click="linkMyNews"><img src="./myNews.png" alt="">我的消息</div>
        <img src="./gd.png" alt="">
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {
    linkMyIndex() {
      // 我的首页
      this.$router.push("/mine/MyIndex");
    },
    // 我的活动跳转
    linkMyActivity() {
      this.$router.push("/mine/MyActivity");
    },
    linkMyCare() {
      // 我的关注跳转
      this.$router.push("/mine/MyCare");
    },
    linkMyProject() {
      // 我的项目跳转
      this.$router.push("/mine/MyProject");
    },
    linkMyNews() {
      // 我的消息跳转
      this.$router.push("/mine/MyNews");
    },
    linkMyInterview() {
      // 我的约谈跳转
      this.$router.push("/mine/MyInterview");
    },
    linkMyIndex() {
      // 我的首页
      this.$router.push("/mine/MyIndex");
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
