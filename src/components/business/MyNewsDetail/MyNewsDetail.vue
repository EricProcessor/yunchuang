<template>
  <div class="towLevelRouter">
    <index-header :text="headerText" :hasSearch="false"></index-header>
    <ul class="myIntCon">
      <li>
          <div class="myIntNew">
            <span>{{this.$route.params.Fmm_title}}</span>
            <span>{{this.$route.params.Fmi_datetime|formatDate}}</span>
          </div>
          <div class="detail">{{this.$route.params.Fmm_content}}</div>
      </li>    
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
import IndexHeader from "business/indexHeader/indexHeader";
// import axios from "axios";
import config from "@/config/config";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      message: "",
      item: []
    };
  },
  created() {
    this.headerText = "消息"; //设置头部显示导航内容
  },

  components: {
    IndexHeader
  },
  methods: {
    deleateBox() {
      MessageBox({
        title: "提示",
        message: "确定执行此操作?",
        showCancelButton: true
      });
      MessageBox.confirm("确定执行此操作", "提示");
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
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  }
};
</script>
<style lang="less" scoped>
// 二级路由定位
.towLevelRouter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: rgb(245, 245, 245);
}
//我的项目内容区域
.myIntCon {
  // overflow: hidden;
  overflow-x: scroll;
  li {
    background-color: #fff;
    margin-top: 20px;
    // width: 870px;
    // height: 88px;
    overflow: hidden;
    > div {
      float: left;
      padding: 0 30px;
    }
    .detail {
      font-size: 30px;
      font-weight: normal;
      font-stretch: normal;
      line-height: 60px;
      letter-spacing: 3px;
      color: #333333;
      margin: 10px 0 20px;
    }
    .myIntNew {
      width: 690px;
      display: flex;
      justify-content: space-between;
      height: 88px;
      line-height: 88px;
    }
    .myDelate {
      float: left;
      width: 119px;
      height: 88px;
      line-height: 88px;
      color: #fff;
      text-align: center;
      background-color: #f35828;
    }
  }
}
</style>
