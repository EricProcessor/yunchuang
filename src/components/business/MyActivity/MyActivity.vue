<template>
  <div class="myInterview towLevelRouter">
    <index-header :text="headerText" :hasSearch="false"></index-header>
    <div class="myActMar">
      <my-activity-list></my-activity-list>
    </div>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import MyActivityList from "../MyActivityList/MyActivityList";
export default {
  created() {
    this.headerText = "我的活动"; //设置头部显示导航内容
  },
  components: {
    IndexHeader,
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
  z-index: 200;
  background: rgb(245, 245, 245);
}
</style>
