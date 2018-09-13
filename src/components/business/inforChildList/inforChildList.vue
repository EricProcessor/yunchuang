<template>
  <div>
    <ul class="listBox">
      <li class="list_li clearfix" v-if="title!='创业政策'" @click="linkInforDetail(val.fciId)" v-for="(val,index) in list" :key="index">
        <div class="fl left_div">
          <p class="text">{{val.fciTitle}}</p>
          <input type="hidden" class="fcaId" :value="val.fciId" />
          <div class="clearfix countTip">
            <div class="fl time">{{val.fciDatetime}}</div>
            <div class="fr">
              <p class="readCount">
                <span class="icon_num"></span>
                <span class="count">{{val.fciExamine}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="fl right_div">
          <img v-lazy="val.fciPath" alt="">
        </div>
      </li>
      <li class="list_li clearfix" v-if="title=='创业政策'" @click="linkInforDetail(val.fpiId)" v-for="(val,index) in list" :key="index">
        <div class="fl left_div">
          <p class="text">{{val.fpiName}}</p>
          <input type="hidden" class="fcaId" :value="val.fpiId" />
          <div class="clearfix countTip">
            <div class="fl time">{{val.fpiDatetime}}</div>
            <div class="fr">
              <p class="readCount">
                <span class="icon_num"></span>
                <span class="count">{{val.fpiExamine}}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="fl right_div">
          <img v-lazy="val.fpiUrl" alt="">
        </div>
      </li>
    </ul>
  </div>

</template>
<script>
export default {
  props: ["list", "title"],
  data() {
    return {};
  },
  methods: {
    linkInforDetail(id) {
      this.$router.push({
        path: `/information/${id}/${this.title}` 
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
      .countTip {
        line-height: 40px;
        .time {
          font-size: 20px;
          color: #999;
          margin-left: 20px;
        }
        .readCount {
          margin-right: 30px;
          .icon_num {
            display: inline-block;
            width: 34px;
            height: 30px;
            margin-top: -3px;
            background: url("./readNum.png") no-repeat center center;
            background-size: 100% 100%;
            position: relative;
            top: 6px;
            right: -6px;
          }
          .count {
            font-size: 20px;
            color: #999;
          }
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