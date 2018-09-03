<template>
  <div>
    <!-- header -->
    <index-header :text="headerText"></index-header>
    <!-- tab标签 -->
    <tabs class="tabs"></tabs>
    <m-footer :selected="selected"></m-footer>
  </div>
</template>
<script>
import Tabs from "base/tabs/tabs";
import MFooter from 'business/mFooter/mFooter'
import IndexHeader from 'business/indexHeader/indexHeader'
export default {
  data() {
    return {

    }
  },
  created() {
      this.selected = "information"   //设置导航栏默认选中项
      this.headerText = "资讯"      //头部显示内容
  },
  components: {
    Tabs,
    MFooter,
    IndexHeader
  }
};
</script>
<style lang="less" scoped>
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
  .icon_search {
    display: block;
    width: 36px;
    height: 36px;
    background: url("./search.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 26px;
    right: 24px;
    z-index: 3;
  }
}
</style>
