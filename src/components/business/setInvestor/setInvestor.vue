<template>
    <div class="setInvestor">
        <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
        <p class="top clearfix">
            <span class=" fl">带*号项为必填项，请务必如实填写</span>
            <i class="fr"></i>
        </p>
    </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
export default {
  created() {
    this.headerText = "认证投资人"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  components: {
    IndexHeader
  }
};
</script>
<style lang="less" scoped>
.setInvestor {
  .top {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #feffc7;
    span {
      color: #666;
      font-size: #666;
      padding: 0 28px;
    }
    i {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: #f00;
      margin: 18px 20px;
    }
  }
}
</style>
