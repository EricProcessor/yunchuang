<template>
  <div>
    <ul class="listBox">
      <!-- <li class="list_li clearfix" @click="linkInforDetail" v-for="(val,index) in item" :key="index">
        <div class="fl left_div">
          <p class="text">{{val.fciTitle}}</p>
          <input type="hidden" class="fcaId" :value="val.fciId" />
          <div class="clearfix">
            <div class="fl time">{{val.fciDatetime}}</div>
            <div class="fr">
              <p class="clearfix readCount">
                <span class="fl icon_num"></span>
                <span class="fl count">{{val.fciExamine}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="fl right_div">
          <img v-lazy="val.fciPath" alt="">
        </div>
      </li> -->
    </ul>
  </div>

</template>
<script>
export default {
  props: ["lsit"],
  data() {
    return {};
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
        height: 75px;
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
          width: 28px;
          height: 24px;
          margin-top: 8px;
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