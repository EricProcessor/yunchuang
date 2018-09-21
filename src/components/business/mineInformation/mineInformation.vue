<template>
  <div class="mine_information"> 
    <ol>
      <li class="infor_left">
        <img :src="fciPath" alt="" srcset="" v-if="userLogin==true">
      </li>
      <li class="infor_right" v-if="userLogin==true">
        <h3>{{fmiUsername}} <img src="./nan.png" alt="" v-if="sex=='男'"><img src="./nv.png" alt="" v-if="sex=='女'"></h3>
        <span>{{fciAddress}}</span>
        <span>注册于{{fmiDatetimes | formatDate}}</span>
      </li>
      <li class="infor_right" v-if="userLogin==false">
        <h3>未登录</h3>
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
      fciAddress: "", //地址
      fmiDatetimes: "", //时间
      fciPath: "", //头像
      userLogin: false //用户是否登录
    };
  },
  mounted() {
    this.local();
  },
  methods: {
    local() {
      var ownInfo1 = JSON.parse(localStorage.getItem("ownInfo1"));
      console.log(ownInfo1);
      if (ownInfo1 != null) {
        this.userLogin = true;
        this.fmiUsername = ownInfo1.info.fmiUsername; //名字
        this.sex = ownInfo1.memmberDetail.sex; //性别
        this.fciAddress = ownInfo1.memmberDetail.fciAddress; //地址
        this.fmiDatetimes = ownInfo1.info.fmiDatetimes; //时间
        this.fciPath = ownInfo1.memmberDetail.fciPath; //地址
      } else {
        this.userLogin = false;
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
      span {
        letter-spacing: 2px;
        font-size: 20px;
        color: #999999;
        display: block;
        height: 36px;
        line-height: 36px;
      }
    }
  }
}
</style>
