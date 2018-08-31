<template>
    <div class="registerBox">
        <header class="pos1">
            注册
            <span class="icon_back mintui mintui-back" @click="backBtnPre"></span>
            <span class="toLogin" @click="toLogin">去登陆</span>
        </header>
        <div class="registerList">
            <ul class="regTab clearfix">
                <li class="company fl" :class="{active:regInfo.isCompany}" @click="companyShow">企业账号注册</li>
                <li class="fl own" :class="{active:regInfo.isOwd}" @click="ownShow">个人账号注册</li>
            </ul>
            <div class="regInfoBox">
                <div class="div_li company_reg" :class="{active:regInfo.isCompany}" v-if="regInfo.isCompany">
                    <ol>
                        <li>
                            <div class="clearfix">
                                <p class="fl">组织机构代码
                                    <span>（必填）</span>
                                </p>
                                <p class="fr regTip">使用组织机构代码为登录账号</p>
                            </div>
                            <input type="text" v-model="companyData.MechanismCode"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">单位名称
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" v-model="companyData.companyName"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">联系人
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" v-model="companyData.registerName"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">手机号码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" v-model="companyData.registerPhone"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">电子邮箱
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" v-model="companyData.registerEmail"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">登录密码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="password" v-model="companyData.registerPwd"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">确认密码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="password" v-model="companyData.confirmPwd"></li>
                    </ol>
                </div>
                <div class="div_li own_reg" :class="{active:regInfo.isOwd}" v-if="regInfo.isOwd">
                    <ol>
                        <li>
                            <div class="clearfix">
                                <p class="fl">手机号码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" maxlength="11" v-model="ownData.ownPhone">
                            <span class="getCode" @click="getCode">获取验证码</span>
                        </li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">验证码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" maxlength="6" v-model="ownData.ownCode"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">电子邮箱
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" v-model="ownData.ownEamil"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">登录密码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="password" v-model="ownData.ownPwd"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">确认密码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="password" v-model="ownData.ownSurePwd"></li>
                    </ol>
                </div>
            </div>
            <p class="subBtn" @click="subListBtn">注册</p>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      regInfo: {
        isCompany: true,
        isOwd: false
      },
      companyData: {
        //企业注册信息
        MechanismCode: "", //机构代码
        companyName: "", //公司名称
        registerName: "", //联系人
        regiterPhone: "", //联系人手机号
        registerEmail: "", //联系邮箱
        registerPwd: "", //登录密码
        confirmPwd: "" //确认密码
      },
      ownData: {
        //个人注册信息
        ownPhone: "", //注册手机号
        ownCode: "", //验证码
        ownEamil: "", //个人邮箱
        ownPwd: "", //个人登录密码
        ownSurePwd: "" //确认个人密码
      }
    };
  },
  methods: {
    backBtnPre() {
      //返回上级
      this.$router.go(-1);
    },
    toLogin() {
      //去登陆页
      this.$router.push("/login");
    },
    companyShow() {
      //企业注册
      if (!this.regInfo.isCompany) {
        this.regInfo.isCompany = !this.regInfo.isCompany;
        this.regInfo.isOwd = !this.regInfo.isOwd;
      }
    },
    ownShow() {
      //个人注册
      if (!this.regInfo.isOwd) {
        this.regInfo.isOwd = !this.regInfo.isOwd;
        this.regInfo.isCompany = !this.regInfo.isCompany;
      }
    },
    getCode() {
      //获取验证码
      let code = "123456";
      alert(code);
    },
    subListBtn() {
      //注册
      if (this.regInfo.isCompany) {
        if (
          this.companyData.MechanismCode == "" &&
          this.companyData.companyName == "" &&
          this.companyData.registerName == "" &&
          this.companyData.regiterPhone == "" &&
          this.companyData.registerEmail == "" &&
          this.companyData.registerPwd == "" &&
          this.companyData.confirmPwd == ""
        ) {
          console.log("您输入的信息不完整！");
        } else if (this.companyData.MechanismCode == "") {
          console.log("组织代码机构不能为空！");
        } else if (this.companyData.companyName == "") {
          console.log("公司名称不能为空！");
        } else if (this.companyData.registerName == "") {
          console.log("联系人不能为空！");
        } else if (this.companyData.regiterPhone == "") {
          console.log("手机号码不能为空！");
        } else if (this.companyData.registerEmail == "") {
          console.log("联系邮箱不能为空！");
        } else if (this.companyData.registerPwd == "") {
          console.log("密码不能为空！");
        } else if (this.companyData.confirmPwd == "") {
          console.log("确认密码不能为空！");
        } else {
          console.log(this.companyData);
        }
      } else {
          debugger;
        if (
          this.ownData.ownPhone == "" &&
          this.ownData.ownCode == "" &&
          this.ownData.ownEamil == "" &&
          this.ownData.ownPwd == "" &&
          this.ownData.ownSurePwd == ""
        ) {
          alert("信息不完整！");
        } else if (this.ownData.ownPhone == "") {
          alert("手机号不能为空！");
        } else if (this.ownData.ownCode == "") {
          alert("验证码不能为空！");
        } else if (this.ownData.ownEamil == "") {
          alert("邮箱不能为空！");
        } else if (this.ownData.ownPwd == "") {
          alert("密码不能为空！");
        } else if (this.ownData.ownSurePwd == "") {
          alert("确认密码不能为空！");
        }else{
            console.log(this.ownData);
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
.registerBox {
  header {
    width: 100%;
    height: 88px;
    background: #253350;
    font-size: 38px;
    line-height: 88px;
    color: #fff;
    letter-spacing: 4px;
    text-align: center;
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
    .toLogin {
      font-size: 24px;
      letter-spacing: 2px;
      color: #fff;
      position: absolute;
      top: 0;
      right: 22px;
      z-index: 3;
    }
  }
  .registerList {
    margin-top: 88px;
    .regTab {
      background: #fff;
      li {
        width: calc(100% / 2);
        height: 88px;
        line-height: 88px;
        font-size: 30px;
        color: #666;
        text-align: center;
        box-sizing: border-box;
      }
      li.active {
        color: #6ea1ff;
        border-bottom: 4px solid #6ea1ff;
      }
    }
    .regInfoBox {
      padding: 0 30px;
      .div_li {
        display: none;
        li {
          margin-top: 30px;
          p {
            font-size: 24px;
            color: #666;
            padding-left: 2px;
            span {
              font-size: 20px;
              color: #f35828;
            }
          }
          p.regTip {
            font-size: 20px;
            letter-spacing: 2px;
            color: #999;
          }
          input {
            width: 96%;
            height: 61px;
            margin-top: 9px;
            background: #ffffff;
            border-radius: 6px;
            border: 1px solid#e0e0e0;
            padding: 0 2%;
          }
        }
      }
      .div_li.active {
        display: block;
      }
      .own_reg {
        li {
          position: relative;
          .getCode {
            display: inline-block;
            padding: 20px 30px;
            background: #253350;
            color: #fff;
            border-radius: 4px;
            position: absolute;
            top: 35px;
            right: -4px;
            z-index: 2;
          }
        }
      }
    }
    .subBtn {
      width: 100%;
      height: 88px;
      line-height: 88px;
      text-align: center;
      background: #6ea1ff;
      letter-spacing: 3px;
      font-size: 30px;
      color: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      z-index: 3;
      border: none;
    }
  }
}
</style>
