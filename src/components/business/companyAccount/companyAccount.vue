<template>
    <div class="accountBox">
        <index-header :text="headerText"></index-header>
        <ul>
            <li class="clearfix">
                <i class="fl"></i>
                <p class="fl ">认证服务机构</p>
                <p class="fr validate">未验证</p>
            </li>
            <li class="clearfix">
                <i class="fl"></i>
                <p class="fl">认证投资机构</p>
                <p class="fr validate">未验证</p>
            </li>
        </ul>
    </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
export default {
  created() {
    this.headerText = "账号认证"; //设置头部显示导航内容
  },
  methods: {},
  components: {
    IndexHeader
  }
};
</script>
<style lang="less" scoped>
.accountBox {
  width: 100%;
  background: #eee;
  li {
    height: 120px;
    line-height: 120px;
    background: #fff;
    margin-top: 20px;
    i{
        display: inline-block;
        width: 54px;
        height: 48px;
        margin:35px 32px;
        background: #f00;
    }
    p{
        font-size: 24px;
        color: #333;
        letter-spacing: 2px;
    }
    .validate{
        color: #f35828;
        margin: 0 22px;
    }
  }
}
</style>
