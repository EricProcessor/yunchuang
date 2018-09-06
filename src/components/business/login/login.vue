<template>
  <div class="loginBox">
    <p class="logo">
      <img src="./logo.png" alt="">
    </p>
    <div class="formList">
      <div class="person pos1">
        <label for="person"></label>
        <input name="person" v-model="userInfo.userName" type="text" placeholder="user name">
      </div>
      <div class="serctKey pos1">
        <label for="key"></label>
        <input type="password" v-model="userInfo.password" name="key" placeholder="user password">
      </div>
      <div class="clearfix forgetSth">
        <div class="fl left_remb clearfix pos1">
          <input type="checkBox" @click="checkedBtn" v-model="userInfo.checked">
          <p class="fl remb_btn"></p>
          <div class="remb_btn_pwd" v-show="userInfo.showImg">
            <img src="./checkedTrue.png" alt="">
          </div>
          <p class="fl">记住密码</p>
        </div>
        <div class="fr right_forget" @click="forgotPwdBtn">忘记密码？</div>
      </div>
      <div class="submit" @click="loginBtn">
        <p>登录</p>
      </div>
      <p class="register" @click="goToRegister">还没有账号？去注册！</p>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import config from "@/config/config";

export default {
  data() {
    return {
      userInfo: {
        //登录信息
        userName: "",
        password: "",
        checked: false,
        showImg: false
      }
    };
  },
  methods: {
    checkedBtn() {
      //记住密码
      this.userInfo.checked = !this.userInfo.checked;
      this.userInfo.showImg = !this.userInfo.showImg;
      if (this.userInfo.showImg == true) {
        console.log(123);
      } else {
        console.log(456);
      }
    },
    isPhone(phone) {
      //手机号验证
      let isPhone = /^(((13[0-9]{1})|(15[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
      return isPhone.test(phone);
    },
    forgotPwdBtn() {
      //忘记密码
      alert("忘记密码");
    },
    loginBtn() {
      //登录信息
      if (this.userInfo.userName == "" && this.userInfo.password == "") {
        alert("请输入用户名和密码！");
      } else if (this.userInfo.userName == "") {
        alert("用户名不能为空！");
      } else if (this.userInfo.password == "") {
        alert("密码不能为空！");
      } else if (!this.isPhone(this.userInfo.userName)) {
        alert("请输入正确的手机号码！");
      } else {
        let url = config.host + "/frontloginoperate-login";
        let params = new URLSearchParams();
        params.append("fmiTel", this.userInfo.userName);
        params.append("fmiPwd", this.userInfo.password);
        axios({
          method: "post",
          url: url,
          data: params
        }).then(res => {
          // console.log(res.data)
          if(res.data.msg){
            alert(res.data.msg);
          }else{
            this.$router.push("/");
          }
        });
      }
    },
    goToRegister() {
      this.$router.push("/register");
    }
  }
};
</script>
<style lang="less" scoped>
.loginBox {
  width: 100%;
  height: 1334px;
  background: #253350;
  .logo {
    width: 300px;
    height: 88px;
    padding: 300px 0 220px 0;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .formList {
    .person,
    .serctKey {
      padding: 0 115px;
      label {
        position: absolute;
        top: 12px;
        left: 120px;
        z-index: 3;
      }
      input {
        width: 470px;
        height: 60px;
        line-height: 60px;
        letter-spacing: 5px;
        border: none;
        font-size: 30px;
        background-color: #253350;
        color: #fff;
        margin-bottom: 84px;
        border-bottom: 1px solid #777b84;
        padding: 5px 0 5px 50px;
      }
    }
    .person {
      label {
        display: inline-block;
        width: 33px;
        height: 40px;
        background: url("./person.png") no-repeat center center;
        background-size: 100% 100%;
      }
    }
    .serctKey {
      label {
        display: inline-block;
        width: 33px;
        height: 40px;
        background: url("./secretKey.png") no-repeat center center;
        background-size: 100% 100%;
      }
      input {
        margin-bottom: 40px;
      }
    }
    .forgetSth {
      padding: 0 115px;
      .left_remb {
        line-height: 0.35rem;
        input {
          width: 24px;
          height: 24px;
          position: absolute;
          top: -3px;
          left: -6px;
          z-index: 4;
          opacity: 0;
        }
        .remb_btn {
          width: 24px;
          height: 24px;
          border: solid 1px #d2d2d2;
          border-radius: 50%;
          margin-right: 10px;
        }
        .remb_btn_pwd {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          position: absolute;
          top: -4px;
          left: -4.5px;
          z-index: 3;
          img {
            width: 100%;
            height: 100%;
          }
        }
        p {
          color: #d1d1d2;
          font-size: 20px;
        }
      }
      .right_forget {
        font-size: 20px;
        color: #d2d2d2;
      }
    }
    .submit {
      padding: 0 115px;
      margin: 82px 0;
      p {
        width: 100%;
        height: 80px;
        line-height: 80px;
        text-align: center;
        font-size: 30px;
        color: #fff;
        background-image: linear-gradient(-90deg, #945ab2 0%, #0c87c4 100%),
          linear-gradient(#ffffff, #ffffff);
        background-blend-mode: normal, normal;
        box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.1);
        border-radius: 6px;
      }
    }
    .register {
      text-align: center;
      margin-top: 160px;
      font-size: 24px;
      color: #37bef0;
    }
  }
}
</style>
