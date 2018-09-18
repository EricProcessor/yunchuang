<template>
    <div class="password">
        <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
        <ol class="clearfix tabs">
            <li class="fl" :class="{active:pwd.isTab}" @click="phoneBack">手机号找回</li>
            <li class="fl" :class="{active:!pwd.isTab}" @click="emailBack">邮箱找回</li>
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
                    <i v-if="!phoneCode" @click="getPhoneCode">获取验证码</i>
                    <i class="again" v-if="phoneCode">重新发送（{{pwd.minutePhone}}）</i>
                </div>
            </li>
        </ul>
        <ul class="list" v-if="!pwd.isTab">
            <li>
                <p>邮箱
                    <span>（必填）</span>
                </p>
                <input type="text" v-model="pwd.email" placeholder="请输入邮箱">
            </li>
            <li>
                <p>验证码
                    <span>（必填）</span>
                </p>
                <div class="clearfix pos1">
                    <input type="text" class="fl code" placeholder="请输入6位验证码">
                    <i v-if="!emailCode" @click="getEmailCode">获取验证码</i>
                    <i class="again" v-if="emailCode">重新发送（{{pwd.minuteEmail}}）</i>
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
        istime: 5,
        isTab: true,
        phone: "",
        email: "",
        code: "",
        minutePhone: 59,
        minuteEmail: 59
      },
      phoneCode: false,
      emailCode: false
    };
  },
  created() {
    this.headerText = "找回密码"; //设置头部显示导航内容
    this.hasSearch = false;
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
          this.phoneCode = !this.phoneCode;
          this.axios.post(codeUrl1, { phoneCode: this.pwd.phone }).then(res => {
            console.log(res);
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
      } else {
        if (Install.isEmail(this.pwd.email)) {
          this.emailCode = !this.emailCode;
          this.axios.post(codeUrl2, { phoneCode: this.pwd.email }).then(res => {
            console.log(res);
          });
          setInterval(this.cutEamilTime, 1000);
        } else {
          alert("邮箱不正确！");
        }
      }
    },
    cutDownTime1() {
      if (this.phoneCode == true) {
        this.pwd.minutePhone--;
        if (this.pwd.minutePhone == 0) {
          this.phoneCode = false;
          this.pwd.minutePhone = 59;
        }
      }
    },
    cutEamilTime() {
      if (this.emailCode == true) {
        this.pwd.minuteEmail--;
        if (this.pwd.minuteEmail == 0) {
          this.emailCode = false;
          this.pwd.minuteEmail = 59;
        }
      }
    },
    putInBtn() {
        if(this.$children.phone==""&&this.pwd.email==""){
            alert("信息不能为空!");
        }else if(this.pwd.email==""){
            alert("验证码不能为空！");
        }else if(this.pwd.phoneemail==""){
            alert("手机号码不能为空");
        }else{
           let _url="/frontpwdfindoperate-phone?fmiAcc=";
           this.axops.get(_url).then(res=>{

           }); 
        }
    }
  },
  beforeDestroy() {
    //销毁定时器
    clearInterval(this.cutDownTime);
    clearInterval(this.cutEamilTime);
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
        width: 201px;
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
