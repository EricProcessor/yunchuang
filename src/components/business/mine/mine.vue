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
    <router-view></router-view> 
    <!-- tab标签 -->
    <router-view></router-view>
    <m-footer :selected="selected"></m-footer>
  </div>
</template>
<script>
import IndexHeader from 'business/indexHeader/indexHeader'
import MFooter from "business/mFooter/mFooter";
import MineInformation from "business/mineInformation/mineInformation";
import MineTab from "business/mineTab/mineTab";
export default {
  data() {
    return {
      
    };
  },
  created() {
    this.headerText = "个人中心"    //设置头部显示导航内容
    this.selected = "mine"        //设置底部导航栏默认选中
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
