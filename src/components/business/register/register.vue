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
                            <input type="text" placeholder="请输入组织机构代码" v-model="companyData.MechanismCode"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">单位名称
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" placeholder="请输入单位名称" v-model="companyData.companyName"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">联系人
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" placeholder="请输入联系人" v-model="companyData.registerName"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">手机号码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" placeholder="请输入手机号码" v-model="companyData.registerPhone" maxlength="11"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">电子邮箱
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" placeholder="请输入电子邮箱" v-model="companyData.registerEmail"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">登录密码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="password" placeholder="密码长度8-16位，由字母数字组成，区分大小写" v-model="companyData.registerPwd" minlength="8" maxlength="16"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">确认密码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="password" placeholder="再次输入登录密码" v-model="companyData.confirmPwd" minlength="8" maxlength="16"></li>
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
                            <input type="text" placeholder="请输入手机号码" maxlength="11" v-model="ownData.ownPhone">
                            <span class="getCode" v-show="regInfo.timeMsg" @click="getCode">获取验证码</span>
                            <span class="getCode codeTime" v-show="!regInfo.timeMsg">{{regInfo.count}}秒后重新获取</span>
                        </li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">验证码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" placeholder="请输入6位手机验证码" maxlength="6" v-model="ownData.ownCode"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">电子邮箱
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="text" placeholder="请输入电子邮箱" v-model="ownData.ownEamil"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">登录密码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="password" placeholder="密码长度8-16位，由字母数字组成，区分大小写" v-model="ownData.ownPwd"></li>
                        <li>
                            <div class="clearfix">
                                <p class="fl">确认密码
                                    <span>（必填）</span>
                                </p>
                            </div>
                            <input type="password" placeholder="再次输入登录密码" v-model="ownData.ownSurePwd"></li>
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
        isOwd: false,
        count: 60,
        timer: null,
        timeMsg: true
      },
      companyData: {
        //企业注册信息
        MechanismCode: "", //机构代码
        companyName: "", //公司名称
        registerName: "", //联系人
        registerPhone: "", //联系人手机号
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
      //   debugger;
      if (!this.regInfo.timer) {
        this.regInfo.timeMsg = false;
        this.regInfo.timer = setInterval(() => {
          if (this.regInfo.count > 0 && this.regInfo.count <= 60) {
            this.regInfo.count--;
          } else {
            this.regInfo.timeMsg = true;
            clearInterval(this.regInfo.timer);
            this.regInfo.timer = null;
          }
        }, 1000);
      }
    },
    subListBtn() {
      //点击验证并提交注册信息
      let isPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/, //手机号正则
        // isTel = /^([0-9]{3,4}-)?[0-9]{7,8}$/, //固话正则
        isEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/, //邮箱正则
        isPWd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/; //密码正则
      //注册
      if (this.regInfo.isCompany) {
        if (
          this.companyData.MechanismCode == "" &&
          this.companyData.companyName == "" &&
          this.companyData.registerName == "" &&
          this.companyData.registerPhone == "" &&
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
        } else if (this.companyData.registerPhone == "") {
          console.log("手机号码不能为空！");
        } else if (this.companyData.registerEmail == "") {
          console.log("联系邮箱不能为空！");
        } else if (this.companyData.registerPwd == "") {
          console.log("密码不能为空！");
        } else if (this.companyData.confirmPwd == "") {
          console.log("确认密码不能为空！");
        } else {
          if (
            isPhone.test(this.companyData.registerPhone) &&
            isEmail.test(this.companyData.registerEmail) &&
            this.companyData.registerPwd == this.companyData.confirmPwd &&
            isPwd.test(this.companyData.registerPwd)
          ) {
            console.log(this.companyData);
          } else if (!isPhone.test(this.companyData.registerPhone)) {
            console.log("手机号格式不正确！");
          } else if (!isEmail.test(this.companyData.registerEmail)) {
            console.log("邮箱格式不正确！");
          } else if (!isPWd(this.companyData.registerPwd)) {
            console.log("密码格式不正确！");
          } else if (
            this.companyData.registerPwd != this.companyData.confirmPwd
          ) {
            console.log("两次输入的密码不一致！");
          }
        }
      } else {
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
        } else {
          if (
            isPhone.test(this.ownData.ownPhone) &&
            isEmail.test(this.ownData.ownEamil) &&
            isPWd.test(this.ownData.ownPwd) &&
            this.ownData.ownPwd == this.ownData.ownSurePwd
          ) {
            console.log(this.ownData);
          } else if (!isPhone.test(this.ownData.ownPhone)) {
            console.log("手机号格式不正确！");
          } else if (!isPhone.test(this.ownData.ownEamil)) {
            console.log("邮箱格式不正确！");
          } else if (!isPhone.test(this.ownData.ownPwd)) {
            console.log("密码格式不正确！");
          } else if (this.ownData.ownPwd != this.ownData.ownSurePwd) {
            console.log("两次输如的密码不一致！");
          }
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
            width: 180px;
            display: inline-block;
            padding: 22px 2px;
            background: #253350;
            color: #fff;
            text-align: center;
            border-radius: 4px;
            position: absolute;
            top: 30px;
            right: -4px;
            z-index: 2;
          }
          .codeTime {
            background: #ccc;
            color: #666;
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
