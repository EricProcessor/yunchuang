<template>
  <div class="password">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <ol class="clearfix tabs">
      <li class="fl" :class="{active:pwd.isTab}" @click="phoneBack">{{pwd.phoneName}}</li>
      <li class="fl" :class="{active:!pwd.isTab}" @click="emailBack">{{pwd.emailName}}</li>
    </ol>

    <ul class="list" v-if="pwd.isTab">
      <li>
        <p>手机号码
          <span>（必填）</span>
        </p>
        <input type="text" v-model="pwd.phone" maxlength="11" placeholder="请输入手机号码">
      </li>
      <li>
        <p>验证码
          <span>（必填）</span>
        </p>
        <div class="clearfix pos1">
          <input type="text" v-model="pwd.code" class="fl code" placeholder="请输入6位验证码">
          <i v-if="!phoneCodes" @click="getPhoneCode">获取验证码</i>
          <i class="again" v-if="phoneCodes">重新发送（{{pwd.minutePhone}}）</i>
        </div>
      </li>
    </ul>
    <ul class="list" v-if="!pwd.isTab">
      <li>
        <p>邮箱
          <span>（必填）</span>
        </p>
        <input type="text" @blur="getEmailCode" v-model="pwd.email" placeholder="请输入邮箱">
      </li>
      <li>
        <p>验证码
          <span>（必填）</span>
        </p>
        <div class="clearfix pos1">
          <input type="text" class="fl" placeholder="请输入6位验证码">
        </div>
      </li>
    </ul>
    <p class="postBtn" @click="putInBtn">提交</p>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import Install from "@/config/checkRule";
export default {
  data() {
    return {
      pwd: {
        phoneName: "手机号找回",
        emailName: "邮箱找回",
        isTab: true,
        phone: "",
        email: "",
        code: "",
        minutePhone: 59
      },
      phoneCodes: false,
      userName: ""
    };
  },
  created() {
    this.headerText = "找回密码"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  mounted() {
    this.userName = this.$route.params.userName;
    this.getUserTel();
  },
  methods: {
    phoneBack() {
      if (!this.pwd.isTab) {
        this.pwd.isTab = !this.pwd.isTab;
      }
    },
    emailBack() {
      if (this.pwd.isTab) {
        this.pwd.isTab = !this.pwd.isTab;
      }
    },
    getPhoneCode() {
      let codeUrl1 = "/frontnote-send";
      if (this.pwd.phone == "") {
        alert("请输入手机号码！");
      } else {
        if (Install.isPhone(this.pwd.phone)) {
          this.axios.post(codeUrl1, { phoneCode: this.pwd.phone }).then(res => {
            if (res.data.flag) {
              console.log(res.data.flag);
            } else {
              alert(res.data.msg);
            }
          });
          setInterval(this.cutDownTime1, 1000);
        } else {
          alert("手机号不正确！");
        }
      }
    },
    getEmailCode() {
      let codeUrl2 = "/frontnote-send";
      if (this.pwd.email == "") {
        alert("请输入邮箱！");
        return;
      } else {
        if (Install.isEmail(this.pwd.email)) {
          this.axios.post(codeUrl2, { phoneCode: this.pwd.email }).then(res => {
            if (res.data.flag) {
              this.code = res.data.msg;
            } else {
              alert(res.data.msg);
            }
          });
        } else {
          alert("邮箱不正确！");
        }
      }
    },
    getUserTel() {
      let tel_url = "/h5frontpwdfind-phone";
      this.axios.post(tel_url, { fmiAcc: this.userName }).then(res => {
        // console.log(res)
        this.pwd.phone = res.data.fmi_tel;
        this.pwd.email = res.data.fmi_mile;
      });
    },
    cutDownTime1() {
      if (this.phoneCodes == true) {
        this.pwd.minutePhone--;
        if (this.pwd.minutePhone == 0) {
          this.phoneCodes = false;
          this.pwd.minutePhone = 59;
        }
      }
    },
    putInBtn() {
      if (this.pwd.phoneName == "手机号找回") {
        //手机号找回
        if (this.pwd.phone == "" && this.pwd.code == "") {
          alert("信息不能为空!");
        } else if (this.pwd.phone == "") {
          alert("手机号码不能为空!");
          return;
        } else if (this.pwd.code == "") {
          alert("验证码不能为空!");
          return;
        } else {
          let _url = "/frontpwdfindoperate-phone";
          this.axios
            .post(_url, { fmiAcc: this.pwd.phone, verify: this.pwd.code })
            .then(res => {
              if (res.data.flag) {
                this.$router.push({
                  path: `/findPwdChange/${this.userName}`
                });
              } else {
                alert(res.data.msg);
              }
            });
        }
      } else {
        //邮箱找回---未解决
        if (this.pwd.email == "" && this.pwd.code == "") {
          alert("信息不能为空!");
        } else if (this.pwd.email == "") {
          alert("邮箱不能为空！");
          return;
        } else if (this.pwd.code == "") {
          alert("验证码不能为空");
          return;
        } else {
          // this.axios
          //   .post(_url, { phone: this.pwd.email, code: this.pwd.code })
          //   .then(res => {
          //     console.log(res.data);
          //     if (res.data.flag) {
          //       // this.$router.push("/tel");
          //     } else {
          //       // alert(res.data.msg);
          //       this.$router.push("mine/accountsecuritys/tel");
          //     }
          //   });
        }
      }
    }
  },
  beforeDestroy() {
    //销毁定时器
    clearInterval(this.cutDownTime);
  },
  components: {
    IndexHeader
  }
};
</script>
<style lang="less" scoped>
.password {
  width: 100%;
  height: 1334px;
  background: #eee;
  .tabs {
    li {
      width: calc(100% / 2);
      height: 88px;
      line-height: 88px;
      text-align: center;
      font-size: 30px;
      background: #fff;
      color: #666;
      box-sizing: border-box;
      border-left: 1px solid #eee;
    }
    li:first-child {
      border-left: none;
      border-right: 1px solid #eee;
    }
    .active {
      color: #6ea1ff;
      border-bottom: 4px solid #6ea1ff;
    }
  }
  .list {
    padding: 0 30px;
    li {
      margin-top: 30px;
      p {
        font-size: 24px;
        color: #666;
        margin-bottom: 10px;
        span {
          font-size: 20px;
          color: #f35828;
        }
      }
      input {
        width: 96%;
        height: 61px;
        background: #fff;
        border-radius: 6px;
        font-size: 24px;
        padding: 0 2%;
        border: solid 1px #e0e0e0;
      }
      .code {
        width: 515px;
      }
      i {
        display: block;
        width: 181px;
        height: 63px;
        background-color: #6ea1ff;
        border-radius: 0px 6px 6px 0px;
        font-size: 24px;
        color: #fff;
        text-align: center;
        line-height: 61px;
        position: absolute;
        top: 0;
        right: 0;
      }
      .again {
        width: 221px;
        background: #ccc;
        color: #333;
      }
    }
  }
  .postBtn {
    width: 100%;
    height: 88px;
    line-height: 88px;
    text-align: center;
    background-color: #6ea1ff;
    font-size: 30px;
    letter-spacing: 3px;
    color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
