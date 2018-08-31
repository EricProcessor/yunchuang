<template>
  <div>
    <!-- header -->
    <header class="top pos1">资讯
      <span class="icon_search"></span>
    </header>
    <!-- tab标签 -->
    <tabs class="tabs"></tabs>
    <m-footer :selected="selected"></m-footer>
  </div>
</template>
<script>
import Tabs from "base/tabs/tabs";
import MFooter from 'business/mFooter/mFooter'
export default {
  data() {
    return {
      selected: "information"
    }
  },
  methods: {

  },
  components: {
    Tabs,
    MFooter
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
.tabs {
  margin-top: 88px;
}
</style>
