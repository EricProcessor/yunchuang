<template>
  <div class="myInterview towLevelRouter">
    <!-- header -->
    <header class="top pos1">
      <a href="#/" class="page-back router-link-active">
        <i class="mintui mintui-back"></i>
      </a>
      <span>我的活动</span>
    </header>
    <div class="myActMar">
      <my-activity-list></my-activity-list>
    </div>
  </div>
</template>
<script>
import MyActivityList from "../MyActivityList/MyActivityList";
export default {
  components: {
    MyActivityList
  }
};
</script>
<style lang="less" scoped>
// 二级路由定位
.towLevelRouter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgb(245, 245, 245);
}
// 头部样式
.top {
  width: 100%;
  height: 88px;
  text-align: center;
  line-height: 88px;
  font-size: 36px;
  color: #fff;
  background: #253350;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;

  .mintui-back {
    position: absolute;
    left: 0px;
  }
  .mintui-back:before {
    color: #fff;
    padding-left: 0.32rem;
    font-size: 0.64rem;
    position: relative;
    top: 6px;
  }
}
.myActMar {
  margin-top: 88px;
}
</style>
