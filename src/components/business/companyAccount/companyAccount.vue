<template>
  <div class="accountBox towLevelRouter">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <ul v-if="account.isCompany">
      <li class="clearfix" @click="linkServiceHref">
        <i class="fl serviceBg"></i>
        <p class="fl">认证服务机构</p>
        <p class="fr validate" v-if="account.isUnverified">未验证</p>
        <p class="fr isAudit" v-if="account.isAudit">审核中</p>
        <p class="fr isErr" v-if="account.error">审核失败</p>
        <p class="fr isPass" v-if="account.isPass">
          <span></span>已认证</p>
      </li>
      <li class="clearfix" @click="linkInvestHref">
        <i class="fl investBg"></i>
        <p class="fl">认证投资机构</p>
        <p class="fr validate" v-if="account.isUnverified2">未验证</p>
        <p class="fr isAudit" v-if="account.isAudit2">审核中</p>
        <p class="fr isErr" v-if="account.error2">审核失败</p>
        <p class="fr isPass" v-if="account.isPass2">
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
        isUnverified: true, //未验证
        isPass: false, //是否通过
        isAudit: false, //审核中
        isUnverified2: true, //未验证
        isPass2: false, //是否通过
        isAudit2: false, //审核中
        error: false,
        error2: false
      },
      allowNext: ""
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
      if (
        this.allowNext.fm_type == "F" &&
        (this.allowNext.status == "M" || this.allowNext.status == "Y")
      ) {
        return;
      } else {
        this.$router.push("/setServiceIns");
      }
    },
    linkInvestHref() {
      //认证投资机构
      if (
        this.allowNext.fm_type == "T" &&
        (this.allowNext.status == "M" || this.allowNext.status == "Y")
      ) {
        return;
      } else {
        this.$router.push("/setInvestment");
      }
    },
    linkTeacherHref() {
      //认证导师
      if (
        this.allowNext.fm_type == "Y" &&
        (this.allowNext.status == "M" || this.allowNext.status == "Y")
      ) {
        return;
      } else {
        this.$router.push("/setTeacher");
      }
    },
    linkInvestPersonHref() {
      //认证投资人
      if (
        this.allowNext.fm_type == "R" &&
        (this.allowNext.status == "M" || this.allowNext.status == "Y")
      ) {
        return;
      } else {
        this.$router.push("/setInvestor");
      }
    },
    getServiceStatus() {
      let status_url = "/frontinvestauthenticationpage-checkstatus";
      this.axios.post(status_url).then(res => {
        this.allowNext = res.data;
        // F 服务机构  T 投资机构 D 认证导师 R 认证投资人
        //状态  Y 已验证 N 审核失败 M 待审核 默认 未验证
        if (res.data.fm_type == "F") {
          if (res.data.status == "Y") {
            this.account.isPass = true;
            this.account.isUnverified = false;
          } else if (res.data.status == "N") {
            this.account.error = true;
            this.account.isUnverified = false;
          } else if (res.data.status == "M") {
            this.account.isAudit = true;
            this.account.isUnverified = false;
          }
        } else if (res.data.fm_type == "T") {
          if (res.data.status == "Y") {
            this.account.isPass2 = true;
            this.account.isUnverified2 = false;
          } else if (res.data.status == "N") {
            this.account.error2 = true;
            this.account.isUnverified2 = false;
          } else if (res.data.status == "M") {
            this.account.isAudit2 = true;
            this.account.isUnverified2 = false;
          }
        } else if (res.data.fm_type == "D") {
          if (res.data.status == "Y") {
            this.account.isPass = true;
            this.account.isUnverified = false;
          } else if (res.data.status == "N") {
            this.account.error = true;
            this.account.isUnverified = false;
          } else if (res.data.status == "M") {
            this.account.isAudit = true;
            this.account.isUnverified = false;
          }
        } else if (res.data.fm_type == "R") {
          if (res.data.status == "Y") {
            this.account.isPass2 = true;
            this.account.isUnverified2 = false;
          } else if (res.data.status == "N") {
            this.account.error2 = true;
            this.account.isUnverified2 = false;
          } else if (res.data.status == "M") {
            this.account.isAudit2 = true;
            this.account.isUnverified2 = false;
          }
        }
      });
    }
  },
  mounted() {
    this.getServiceStatus();
    let isOwn = localStorage.getItem("isOwn");
    if (isOwn == "Q") {
      this.account.isCompany = true;
    } else {
      this.account.isCompany = false;
    }
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
    .isErr {
      color: #f00;
    }
    .isErr,
    .isAudit,
    .isPass {
      margin: 0 22px;
    }
    .isPass {
      color: #6ea1ff;
      span {
        display: inline-block;
        width: 32px;
        height: 30px;
        background: url("./yirenz.png") no-repeat center center;
        background-size: 100% 100%;
        margin: -5px 10px;
      }
    }
  }
}
</style>
