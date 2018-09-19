<template>
  <div class="passwordChange">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <ul class="list">
      <li>
        <p>新密码
          <span>（必填）</span>
        </p>
        <input type="password" v-model="password.pwd" placeholder="请输入密码">
        <span class="errInfo fr">{{password.err}}</span>
      </li>
      <li>
        <p>确认密码
          <span>（必填）</span>
        </p>
        <div class="clearfix pos1">
          <input type="password" v-model="password.pwd2" class="fl" placeholder="请再次输入密码">
          <span class="errInfo fr">{{password.err2}}</span>
        </div>
      </li>
    </ul>
    <p class="postBtn" @click="putInPwd">保存</p>
    <!-- 保存成功 -->
    <success :sucOption="sucOption" v-if="sucOption.showSuccess"></success>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import Install from "@/config/checkRule";
import Success from "business/success/success";
export default {
  data() {
    return {
      sucOption: {
        title: "登录", //这个是传的跳转到页面的名称
        sucName: "修改成功", //(保存成功、注册成功)
        showSuccess: false, //是否显示组件
        path: "/login" //成功后条状的路径
      },
      password: {
        pwd: "",
        pwd2: "",
        err: "",
        err2: ""
      },
      userName: ""
    };
  },
  created() {
    this.headerText = "找回密码"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  mounted() {
    this.userName = this.$route.params.userName;
  },
  methods: {
    putInPwd() {
      if (this.password.pwd == "" && this.password.pwd2 == "") {
        alert("信息不能为空！");
      } else if (this.password.pwd == "") {
        this.password.err = "密码不能为空！";
      } else if (this.password.pwd2 == "") {
        this.password.err2 = "确认密码不能为空！";
      } else {
        if (Install.isPwd(this.password.pwd)) {
          this.password.err = "";
        } else {
          this.password.err = "密码格式不正确！";
        }
        if (Install.isPwd(this.password.pwd2)) {
          this.password.err2 = "";
        } else {
          this.password.err2 = "密码格式不正确！";
        }
        if (this.password.pwd == this.password.pwd2) {
          let pew_url = "/frontresetpwdoperate-reset";
          this.axios
            .post(pew_url, { fmiAcc: this.userName, fmiPwd: this.password.pwd })
            .then(res => {
              if (res.data.flag) {
                this.sucOption.showSuccess = true;
              }
            });
        } else {
          this.password.err2 = "两次输入的密码不一致！";
        }
      }
    }
  },
  components: {
    IndexHeader,
    Success
  }
};
</script>
<style lang="less" scoped>
.passwordChange {
  width: 100%;
  height: 1334px;
  background: #eee;
  .list {
    padding: 0 30px;
    li {
      margin-top: 50px;
      p {
        font-size: 24px;
        color: #666;
        margin-bottom: 20px;
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
      .errInfo {
        font-size: 20px;
        color: #f35828;
        margin-top: 10px;
        margin-right: 5px;
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
    letter-spacing: 6px;
    color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
  }
}
</style>
