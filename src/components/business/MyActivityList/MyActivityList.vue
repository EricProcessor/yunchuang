<template>
  <ul class="myIntCon">
    <li>
      <div class="myIntConImg">
        <img src="" alt="">
      </div>
      <div class="myIntConInf">
        <h3>2018中国创业武林大会</h3>
        <span>2018-07-17 至 08-21</span>
      </div>
      <div class="myIntState">已结束</div>
    </li>
    <li>
      <div class="myIntConImg">
        <img src="" alt="">
      </div>
      <div class="myIntConInf">
        <h3>2018中国创业武林大会</h3>
        <span>2018-07-17 至 08-21</span>
      </div>
      <div class="myIntState start">进行中</div>
    </li>
  </ul>
</template>
<script>
import axios from "axios";
import config from "@/config/config";
export default {
  mounted() {
    this.inforData();
  },
  methods: {
    //获取后台数据
    inforData() {
      let _url = config.host + "h5frontmyattentionproject-home";
      let params = new URLSearchParams();
      // params.append("selType", this.serachSend.SearchClass);
      // params.append("KeyWord", encodeURI(encodeURI(this.serachSend.searchVal)));
      axios.post(_url).then(res => {
        // this.items = res.data;
        console.log(res.data);
      });
    }
  }
};
</script>
<style lang="less" scoped>
//我的活动内容
.myIntCon {
  overflow: hidden;
  li {
    width: 750px;
    height: 180px;
    background-color: #fff;
    margin: 10px 0;
    display: flex;
    align-items: center;
    .myIntConImg {
      width: 120px;
      height: 120px;
      background-color: #cad3dc;
      margin: 0 30px;
    }
    .myIntConInf {
      h3 {
        font-size: 30px;
        height: 48px;
        // line-height: 60px;
        color: #333333;
        letter-spacing: 3px;
      }
      span {
        font-size: 20px;
        letter-spacing: 2px;
        color: #999999;
      }
    }
    .myIntState {
      position: absolute;
      right: 0px;
      width: 120px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background-color: #999999;
      color: #fff;
      border-radius: 25px 0 0px 25px;
    }
    .start {
      background-color: #f35828;
    }
  }
}
</style>
