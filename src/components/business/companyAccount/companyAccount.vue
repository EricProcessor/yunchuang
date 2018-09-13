<template>
  <div class="accountBox towLevelRouter">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <ul v-if="!account.isCompany">
      <li class="clearfix" @click="linkServiceHref">
        <i class="fl serviceBg"></i>
        <p class="fl">认证服务机构</p>
        <p class="fr validate" v-if="account.isUnverified">未验证</p>
        <p class="fr isAudit" v-if="account.isAudit">审核中</p>
        <p class="fr isPass" v-if="account.isPass">
          <span></span>已认证</p>
      </li>
      <li class="clearfix" @click="linkInvestHref">
        <i class="fl investBg"></i>
        <p class="fl">认证投资机构</p>
        <p class="fr validate" v-if="account.isUnverified">未验证</p>
        <p class="fr isAudit" v-if="account.isAudit">审核中</p>
        <p class="fr isPass" v-if="account.isPass">
          <span></span>已认证</p>
      </li>
    </ul>
    <ul v-if="!account.isCompany">
      <li class="clearfix" @click="linkTeacherHref">
        <i class="fl teacher"></i>
        <p class="fl">认证导师</p>
        <p class="fr validate" v-if="account.isUnverified">未验证</p>
        <p class="fr isAudit" v-if="account.isAudit">审核中</p>
        <p class="fr isPass" v-if="account.isPass">
          <span></span>已认证</p>
      </li>
      <li class="clearfix" @click="linkInvestPersonHref">
        <i class="fl investor"></i>
        <p class="fl">认证投资人</p>
        <p class="fr validate" v-if="account.isUnverified">未验证</p>
        <p class="fr isAudit" v-if="account.isAudit">审核中</p>
        <p class="fr isPass" v-if="account.isPass">
          <span></span>已认证</p>
      </li>
    </ul>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
export default {
  data() {
    return {
      account: {
        isCompany: false, //是否是公司账号认证
        isUnverified:true,//未验证
        isPass: false, //是否通过
        isAudit: false //审核中
      }
    };
  },
  created() {
    this.headerText = "账号认证"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  methods: {
    //根据验证状态
    linkServiceHref() {
      //认证服务机构
      this.$router.push("/setServiceIns");
    },
    linkInvestHref() {
      //认证投资机构
      this.$router.push("/setInvestment");
    },
    linkTeacherHref() {
      //认证导师
      this.$router.push("/setTeacher");
    },
    linkInvestPersonHref() {
      //认证投资人
      this.$router.push("/setInvestor");
    }
  },
  mounted(){

  },
  components: {
    IndexHeader
  }
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
  z-index: 200;
  background: rgb(245, 245, 245);
}
.accountBox {
  width: 100%;
  background: #eee;
  li {
    height: 120px;
    line-height: 120px;
    background: #fff;
    margin-top: 20px;
    i {
      display: inline-block;
      width: 54px;
      height: 48px;
      margin: 35px 32px;
    }
    .serviceBg {
      background: url("./fuwu.png") no-repeat center center;
      background-size: 100% 100%;
    }
    .investBg {
      background: url("./jigou.png") no-repeat center center;
      background-size: 100% 100%;
    }
    .teacher {
      height: 50px;
      background: url("./daoshi.png") no-repeat center center;
      background-size: 100% 100%;
    }
    .investor {
      /*投资人*/
      height: 54px;
      background: url("./touzir.png") no-repeat center center;
      background-size: 100% 100%;
    }
    p {
      font-size: 24px;
      color: #333;
      letter-spacing: 2px;
    }
    .validate {
      color: #f35828;
      margin: 0 22px;
    }
    .isAudit,
    .isPass {
      margin: 0 22px;
    }
    .isPass {
      color: #6ea1ff;
      span {
        display: inline-block;
        width: 40px;
        height: 32px;
        background: url("./yirenz.png") no-repeat center center;
        background-size: 100% 100%;
        margin: -5px 10px;
      }
    }
  }
}
</style>
