<template>
    <div class="searchAfterList">
        <ul class="listBox">
            <li class="list_li clearfix" id="item.faiId||item.fpiId||item.fciId" @click="linkInforDetail(item.faiId||item.fpiId||item.fciId)" v-for="(item,index) in items" :key="index">
                <div class="fl left_div">
                   <p class="text">{{item.faiAddress||item.fpiName||item.fmiUsername||item.fciTitle}}</p>
                    <div class="clearfix">
                        <div class="fl time">{{item.faiPublishorg||item.fcaName}}</div>
                        <div class="fr">
                            <p class="clearfix readCount">
                                <span data-v-397fe9a0="" class="fl icon_num"></span>
                                <span class="fl count">{{item.faiSource||item.fpiExamine||item.fciExamine}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="fl right_div">
                    <img :src="item.faiPath||item.fpiUrl||item.fmiPath||item.fciPath" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "searchAfterList",
  data() {
    return {
      Title2: ""
    };
  },
  props: ["items", "SearchClass", "fcaName"],
  methods: {
    // 点击列表跳转到详情
    linkInforDetail(id) {
      // this.$router.push("/inforDetail");
      if (this.SearchClass == "C") {
        //创业资讯

        this.$router.push({
          path: `/information/${id}/${this.fcaName}`
        });
      } else if (this.SearchClass == "H") {
        this.$router.push({
          path: `/activeDetail/${id}/`
        });
        // 创业活动
      }
      // this.$router.push({
      //   path: `/information/${id}/`
      //   // name: "inforDetail",
      //   // params: { paicheNo: itemId }
      // });
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