<template>
    <div class="searchAfterList">
        <ul class="listBox">
            <li class="list_li clearfix" @click="linkInforDetail" v-for="(n,v) in 4" :key="v">
                <div class="fl left_div">
                    <p class="text">UI设计全国巡演</p>
                    <div class="clearfix">
                        <div class="fl time">博文天地</div>
                        <div class="fr">
                            <p class="clearfix readCount">
                                <span data-v-397fe9a0="" class="fl icon_num"></span>
                                <span class="fl count">123</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="fl right_div">
                    <img src="../../../../static/images/business_2.jpg" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "searchAfterList",
  data() {
    return {};
  },
  methods: {
    // 点击列表跳转到详情
    linkInforDetail() {
      this.$router.push("/inforDetail");
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
  padding-bottom: 10px;
  li {
    width: 100%;
    height: 170px;
    margin-top: 10px;
    .left_div {
      width: 60%;
      height: 100%;
      background: #fff;
      border-radius: 6px 0px 0px 6px;

      .text {
        width: 90%;
        color: #333;
        font-size: 14px;
        height: auto;
        text-align: left;
        margin: 20px 0 40px 20px;
        font-size: 24px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        min-height: 60px;
      }
      .time {
        font-size: 20px;
        color: #999;
        margin-left: 20px;
        border: 1px solid #dfdfdf;
        padding: 4px;
      }
      .readCount {
        margin-right: 14px;
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