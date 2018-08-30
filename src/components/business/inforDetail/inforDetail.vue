<template>
  <div>
    <!-- header -->
    <header class="topDetail pos1">资讯详情
      <span class="icon_back mintui mintui-back" @click="backBtnPre"></span>
      <span class="icon_search" @click="linkSearch"></span>
    </header>
    <!-- 资讯信息 -->
    <div class="detailBox">
      <div class="titleInfoBox">
        <div class="detailTile">京东科统园区企业惊艳亮相，多领域 “开花”尽显风采</div>
        <p class="detailFrom">东创互联-微信公众号</p>
        <div class="clearfix">
          <div class="fl detailTime">2018-08-08 14:33</div>
          <div class="fr">
            <p class="clearfix readCount">
              <span class="fl icon_num"></span>
              <span class="fl count">123</span>
            </p>
          </div>
        </div>
      </div>
      <div class="textInfoBox">
        <p class="detailText">
          6月27日，由京东云电商创新中心、腾讯众创空间（西安）及沣创 星工厂联合主办的第一届“万象·共融科统企业博览会”在中俄丝 路创新园成功举办，来自人工智能、生物医药、电商、文创等领 域的18家园区企业在本次活动中亮相，揭开了“硬实力科统”的 神秘面纱。
        </p>
        <p class="showImg">
          <img src="./inforDetail_1.jpg" alt="">
        </p>
        <p class="detailText">
          6月27日，由京东云电商创新中心、腾讯众创空间（西安）及沣创 星工厂联合主办的第一届“万象·共融科统企业博览会”在中俄丝 路创新园成功举办，来自人工智能、生物医药、电商、文创等领 域的18家园区企业在本次活动中亮相，揭开了“硬实力科统”的 神秘面纱。
        </p>
        <p class="showImg">
          <img src="./inforDetail_1.jpg" alt="">
        </p>
        <p class="detailText">
          6月27日，由京东云电商创新中心、腾讯众创空间（西安）及沣创 星工厂联合主办的第一届“万象·共融科统企业博览会”在中俄丝 路创新园成功举办，来自人工智能、生物医药、电商、文创等领 域的18家园区企业在本次活动中亮相，揭开了“硬实力科统”的 神秘面纱。
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    backBtnPre() {
      this.$router.go(-1);
    },
    linkSearch() {}
  }
};
</script>
<style lang="less" scoped>
.topDetail {
  width: 100%;
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 36px;
  color: #fff;
  letter-spacing: 4px;
  background: #253350;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  .icon_back {
    display: block;
    width: 40px;
    height: 46px;
    color: #fff;
    font-size: 40px;
    position: absolute;
    top: 5px;
    left: 30px;
    z-index: 3;
  }
  .icon_search {
    display: block;
    width: 36px;
    height: 36px;
    background: url("../information/search.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 26px;
    right: 24px;
    z-index: 3;
  }
}
.detailBox {
  margin-top: 88px;
  padding: 0 32px;
  .titleInfoBox {
    .detailTile {
      width: 100%;
      padding: 40px 0;
      font-size: 36px;
      font-stretch: normal;
      line-height: 60px;
      letter-spacing: 4px;
      color: #333;
    }
    .detailFrom {
      font-size: 20px;
      line-height: 60px;
      letter-spacing: 2px;
      color: #333;
    }
    .detailTime {
      font-size: 20px;
      color: #999;
      line-height: 40px;
    }
    .readCount {
      .icon_num {
        display: block;
        width: 36px;
        height: 30px;
        background: url("../inforChildList/readNum.png") no-repeat center center;
        background-size: 100% 100%;
      }
      .count {
        font-size: 20px;
        color: #999;
        line-height: 30px;
        padding-left: 2px;
      }
    }
  }
  .textInfoBox {
    margin-top: 60px;
    .detailText {
      font-size: 24px;
      line-height: 44px;
    }
    .showImg {
      width: 100%;
      height: 458px;
      margin: 30px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
