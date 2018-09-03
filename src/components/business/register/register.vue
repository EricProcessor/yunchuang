<template>
  <div class="registerBox">
    <div class="noSucc" v-if="!regInfo.isRegSucc">
      <header class="pos1">
        注册
        <span class="icon_back mintui mintui-back" @click="backBtnPre"></span>
        <span class="toLogin" @click="toLogin">去登陆</span>
      </header>
      <div class="top_div"></div>
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
                  <p class="fl">手机号码
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" placeholder="请输入手机号码" v-model="companyData.registerPhone.val" maxlength="11">
                <div class="tipInfo fr" v-show="companyData.registerPhone.isRight">
                  <i></i>
                  <span>请输入正确的手机号码</span>
                </div>
                <div class="tipInfo fr" v-show="companyData.registerPhone.isEmpty">
                  <i></i>
                  <span>手机号码不能为空</span>
                </div>
                <div class="tipInfo fr" v-show="companyData.registerPhone.isExist">
                  <i></i>
                  <span>该手机号码已注册</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">组织机构代码
                    <span>（必填）</span>
                  </p>
                  <p class="fr regTip">使用组织机构代码为登录账号</p>
                </div>
                <input type="text" placeholder="请输入组织机构代码" v-model="companyData.MechanismCode.val">
                <div class="tipInfo fr" v-show="companyData.MechanismCode.isRight">
                  <i></i>
                  <span>请输入正确的机构代码格式</span>
                </div>
                <div class="tipInfo fr" v-show="companyData.MechanismCode.isEmpty">
                  <i></i>
                  <span>请输入正确的机构代码格式</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">单位名称
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" placeholder="请输入单位名称" v-model="companyData.companyName.val">
                <div class="tipInfo fr" v-show="companyData.companyName.isEmpty">
                  <i></i>
                  <span>单位名称不能为空</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">联系人
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" placeholder="请输入联系人" v-model="companyData.registerName.val">
                <div class="tipInfo fr" v-show="companyData.registerName.isEmpty">
                  <i></i>
                  <span>联系人不能为空</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">电子邮箱
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" placeholder="请输入电子邮箱" v-model="companyData.registerEmail.val">
                <div class="tipInfo fr" v-show="companyData.registerEmail.isRight">
                  <i></i>
                  <span>请输入正确的邮箱格式</span>
                </div>
                <div class="tipInfo fr" v-show="companyData.registerEmail.isEmpty">
                  <i></i>
                  <span>邮箱不能为空</span>
                </div>
                <div class="tipInfo fr" v-show="companyData.registerEmail.isExist">
                  <i></i>
                  <span>该邮箱已注册</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">登录密码
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="password" placeholder="密码长度6-21位，由字母数字组成，区分大小写" v-model="companyData.registerPwd.val">
                <div class="tipInfo fr" v-show="companyData.registerPwd.isRight">
                  <i></i>
                  <span>请输入正确的密码格式</span>
                </div>
                <div class="tipInfo fr" v-show="companyData.registerPwd.isEmpty">
                  <i></i>
                  <span>密码不能为空</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">确认密码
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="password" placeholder="再次输入登录密码" v-model="companyData.confirmPwd.val">
                <div class="tipInfo fr" v-show="companyData.confirmPwd.isRight">
                  <i></i>
                  <span>两次输入的密码不一致</span>
                </div>
                <div class="tipInfo fr" v-show="companyData.confirmPwd.isEmpty">
                  <i></i>
                  <span>确认密码不能为空</span>
                </div>
              </li>
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
                <input type="text" class="input_tel" placeholder="请输入手机号码" maxlength="11" v-model="ownData.ownPhone.val">
                <span class="getCode" v-show="regInfo.timeMsg" @click="getCode">获取验证码</span>
                <span class="getCode codeTime" v-show="!regInfo.timeMsg">{{regInfo.count}}秒后重新获取</span>
                <div class="tipInfo fr" v-show="ownData.ownPhone.isRight">
                  <i></i>
                  <span>请输入正确的手机号码</span>
                </div>
                <div class="tipInfo fr" v-show="ownData.ownPhone.isEmpty">
                  <i></i>
                  <span>手机号码不能为空</span>
                </div>
                <div class="tipInfo fr" v-show="ownData.ownPhone.isExist">
                  <i></i>
                  <span>该手机号码已注册
                    </span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">用户名
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" placeholder="请输入用户名" v-model="ownData.ownName.val">
                <div class="tipInfo fr" v-show="ownData.ownName.isEmpty">
                  <i></i>
                  <span>用户名不能为空</span>
                </div>
                <div class="tipInfo fr" v-show="ownData.ownName.isExist">
                  <i></i>
                  <span>用户名已存在</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">密码
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="password" placeholder="密码长度6-21位，由字母数字组成，区分大小写" v-model="ownData.ownPwd.val">
                <div class="tipInfo fr" v-show="ownData.ownPwd.isRight">
                  <i></i>
                  <span>请输入正确的密码格式</span>
                </div>
                <div class="tipInfo fr" v-show="ownData.ownPwd.isEmpty">
                  <i></i>
                  <span>密码不能为空</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">确认密码
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="password" placeholder="再次输入登录密码" v-model="ownData.ownSurePwd.val">
                <div class="tipInfo fr" v-show="ownData.ownSurePwd.isRight">
                  <i></i>
                  <span>两次输入的密码不一致</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">验证码
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" placeholder="请输入6位手机验证码" v-model="ownData.ownCode.val">
                <div class="tipInfo fr" v-show="ownData.ownCode.isRight">
                  <i></i>
                  <span>请输入正确的验证码</span>
                </div>
                <div class="tipInfo fr" v-show="ownData.ownCode.isEmpty">
                  <i></i>
                  <span>验证码不能为空</span>
                </div>

              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">电子邮箱
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" placeholder="请输入电子邮箱" v-model="ownData.ownEmail.val">
                <div class="tipInfo fr" v-show="ownData.ownEmail.isRight">
                  <i></i>
                  <span>请输入正确的邮箱格式</span>
                </div>
                <div class="tipInfo fr" v-show="ownData.ownEmail.isEmpty">
                  <i></i>
                  <span>邮箱不能为空</span>
                </div>
                <div class="tipInfo fr" v-show="ownData.ownEmail.isExist">
                  <i></i>
                  <span>该邮箱已注册</span>
                </div>
              </li>

            </ol>
          </div>
        </div>
        <p class="subBtn" @click="subListBtn">注册</p>
      </div>
    </div>
    <div class="regSucc" v-if="regInfo.isRegSucc">
      <header>注册</header>
      <div class="top_div"></div>
      <div class="succBox">
        <p class="succImg">
          <img src="./succSure.png" alt="">
        </p>
        <p class="succTxt">注册成功</p>
        <p class="succTime">
          <span>{{regInfo.isTime}}</span>秒后自动跳转到“我的”页面</p>
        <router-link class="succBtn" to="/" tag="p">跳过</router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      regInfo: {
        isCompany: true, //企业注册
        isOwd: false, //个人注册
        count: 60, //验证码重新获取倒计时
        timer: null, //定时器
        timeMsg: true, //是否发送验证码
        isRegSucc: false, //是否注册成功
        isTime: 5 //跳转倒计时
      },
      companyData: {
        //企业注册信息
        // isRight 是否格式正确 isEmpty 是否为空 isExist 是否存在
        MechanismCode: {
          //机构代码
          val: "",
          isRight: false,
          isEmpty: false,
          isExist: false
        },
        companyName: {
          //单位名称
          val: "",
          isRight: false,
          isEmpty: false,
          isExist: false
        },
        registerName: {
          //联系人
          val: "",
          isRight: false,
          isEmpty: false,
          isExist: false
        },
        registerPhone: {
          //联系手机号
          val: "",
          isRight: false,
          isEmpty: false,
          isExist: false
        },
        registerEmail: {
          //联系邮箱
          val: "",
          isRight: false,
          isEmpty: false,
          isExist: false
        },
        registerPwd: {
          //登录密码
          val: "",
          isRight: false,
          isEmpty: false,
          isExist: false
        },
        confirmPwd: { val: "", isRight: false, isEmpty: false, isExist: false } //确认密码
      },
      ownData: {
        //个人注册信息
        ownPhone: { val: "", isRight: false, isEmpty: false, isExist: false }, //注册手机号
        ownCode: { val: "", isRight: false, isEmpty: false, isExist: false }, //验证码
        ownName: { val: "", isRight: false, isEmpty: false, isExist: false }, //用户名
        ownEmail: { val: "", isRight: false, isEmpty: false, isExist: false }, //个人邮箱
        ownPwd: { val: "", isRight: false, isEmpty: false, isExist: false }, //个人登录密码
        ownSurePwd: { val: "", isRight: false, isEmpty: false, isExist: false } //确认个人密码
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
    isMechanismCode(mecCode) {
      //机构代码验证
      let isMechanismCode = /^[a-zA-Z0-9]{8}-[a-zA-Z0-9]$/;
      return isMechanismCode(mecCode);
    },
    isPhone(phone) {
      //手机号验证
      let isPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      return isPhone.test(phone);
    },
    isEmail(email) {
      //邮箱验证
      let isEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //邮箱正则
      return isEmail(email);
    },
    isPwd(pwd) {
      //密码验证
      let isPWd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
      return isPwd(pwd);
    },
    subListBtn() {
      //注册
      if (this.regInfo.isCompany) {
        if (
          this.companyData.MechanismCode.val == "" &&
          this.companyData.companyName.val == "" &&
          this.companyData.registerName.val == "" &&
          this.companyData.registerPhone.val == "" &&
          this.companyData.registerEmail.val == "" &&
          this.companyData.registerPwd.val == "" &&
          this.companyData.confirmPwd.val == ""
        ) {
          console.log("您输入的信息不完整！");
        } else if (this.companyData.MechanismCode.val == "") {
          console.log("组织代码机构不能为空！");
        } else if (this.companyData.companyName.val == "") {
          console.log("公司名称不能为空！");
        } else if (this.companyData.registerName.val == "") {
          console.log("联系人不能为空！");
        } else if (this.companyData.registerPhone.val == "") {
          console.log("手机号码不能为空！");
        } else if (this.companyData.registerEmail.val == "") {
          console.log("联系邮箱不能为空！");
        } else if (this.companyData.registerPwd.val == "") {
          console.log("密码不能为空！");
        } else if (this.companyData.confirmPwd.val == "") {
          console.log("确认密码不能为空！");
        } else {
          if (
            isPhone(this.companyData.registerPhone.val) &&
            isEmail(this.companyData.registerEmail.val) &&
            this.companyData.registerPwd.val ==
              this.companyData.confirmPwd.val &&
            isPwd(this.companyData.registerPwd.val)
          ) {
            console.log(this.companyData);
            this.regInfo.isRegSucc = !this.regInfo.isRegSucc; //显示注册成功
          } else if (!isPhone(this.companyData.registerPhone.val)) {
            console.log("手机号格式不正确！");
          } else if (!isEmail(this.companyData.registerEmail.val)) {
            console.log("邮箱格式不正确！");
          } else if (!isPWd(this.companyData.registerPwd.val)) {
            console.log("密码格式不正确！");
          } else if (
            this.companyData.registerPwd.val != this.companyData.confirmPwd.val
          ) {
            console.log("两次输入的密码不一致！");
          }
        }
      } else {
        if (
          this.ownData.ownPhone.val == "" &&
          this.ownData.ownCode.val == "" &&
          this.ownData.ownEmail.val == "" &&
          this.ownData.ownPwd.val == "" &&
          this.ownData.ownSurePwd.val == ""
        ) {
          alert("信息不完整！");
        } else if (this.ownData.ownPhone.val == "") {
          alert("手机号不能为空！");
        } else if (this.ownData.ownCode.val == "") {
          alert("验证码不能为空！");
        } else if (this.ownData.ownEmail.val == "") {
          alert("邮箱不能为空！");
        } else if (this.ownData.ownPwd.val == "") {
          alert("密码不能为空！");
        } else if (this.ownData.ownSurePwd.val == "") {
          alert("确认密码不能为空！");
        } else {
          if (
            isPhone(this.ownData.ownPhone) &&
            isEmail(this.ownData.ownEmail) &&
            isPWd(this.ownData.ownPwd) &&
            this.ownData.ownPwd == this.ownData.ownSurePwd
          ) {
            console.log(this.ownData);
            this.regInfo.isRegSucc = !this.regInfo.isRegSucc;
          } else if (!isPhone(this.ownData.ownPhone.val)) {
            console.log("手机号格式不正确！");
          } else if (!isEmail(this.ownData.ownEmail.val)) {
            console.log("邮箱格式不正确！");
          } else if (!isPhone(this.ownData.ownPwd.val)) {
            console.log("密码格式不正确！");
          } else if (this.ownData.ownPwd.val != this.ownData.ownSurePwd.val) {
            console.log("两次输如的密码不一致！");
          }
        }
      }
    },
    cutDownTime() {
      if (this.regInfo.isRegSucc == true) {
        this.regInfo.isTime--;
        if (this.regInfo.isTime == 0) {
          this.$router.push("/mine");
          this.regInfo.isTime = 5;
          this.regInfo.isRegSucc = false;
        }
      }
    }
  },
  mounted() {
    setInterval(this.cutDownTime, 1000);
  },
  beforeDestroy() {
    //销毁定时器
    clearInterval(this.cutDownTime);
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
          margin-top: 50px;
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
            width: 670px;
            height: 61px;
            margin-top: 9px;
            background: #ffffff;
            border-radius: 6px;
            border: 1px solid#e0e0e0;
            padding: 0 10px;
            font-size: 24px;
            color: #333;
          }
          input:focus {
            border: solid 1px #f35828;
          }
          .tipInfo {
            margin-top: 20px;
            span {
              font-size: 20px;
              color: #f35828;
            }
            i {
              display: inline-block;
              width: 20px;
              height: 20px;
              background: url("./warning.png") no-repeat center center;
              background-size: 100% 100%;
              margin: 0 4px;
            }
          }
        }
        li:first-child {
          margin-top: 30px;
        }
      }
      .div_li.active {
        display: block;
      }
      .own_reg {
        li {
          position: relative;
          .getCode {
            width: 200px;
            display: inline-block;
            line-height: 66px;
            background: #6ea1ff;
            color: #fff;
            text-align: center;
            border-radius: 0px 6px 6px 0px;
            position: absolute;
            top: 31px;
            right: -1px;
            z-index: 2;
          }
          .input_tel {
            width: 520px;
          }

          .codeTime {
            width: 220px;
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
  .regSucc {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 33;
    .succBox {
      .succImg {
        padding-top: 120px;
        margin: 0 auto;
        width: 180px;
        height: 180px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .succTxt {
        text-align: center;
        margin-top: 40px;
        font-size: 60px;
        letter-spacing: 6px;
        color: #37bef0;
      }
      .succTime {
        margin: 140px 0 60px 0;
        text-align: center;
        font-size: 30px;
        letter-spacing: 3px;
        color: #333;
        span {
          font-size: 30px;
          color: #6ea1ff;
        }
      }
      .succBtn {
        width: 260px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #6ea1ff;
        border-radius: 6px;
        margin: 0 auto;
        font-size: 30px;
        color: #fff;
      }
    }
  }
  .top_div {
    width: 100%;
    height: 88px;
  }
}
</style>
