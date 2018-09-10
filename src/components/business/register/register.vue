<template>
  <div class="registerBox">
    <div class="noSucc" v-if="!regInfo.isRegSucc">
      <header class="pos1">
        注册
        <span class="icon_back mintui mintui-back" @click="backBtnPre"></span>
        <router-link class="toLogin" to="/login" tag="span">去登陆</router-link>
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
                <input type="text" @blur="registerPhone" placeholder="请输入手机号码" v-model="companyData.registerPhone.val" maxlength="11">
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
                <input type="text" @blur="companyCode" placeholder="请输入组织机构代码" v-model="companyData.MechanismCode.val">
                <div class="tipInfo fr" v-show="companyData.MechanismCode.isRight">
                  <i></i>
                  <span>请输入正确的机构代码格式</span>
                </div>
                <div class="tipInfo fr" v-show="companyData.MechanismCode.isEmpty">
                  <i></i>
                  <span>机构代码不能为空</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">单位名称
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" @blur="companyName" placeholder="请输入单位名称" v-model="companyData.companyName.val">
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
                <input type="text" @blur="registerName" placeholder="请输入联系人" v-model="companyData.registerName.val">
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
                <input type="text" @blur="registerEmail" placeholder="请输入电子邮箱" v-model="companyData.registerEmail.val">
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
                <input type="password" @blur="registerPwd" placeholder="密码长度6-21位，由字母数字组成，区分大小写" v-model="companyData.registerPwd.val">
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
                <input type="password" @blur="confirmPwdBlur" placeholder="再次输入登录密码" v-model="companyData.confirmPwd.val">
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
                <div class="clearfix pos1">
                  <input type="text" class="fl input_tel" @blur="ownPhoneBlur" placeholder="请输入手机号码" maxlength="11" v-model="ownData.ownPhone.val">
                  <span class="getCode fr" v-show="regInfo.timeMsg" @click="getCode">获取验证码</span>
                  <span class="getCode fr codeTime" v-show="!regInfo.timeMsg">重新获取（{{regInfo.count}}）</span>
                </div>
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
                <input type="text" @blur="ownNameBlur" placeholder="请输入用户名" v-model="ownData.ownName.val">
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
                <input type="password" @blur="ownPwdBlur" placeholder="密码长度6-21位，由字母数字组成，区分大小写" v-model="ownData.ownPwd.val">
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
                <input type="password" @blur="ownSurePwdBlur" placeholder="再次输入登录密码" v-model="ownData.ownSurePwd.val">
                <div class="tipInfo fr" v-show="ownData.ownSurePwd.isRight">
                  <i></i>
                  <span>两次输入的密码不一致</span>
                </div>
                <div class="tipInfo fr" v-show="ownData.ownSurePwd.isEmpty">
                  <i></i>
                  <span>确认密码不能为空</span>
                </div>
              </li>
              <li>
                <div class="clearfix">
                  <p class="fl">验证码
                    <span>（必填）</span>
                  </p>
                </div>
                <input type="text" @blur="ownCodeBlur" placeholder="请输入6位手机验证码" v-model="ownData.ownCode.val">
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
                <input type="text" @blur="ownEmailBlur" placeholder="请输入电子邮箱" v-model="ownData.ownEmail.val">
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
import config from "@/config/config";
import Install from "@/config/checkRule";
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
        isTime: 5, //跳转倒计时
        isCode: "" //后台验证码
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
      //1、请求后台验证码接口
      let codeUrl = config.host + "/frontnote-send";
      let params = new URLSearchParams();
      params.append("phoneCode", this.ownData.ownPhone.val);
      if (this.ownData.ownPhone.val != "") {
        this.axios.post(codeUrl, params).then(res => {
          if (res.data.flag == true) {
            this.regInfo.isCode = res.data.verifyCode;
          } else {
            alert(res.data.msg);
          }
        });
        //2、获取验证码倒计时
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
      } else {
        alert("请输入手机号码！");
      }
    },

    registerPhone() {
      //企业注册--联系电话验证
      if (this.companyData.registerPhone.val == "") {
        this.companyData.registerPhone.isEmpty = true;
      } else {
        this.companyData.registerPhone.isEmpty = false;
        if (Install.isPhone(this.companyData.registerPhone.val)) {
          //验证手机号是否已注册
          let companyTelUrl = config.host + "/frontcompanyinfomile2-checkAcc";
          let params = new URLSearchParams();
          params.append("fmiTel", this.companyData.registerPhone.val);
          this.axios.post(companyTelUrl, params).then(res => {
            if (res.data.flag) {
              this.companyData.registerPhone.isExist = true;
            } else {
              this.companyData.registerPhone.isExist = false;
            }
          });
        } else {
          this.companyData.registerPhone.isRight = true;
        }
      }
    },
    companyCode() {
      //企业注册--机构代码验证
      if (this.companyData.MechanismCode.val == "") {
        this.companyData.MechanismCode.isEmpty = true;
      } else {
        this.companyData.MechanismCode.isEmpty = false;
        if (Install.isMechanismCode(this.companyData.MechanismCode.val)) {
          this.companyData.MechanismCode.isRight = false;
        } else {
          this.companyData.MechanismCode.isRight = true;
        }
      }
    },
    companyName() {
      //企业注册--单位名称验证
      if (this.companyData.companyName.val == "") {
        this.companyData.companyName.isEmpty = true;
      } else {
        this.companyData.companyName.isEmpty = false;
      }
    },
    registerName() {
      //企业注册--联系人验证
      if (this.companyData.registerName.val == "") {
        this.companyData.registerName.isEmpty = true;
      } else {
        this.companyData.registerName.isEmpty = false;
      }
    },
    registerEmail() {
      //企业注册--联系邮箱验证
      if (this.companyData.registerEmail.val == "") {
        this.companyData.registerEmail.isEmpty = true;
      } else {
        this.companyData.registerEmail.isEmpty = false;
        if (Install.isEmail(this.companyData.registerEmail.val)) {
          this.companyData.registerEmail.isRight = false;
        } else {
          if (this.companyData.registerEmail.val != "") {
            this.companyData.registerEmail.isRight = true;
          }
        }
      }
    },
    registerPwd() {
      //企业注册--密码验证
      if (this.companyData.registerPwd.val == "") {
        this.companyData.registerPwd.isEmpty = true;
      } else {
        this.companyData.registerPwd.isEmpty = false;
        if (Install.isPwd(this.companyData.registerPwd.val)) {
          this.companyData.registerPwd.isRight = false;
        } else {
          this.companyData.registerPwd.isRight = true;
        }
      }
    },
    confirmPwdBlur() {
      //企业注册--确认密码验证
      if (this.companyData.confirmPwd.val == "") {
        this.companyData.confirmPwd.isEmpty = true;
      } else {
        this.companyData.confirmPwd.isEmpty = false;
        if (
          this.companyData.confirmPwd.val != this.companyData.registerPwd.val
        ) {
          this.companyData.confirmPwd.isRight = true;
        } else {
          this.companyData.confirmPwd.isRight = false;
        }
      }
    },
    ownPhoneBlur() {
      //失去焦点验证手机号
      if (this.ownData.ownPhone.val == "") {
        //手机号是否为空
        this.ownData.ownPhone.isEmpty = true;
      } else {
        this.ownData.ownPhone.isEmpty = false;
        if (Install.isPhone(this.ownData.ownPhone.val)) {
          this.ownData.ownPhone.isRight = false;
          //判断手机号是否已注册
          let phoneUrl = config.host + "/frontcompanyinfomile-checkAcc";
          let params = new URLSearchParams();
          params.append("fmiAcc", this.ownData.ownPhone.val);
          this.axios.post(phoneUrl, params).then(res => {
            console.log(res);
            if (res.data.flag) {
              this.ownData.ownPhone.isExist = true;
            } else {
              this.ownData.ownPhone.isExist = false;
            }
          });
        } else {
          this.ownData.ownPhone.isRight = true;
        }
      }
    },
    ownNameBlur() {
      //验证用户名
      if (this.ownData.ownName.val == "") {
        //用户名是否为空
        this.ownData.ownName.isEmpty = true;
      } else {
        this.ownData.ownName.isEmpty = false;
        //判断用户名是否已存在   fmiUsername
      }
    },
    ownPwdBlur() {
      //密码验证
      if (this.ownData.ownPwd.val == "") {
        //密码是否为空
        this.ownData.ownPwd.isEmpty = true;
      } else {
        this.ownData.ownPwd.isEmpty = false;
        if (Install.isPwd(this.ownData.ownPwd.val)) {
          //密码格式是否正确
          this.ownData.ownPwd.isRight = false;
        } else {
          this.ownData.ownPwd.isRight = true;
        }
      }
    },
    ownSurePwdBlur() {
      //确认密码验证
      if (this.ownData.ownSurePwd.val == "") {
        //密码是否为空
        this.ownData.ownSurePwd.isEmpty = true;
      } else {
        this.ownData.ownSurePwd.isEmpty = false;
        if (this.ownData.ownSurePwd.val != this.ownData.ownPwd.val) {
          //两次输入的密码是否一致
          this.ownData.ownSurePwd.isRight = true;
        } else {
          this.ownData.ownSurePwd.isRight = false;
        }
      }
    },
    ownCodeBlur() {
      //验证码验证
      if (this.ownData.ownCode.val == "") {
        //密码是否为空
        this.ownData.ownCode.isEmpty = true;
      } else {
        this.ownData.ownCode.isEmpty = false;
        //后台获取验证码 判断输入的验证码是否一样
        if (this.ownData.ownCode.val != this.regInfo.isCode) {
          this.ownData.ownCode.isRight = true;
        } else {
          this.ownData.ownCode.isRight = false;
          return;
        }
      }
    },
    ownEmailBlur() {
      //邮箱验证
      if (this.ownData.ownEmail.val == "") {
        this.ownData.ownEmail.isEmpty = true;
      } else {
        this.ownData.ownEmail.isEmpty = false;
        if (Install.isEmail(this.ownData.ownEmail.val)) {
          this.ownData.ownEmail.isRight = false;
          //验证邮箱是否已注册
          let emailUrl = config.host + "/frontcompanyinfoperson-checkAcc";
          let params = new URLSearchParams();
          params.append("fmiTel", this.ownData.ownPhone.val);
          params.append("fmiMile", this.ownData.ownEmail.val);
          if (this.ownData.ownPhone.val != "") {
            this.axios
              .post(emailUrl, params)
              .then(res => {
                console.log(res.data);
                if (res.data.flag) {
                  this.ownData.ownEmail.isExist = true;
                } else {
                  this.ownData.ownEmail.isExist = false;
                }
              })
              .catch(res => {
                console.log(res);
              });
          } else {
            alert("请输入手机号码！");
          }
        } else {
          this.ownData.ownEmail.isRight = true;
        }
      }
    },
    subListBtn() {
      //注册
      if (this.regInfo.isCompany) {
        //企业注册信息验证
        if (
          Install.isMechanismCode(this.companyData.MechanismCode.val) &&
          Install.isPhone(this.companyData.registerPhone.val) &&
          Install.isEmail(this.companyData.registerEmail.val) &&
          Install.isPwd(this.companyData.registerPwd.val) &&
          this.companyData.companyName.val != "" &&
          this.companyData.registerName.val != "" &&
          this.companyData.confirmPwd.val == this.companyData.registerPwd.val
        ) {
          console.log(this.companyData);
        } else {
          alert("信息不完整！");
        }
      } else {
        //个人注册信息验证
        if (
          Install.isPhone(this.ownData.ownPhone.val) &&
          this.ownData.ownCode.val != "" &&
          this.ownData.ownName.val != "" &&
          Install.isEmail(this.ownData.ownEmail.val) &&
          Install.isPwd(this.ownData.ownPwd.val) &&
          this.ownData.ownSurePwd.val == this.ownData.ownPwd.val
        ) {
          let ownUrl = config.host + "/h5frontregisteroperate-one";
          let params = new URLSearchParams();
          params.append("fmiTel", this.ownData.ownPhone.val);
          params.append("verify", this.ownData.ownCode.val);
          params.append("fmiMile", this.ownData.ownEmail.val);
          params.append("fmiPwd", this.ownData.ownPwd.val);
          params.append("fmiPwd2", this.ownData.ownSurePwd.val);
          params.append("fmiUsername", this.ownData.ownName.val);

          this.axios.post(ownUrl, params).then(res => {
            console.log(res);
          });
        } else {
          alert("信息不完整！");
        }
      }
    },
    cutDownTime() {
      //注册成功5秒后跳转
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
            line-height: 62px;
            background: #6ea1ff;
            color: #fff;
            text-align: center;
            border-radius: 0px 6px 6px 0px;
            position: absolute;
            top: 10px;
            right: -1px;
            z-index: 2;
          }
          .input_tel {
            width: 500px;
          }

          .codeTime {
            width: 220px;
            background: #ccc;
            color: #333;
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
