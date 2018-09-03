<template>
  <div>
    <!-- header -->
    <index-header :text="headerText" :hasSearch="false"></index-header>
    <!-- <div class="mine_information"> 
      <ol>
        <li class="infor_left">
        </li>
        <li class="infor_right">
          <h3>盈创兴 <img src="./nan.png" alt=""></h3>
          <span>内蒙古自治区-包头市-东河区</span>
          <span>注册于2107-09-19</span>
        </li>
      </ol>
    </div> -->
    <mine-information></mine-information>
    <mine-tab></mine-tab>
    <!-- tab标签 -->
    <router-view></router-view>
    <m-footer :selected="selected"></m-footer>
  </div>
</template>
<script>
import MFooter from "business/mFooter/mFooter";
import MineInformation from "business/mineInformation/mineInformation";
import MineTab from "business/mineTab/mineTab";
import IndexHeader from 'business/indexHeader/indexHeader'
export default {
  data() {
    return {
      selected: "mine"  
    }
  },
  created() {
    this.selected = "mine"  //设置导航栏选中栏目
    this.headerText = "个人中心"    //头部显示内容
  },
  components: {
    MFooter,
    MineInformation,
    MineTab,
    IndexHeader
  }
};
</script>
<style lang="less" scoped>
// 头部样式
.top {
  width: 100%;
  height: 88px;
  text-align: center;
  line-height: 88px;
  font-size: 38px;
  color: #fff;
  background: #253350;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  padding-bottom: 40px;
}
</style>
