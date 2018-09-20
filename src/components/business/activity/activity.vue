<template>
  <div>
    <!-- header部分 -->
    <header class="activity-title">活动
       <span class="icon_back" @click="backBtnPre"></span> 
       <span class="acticity-screen" @click="activeScreen">筛选</span>
    </header>
    <!-- tab部分 -->
    <acTab class="ac-tab" @selectTab="selectTab"></acTab>
     <m-footer :selected="selected"></m-footer>
  </div>
</template>
<script>
    import AcTab from "base/ac-tab/ac-tab";
    import MFooter from 'business/mFooter/mFooter'
    
    export default {
      data() {
        return {
          selected: "activity",//设置导航栏选中栏目
          tValue:"",
          selTab:1

        }
      },
      components: {
          AcTab,
          MFooter
      },
      methods:{
        backBtnPre() {
          this.$router.go(-1);
        },
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
    .icon_back {
      display: block;
      width: 40px;
      height:46px;
      background: url("./backBtn.png") no-repeat center center;
      background-size: 100% 100%;
      position: absolute;
      top: 20px;
      left: 30px;
      z-index: 3;
    }
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
