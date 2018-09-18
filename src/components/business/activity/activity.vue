<template>
  <div>
    <!-- header部分 -->
    <header class="activity-title">活动
      <span class="acticity-screen" @click="activeScreen">筛选</span>
    </header>
    <!-- tab部分 -->
    <acTab class="ac-tab"></acTab>
     <m-footer :selected="selected"></m-footer>
  </div>
</template>
<script>
    import AcTab from "base/ac-tab/ac-tab";
    import MFooter from 'business/mFooter/mFooter'
    
    export default {
      data() {
        return {
          selected: "activity"//设置导航栏选中栏目
          
        }
      },
        components: {
            AcTab,
            MFooter
        },
        methods:{
          activeScreen(){
            this.$router.push({
              path: "/activeScreen"
            });
          }
        }
       
    };
</script>
<style lang="less" scoped>
.activity-title {
    position: relative;
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
    z-index: 1000;
  .acticity-screen{
    height: 88px;
    line-height: 88px;
    position: absolute;
    right:20px;
    font-size: 28px;
    color: #fff;
  }
}
.ac-tab {
  margin-top: 88px;
  margin-bottom: 88px;
}
</style>
