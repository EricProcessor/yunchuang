<template>
  <div class="myInterview towLevelRouter">
    <!-- header -->
    <header class="top pos1">
      <a href="#/" class="page-back router-link-active">
        <i class="mintui mintui-back"></i>
      </a>
      <span>我的活动</span>
    </header>
    <ul class="myIntCon">
      <li>
        <div class="myIntConImg">
          <img src="" alt="">
        </div>
        <div class="myIntConInf">
          <h3>2018中国创业武林大会</h3>
          <span>2018-07-17 至 08-21</span>
        </div>
        <div class="myIntState">已结束</div>
      </li>
      <li>
        <div class="myIntConImg">
          <img src="" alt="">
        </div>
        <div class="myIntConInf">
          <h3>2018中国创业武林大会</h3>
          <span>2018-07-17 至 08-21</span>
        </div>
        <div class="myIntState start">进行中</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
// 二级路由定位
.towLevelRouter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgb(245, 245, 245);
}
// 头部样式
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

  .mintui-back {
    position: absolute;
    left: 0px;
  }
  .mintui-back:before {
    color: #fff;
    padding-left: 0.32rem;
    font-size: 0.64rem;
    position: relative;
    top: 6px;
  }
}
//我的活动内容
.myIntCon {
  margin-top: 88px;
  overflow: hidden;
  li {
    width: 750px;
    height: 180px;
    background-color: #fff;
    margin-top: 20px;
    display: flex;
    align-items: center;
    .myIntConImg {
      width: 120px;
      height: 120px;
      background-color: #cad3dc;
      margin: 0 30px;
    }
    .myIntConInf {
      h3 {
        font-size: 30px;
        height: 48px;
        // line-height: 60px;
        color: #333333;
        letter-spacing: 3px;
      }
      span {
        font-size: 20px;
        letter-spacing: 2px;
        color: #999999;
      }
    }
    .myIntState {
      position: absolute;
      right: 0px;
      width: 120px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #999999;
      color: #fff;
      border-radius: 25px 0 0px 25px;
    }
    .start {
      background-color: #f35828;
    }
  }
}
</style>
