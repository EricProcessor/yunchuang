<template>
  <div class="towLevelRouter">
    <index-header :text="headerText" :hasSearch="false"></index-header>
    <ul class="myIntCon">
      <li>
          <div class="myIntNew">
            <span>会员审核通过通知</span>
            <span>2018-09-12 00:00:00</span>
          </div>
          <p class="myDelate" @click="deleateBox">删除</p>
          <!-- <button class="mint-button mint-button--default mint-button--large">
            <label class="mint-button-text">打开 confirm 提示框</label>
          </button> -->
      </li>
    </ul>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import axios from "axios";
import config from "@/config/config";
import { MessageBox } from "mint-ui";
export default {
  data: {
    message: ""
  },
  created() {
    this.headerText = "我的消息"; //设置头部显示导航内容
  },

  components: {
    IndexHeader
  },
  mounted() {
    this.inforData();
  },
  methods: {
    //获取后台数据
    inforData() {
      let _url = config.host + "/h5frontmessage-home";
      let params = new URLSearchParams();
      // params.append("selType", this.serachSend.SearchClass);
      // params.append("KeyWord", encodeURI(encodeURI(this.serachSend.searchVal)));
      axios.post(_url).then(res => {
        // this.items = res.data;
        console.log(res.data);
      });
    },
    deleateBox() {
      MessageBox({
        title: "提示",
        message: "确定执行此操作?",
        showCancelButton: true
      });
      MessageBox.confirm("确定执行此操作", "提示");
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
    width: 870px;
    height: 88px;
    .myIntNew {
      width: 690px;
      padding: 0 30px;
      display: flex;
      justify-content: space-between;
      height: 88px;
      line-height: 88px;
      float: left;
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