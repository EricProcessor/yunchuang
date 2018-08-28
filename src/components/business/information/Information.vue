<template>
    <div>
      <!-- 顶部line -->
        <pTop></pTop>
        <!-- header -->
        <header class="top pos1">资讯
            <span class="el-icon-search"></span>
        </header>
        <!-- tab标签 -->
        <tabs class="tabs"></tabs>
    </div>
</template>
<script>
import pTop from "base/topline/topline";
import Tabs from "base/tabs/tabs";
export default {
  components: {
    pTop,
    Tabs,
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
  top: 1.25rem;
  left: 0;
  z-index: 3;
  span {
    display: block;
    width: 1.125rem;
    height: 1.125rem;
    font-size: 1.5rem;
    color: #fff;
    position: absolute;
    top: 0.65rem;
    right: 0.75rem;
    z-index: 3;
  }
}
.tabs {
  margin-top: 4rem;
}

</style>
