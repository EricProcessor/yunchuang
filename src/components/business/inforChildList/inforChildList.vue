<template>
  <div>
    <!-- <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"> -->
    <ul class="listBox">
      <li class="list_li clearfix" @click="linkInforDetail" v-for="(n,v) in 5" :key="v">
        <div class="fl left_div">
          <p class="text">京东科统园区企业惊艳亮相 ,多 领域“开花”尽显风采</p>
          <div class="clearfix">
            <div class="fl time">2018-08-08</div>
            <div class="fr">
              <p class="clearfix readCount">
                <span class="fl icon_num"></span>
                <span class="fl count">123</span>
              </p>
            </div>
          </div>
        </div>
        <div class="fl right_div">
          <img src="/static/images/business_2.jpg" alt="">
        </div>
      </li>
    </ul>
    <!-- </mt-loadmore> -->
  </div>

</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
    };
  },
  mounted() {
    this.inforData();
  },
  methods: {
    linkInforDetail() {
      this.$router.push("/infordetail");
    },
    //获取后台数据
    inforData() {
      let _url = "/api/frontcarrierinfotop-home";
      axios.get(_url).then(res => {
        console.log(res);
      });
    }
  }
};
</script>
<style lang="less" scoped>
.listBox {
  padding: 0 10px;
  padding-bottom: 5px;
  li {
    width: 100%;
    height: 170px;
    margin-top: 10px;
    .left_div {
      width: 60%;
      height: 100%;
      background: #fff;
      border-radius: 3px 0px 0px 3px;
      .text {
        width: 90%;
        height: auto;
        line-height: 40px;
        text-align: left;
        margin: 20px 0 30px 20px;
        font-size: 28px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .time {
        font-size: 20px;
        color: #999;
        margin-left: 20px;
      }
      .readCount {
        margin-right: 30px;
        .icon_num {
          display: block;
          width: 48px;
          height: 36px;
          background: url("./readNum.png") no-repeat center center;
          background-size: 100% 100%;
        }
        .count {
          font-size: 20px;
          color: #999;
          line-height: 40px;
          padding-left: 2px;
        }
      }
    }
    .right_div {
      width: 40%;
      height: 100%;
      border-radius: 0px 3px 3px 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0px 3px 3px 0;
      }
    }
  }
}
</style>