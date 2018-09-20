<template>
  <ul class="myIntCon" >
    <li :id='item.fai_id' v-for="(item,index) in items" :key="index"  @click="activeDetail(item.fai_id)">
      <div class="myIntConImg" :id="item.id">
        <img :src="item.fai_path" alt="">
      </div>
      <div class="myIntConInf">
        <h3>{{item.fai_name}}</h3>
        <span>{{item.fai_datetime | formatDate}} 至 {{item.fai_end_datetime | formatDate}}</span>
      </div>
      <div class="myIntState" :class="item.status=='进行中'?'start':''">{{item.status}}</div>
    </li>
    <!-- <li>
      <div class="myIntConImg">
        <img src="" alt="">
      </div>
      <div class="myIntConInf">
        <h3>2018中国创业武林大会</h3>
        <span>2018-07-17 至 08-21</span>
      </div>
      <div class="myIntState start">进行中</div>
    </li> -->
  </ul>
</template>
<script>
import axios from "axios";
// import config from "@/config/config";
export default {
  data() {
    return {
      items: []
    };
  },
  mounted() {
    this.inforData();
  },
  methods: {
    //获取后台数据
    inforData() {
      let _url = "/h5frontmyactivity-home";
      let params = new URLSearchParams();
      // params.append("selType", this.serachSend.SearchClass);
      // params.append("KeyWord", encodeURI(encodeURI(this.serachSend.searchVal)));
      axios.post(_url).then(res => {
        this.items = res.data.activityList;
        console.log(res.data.activityList);
      });
    }
  },
  activeDetail(id) {
      this.$router.push('/activeDetail/'+id); //跳转详情页
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
      img {
        width: 100%;
        height: 100%;
      }
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
