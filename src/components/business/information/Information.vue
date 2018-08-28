<template>
  <div>
    <!-- header -->
    <header class="top pos1">资讯
      <span class="icon_search"></span>
    </header>
    <!-- tab标签 -->
    <tabs class="tabs"></tabs>
  </div>
</template>
<script>
import Tabs from "base/tabs/tabs";
export default {
  components: {
    Tabs
  }
};
</script>
<style lang="less" scoped>
.top {
  width: 100%;
  height: 2.75rem;
  text-align: center;
  line-height: 2.75rem;
  font-size: 1.125rem;
  color: #fff;
  background: #253350;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  .icon_search {
    display: block;
    width: 1.125rem;
    height: 1.125rem;
    background: url("./search.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 3;
  }
}
.tabs {
  margin-top: 2.75rem;
}
</style>
