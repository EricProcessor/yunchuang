<template>
  <ul>
    <li>
      <div class="left">

      </div>
      <div class="right">
        <dd>
          <h4>项目---{{toggleInt}}</h4>
          <span class="intName">DMIAES</span>
        </dd>
        <dd>
          <h4>约谈时间</h4>
          <span>2018-07-17 15:31:06</span>
        </dd>
        <dd>
          <h4>约谈人</h4>
          <span>成都盈创兴</span>
        </dd>
        <dd>
          <h4>角色</h4>
          <span>投资人</span>
        </dd>
        <dd>
          <h4>约谈地点</h4>
          <span>北京市朝阳区91创新中心5F大厅91创新中心5F</span>
        </dd>
      </div>
    </li>
    
  </ul>
</template>
<script>
import axios from "axios";
import config from "@/config/config";
export default {
  props: ["toggleInt"],
  mounted() {
    this.inforData();
  },
  methods: {
    //获取后台数据
    inforData() {
      let _url = config.host + "h5frontmembercentre-home";     
      // if (toggleInt == 1) {
      //   let _url = config.host + "h5frontmembercentre-home";
      // }
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
// 我的约谈、被约谈列表样式
ul {
  li {
    padding-left: 30px;
    background: #fff;
    overflow: hidden;
    margin: 10px 0;
    .left {
      float: left;
      width: 120px;
      height: 120px;
      background-color: #cad3dc;
      margin-right: 30px;
      margin-top: 30px;
    }
    .right {
      float: left;
      width: 568px;
      dd {
        margin: 30px 0;
        padding-right: 62px;
        h4 {
          height: 48px;
          line-height: 48px;
          font-size: 20px;
          letter-spacing: 2px;
          color: #666666;
        }
        span {
          height: 40px;
          line-height: 40px;
          font-size: 24px;
          letter-spacing: 2px;
          color: #444444;
        }
        .intName {
          font-size: 30px;
          letter-spacing: 3px;
          color: #333333;
        }
      }
    }
  }
}
</style>