<template>
  <div class="screen">
    <!-- header部分 -->
    <header class="screen-title">筛选结果
      <span class="icon_back" @click="backBtnPre"></span> 
      <span class="screen-result" @click="activeScreen">筛选</span>
    </header>
    <ul>
      <li v-for="(n,v) in 4" :key="v"  @click="activeDetail">
        <div class="screen-con">
          <p class="pOne">2018中国创业武林大会</p>
          <p class="pTwo">●紫竹院路29号北京香格里拉饭店</p>
        </div>
        <div class="screen-img"><img src="/static/images/ac-pic1.jpg" alt=""></div>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        methods: {
          backBtnPre() {
            this.$router.go(-1);
          },
          activeDetail() {
            this.$router.push('/activeDetail');
          },
          activeScreen(){
            this.$router.push('/activeScreen');
          }
          
      }
    };
</script>
<style lang="less" scoped>
.screen{
  background: #f2f2f2;
  .screen-title {
    position: relative;
    width: 100%;
    height: 86px;
    text-align: center;
    line-height: 86px;
    font-size: 30px;
    color: #fff;
    background: #253350;
    position: fixed;
    top: 0;
    left: 0;
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
    .screen-result{
      height: 86px;
      line-height: 86px;
      position: absolute;
      right:20px;
      font-size: 24px;;
      color: #fff;
    }
  }
  ul{
    display: flex;
    flex-direction: column;
    margin-top: 88px;
    li{
      width: 96%;
      height:170px;
      margin-left:2%;
      margin-top:10px;
      background: #fff;
      display: flex;
      .screen-con{
        width: 60%;
        height:170px;
        p{
          height:75px;
          line-height: 75px;
          margin-left: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
        .pOne{
          font-size: 29px;
        }
        .pTwo{
          font-size: 12px;
          color: #999;
        }
      }
      .screen-img{
        width: 40%;
        height:170px;
        img{
          width: 100%;
          height:100%;
        }
      }
    } 
  }
  
}
</style>
