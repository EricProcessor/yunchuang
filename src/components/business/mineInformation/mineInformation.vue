<template>
  <div class="mine_information"> 
    <ol @click.stop="goLogin">
      <li class="infor_left" @click.stop="goPersonalSet">
        <img :src="fmiPath" alt="" srcset="" v-if="userLogin==true">
      </li>
      <li class="infor_right" v-if="userLogin==true" @click.stop="goPersonalSet">
        <h3>{{fmiUsername}} <img src="./nan.png" alt="" v-if="sex=='男'"><img src="./nv.png" alt="" v-if="sex=='女'"></h3>
        <span>{{province}}-{{city}}-{{area}}</span>
        <span>注册于{{fmiDatetimes | formatDate}}</span>
      </li>
      <li class="infor_right" v-if="userLogin==false">
        <h3 class="unLogin">未登录</h3>
      </li>
    </ol>
  </div>
</template>
<script type="text/ecmascript-6">
import config from "@/config/config";
export default {
  data() {
    return {
      fmiUsername: "", //名字
      sex: "", //性别
      province: "", //省
      city: "", //市
      area: "", //区
      fmiDatetimes: "", //时间
      fmiPath: "", //头像
      userLogin: false //用户是否登录
    };
  },
  mounted() {
    this.local();
  },
  methods: {
    local() {
      var ownInfo1 = JSON.parse(localStorage.getItem("ownInfo1"));
      if (ownInfo1 != null) {
        this.userLogin = true;
        this.fmiUsername = ownInfo1.info.fmiUsername; //名字
        this.sex = ownInfo1.memmberDetail.sex; //性别
        this.province = ownInfo1.memmberDetail.province; //省
        this.city = ownInfo1.memmberDetail.city; //市
        this.area = ownInfo1.memmberDetail.area; //区
        this.fmiDatetimes = ownInfo1.info.fmiDatetimes; //时间
        this.fmiPath = ownInfo1.info.fmiPath; //头像
      } else {
        this.userLogin = false;
      }
    },
    goLogin() {
      //页面路由跳转方法
      if (this.userLogin == false) {
        this.$router.push({
          path: "/login"
        });
      }
    },
    goPersonalSet() {
      //点击头像和用户信息跳转到个人设置
      if (this.userLogin == true) {
        this.$router.push({
          path: "/mine/personalSet"
        });
      } else {
        this.$router.push({
          path: "/login"
        });
      }
    }
  },
  //将时间戳转化成时间
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d;
    }
  }
};
</script>
<style lang="less" scoped>
// 我的基本信息
.mine_information {
  width: 750px;
  height: 140px;
  margin-bottom: 120px;
  padding-top: 30px;
  background: linear-gradient(
    bottom,
    rgb(245, 245, 245) 20%,
    #253350
  ); /* 标准的语法 */
  position: relative;
  top: -2px;
  ol {
    width: 690px;
    height: 220px;
    background: rgb(245, 245, 245);
    margin: 0 auto;
    box-shadow: 0px 10px 20px #dfdfdf;
    position: relative;
    z-index: 10;
    top: -20px;
    border-radius: 20px;
    .infor_left {
      float: left;
      margin: 50px 34px 50px 60px;
      background: #cad3dc;
      border-radius: 50%;
      width: 120px;
      height: 120px;
      overflow: hidden;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .infor_right {
      float: left;
      margin: 50px 30px 50px 0px;
      width: 444px;
      h3 {
        color: #000;
        font-size: 30px;
        font-weight: normal;
        letter-spacing: 3px;
        height: 48px;
        line-height: 48px;
        img {
          // transform: rotate(45deg);
          width: 24px;
          position: relative;
          top: 6px;
          left: 8px;
        }
      }
      .unLogin {
        padding: 30px 0;
      }
      span {
        letter-spacing: 2px;
        font-size: 20px;
        color: #999999;
        display: block;
        height: 36px;
        line-height: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
}
</style>
