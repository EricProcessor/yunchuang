<template>
  <ul>
    <li :id="item.fcp_id" v-for="(item,index) in items" :key="index">
      <div class="left">
        <img :src="item.FCP_LOGO" alt="">
      </div>
      <div class="right">
        <dd>
          <h4>项目</h4>
          <span class="intName">{{item.fcp_name}}</span>
        </dd>
        <dd>
          <h4>约谈时间</h4>
          <span>{{item.fai_datatime|formatDate}}</span>
        </dd>
        <dd>
          <h4>约谈人</h4>
          <span>{{item.fai_sponsor}}</span>
        </dd>
        <dd>
          <h4>角色</h4>
          <span>投资人</span>
        </dd>
        <dd>
          <h4>约谈地点</h4>
          <span>{{item.fai_address}}</span>
        </dd>
      </div>
    </li>
    
  </ul>
</template>
<script>
import axios from "axios";
import config from "@/config/config";
export default {
  data() {
    return {
      items: []
    };
  },
  props: ["toggleInt"],
  mounted() {
    this.inforData();
  },
  methods: {
    //获取后台数据
    inforData() {
      // let _url = config.host + "h5frontmembercentre-home";
      // if (toggleInt == 1) {
      //   let _url = config.host + "h5frontmembercentre-home";
      // }
      let _url = "";
      if (this.toggleInt == 1) {
        _url = "/h5frontmyagreementtalk-home";
      } else {
        _url = "/h5frontmybyagreementtalk-home";
      }
      let params = new URLSearchParams();
      // params.append("selType", this.serachSend.SearchClass);
      // params.append("KeyWord", encodeURI(encodeURI(this.serachSend.searchVal)));
      axios.post(_url).then(res => {
        if (this.toggleInt == 1) {
          this.items = res.data.talkList;
        } else {
          this.items = res.data.bytalkList;
        }

        console.log(this.items);
      });
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
      img {
        width: 100%;
        height: 100%;
      }
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