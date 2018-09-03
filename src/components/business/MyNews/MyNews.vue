<template>
  <div class="towLevelRouter">
    <!-- header -->
    <header class="top pos1">
      <a href="#/" class="page-back router-link-active">
        <i class="mintui mintui-back"></i>
      </a>
      <span>我的消息</span>
    </header>
    <ul class="myIntCon">
      <li>
          <div class="myIntNew">
            <span>会员审核通过通知</span>
            <span>2018-09-12 00:00:00</span>
          </div>
          <p class="myDelate">删除</p>
          <!-- <button class="mint-button mint-button--default mint-button--large">
            <label class="mint-button-text">打开 confirm 提示框</label>
          </button> -->
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  methods: {}
};
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
    top: -2px;
  }
  .mintui-back:before {
    color: #fff;
    padding-left: 0.32rem;
    font-size: 0.64rem;
    position: relative;
    top: 6px;
  }
}
//我的项目内容区域
.myIntCon {
  margin-top: 88px;
  // overflow: hidden;
  overflow-x: scroll;
  li {
    background-color: #fff;
    margin-top: 20px;
    width: 870px;
    height: 88px;
    .myIntNew {
      width: 690px;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      height: 88px;
      line-height: 88px;
      float: left;
    }
    .myDelate {
      float: left;
      width: 119px;
      height: 88px;
      line-height: 88px;
      color: #fff;
      text-align: center;
      background-color: #f35828;
    }
  }
}
</style>