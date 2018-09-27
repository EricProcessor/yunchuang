<template>
  <div>
    <!-- header部分 -->
    <index-header text="活动" :hasSearch="false" >
      <span  @click="activeScreen" class="acticity-screen">筛选</span>
    </index-header>
    <!-- tab部分 -->
    <acTab class="ac-tab" @selectTab="selectTab"></acTab>
     <m-footer :selected="selected"></m-footer>
  </div>
</template>
<script>
import AcTab from "base/ac-tab/ac-tab";
import MFooter from 'business/mFooter/mFooter'
import IndexHeader from "business/indexHeader/indexHeader";
export default {
    data() {
      return {
        selected: "activity",//设置导航栏选中栏目
        tValue:"",
        selTab:1
      }
    },
    components: {
        IndexHeader,
        AcTab,
        MFooter
    },
    created() {
      this.selected = "activity"; //设置导航栏默认选中项
    },
    methods:{
      activeScreen(){
        this.$router.push({
          path: "/activeScreen/",
          query:{
            selTab:this.tValue
          }
        });
      },
      selectTab(val){
        this.tValue = val
        // console.log(val)
      }
    }     
};
</script>
<style lang="less" scoped>
.acticity-screen{
  height: 88px;
  line-height: 88px;
  position: absolute;
  right:20px;
  font-size: 28px;
  color: #fff;
}
// .ac-tab {
//   margin-bottom: 88px;
// }
</style>
