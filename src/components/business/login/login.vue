<template>
  <div class="loginBox">
    <p class="backPre" @click="back_from"><img src="./backBtn.png" alt=""/></p>
    <div class="logo">
      <p>
        <img src="./logo.png" alt="">
      </p>
    </div>
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
import Install from "@/config/checkRule";
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
    },
    forgotPwdBtn() {
      //忘记密码
      if (this.userInfo.userName == "") {
        alert("请先输入用户名！");
      } else {
        let _this_url = "/frontcompanyinompanyCheckAcc-checkAcc";
        this.axios
          .post(_this_url, { fmiAcc: this.userInfo.userName })
          .then(res => {
            if (res.data.flag) {
              this.$router.push({
                path: `/findPwd/${this.userInfo.userName}`
              });
            } else {
              alert("该用户名不存在！");
            }
          });
      }
    },
    loginBtn() {
      //登录信息
      if (this.userInfo.userName == "" && this.userInfo.password == "") {
        alert("请输入用户名和密码！");
      } else if (this.userInfo.userName == "") {
        alert("用户名不能为空！");
      } else if (this.userInfo.password == "") {
        alert("密码不能为空！");
      } else {
        let url = "/frontloginoperate-login";
        let params = {
          fmiAcc: this.userInfo.userName,
          fmiPwd: this.userInfo.password
        };
        this.axios.post(url, params).then(res => {
          if (res.data.flag) {
            localStorage.setItem("ownInfo1", JSON.stringify(res.data));
            localStorage.setItem("isOwn", res.data.info.fmiGroup);
            this.$router.push("/");
          } else {
            alert(res.data.msg);
          }
        });
      }
    },
    goToRegister() {
      this.$router.push("/register");
    },
    back_from(){
      history.back(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.loginBox {
  width: 100%;
  height: 1334px;
  background: #253350;
  .backPre{
    width: 60px;
    height: 60px;
    text-align: center;
    border-radius: 50%;
    background: rgb(22,31,48);
    position: absolute;
    top: 30px;
    left: 30px;
    img{
      width: 48px;
      height: 48px;
      padding: 8px 5px 0 0;
      border-radius: 50%;
    }
  }
  .logo {
    width: 100%;
    height: 600px;
    p {
      width: 400px;
      height: 108px;
      margin: 0 auto;
      padding-top: 280px;
      img {
        width: 100%;
        height: 100%;
      }
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
