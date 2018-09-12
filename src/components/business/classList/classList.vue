<template>
    <div class="class-list">
        <div class="list-box">
            <li class="list_li" 
                v-for="(val, index) in listData" 
                @click="_routerGo(val.fdpId)" 
                :key="index">

                <div class="fl left_div">
                    <p class="text">{{val.fdpTitle}}</p>
                    <input type="hidden" class="fcaId"  />
                    <div class="clearfix countTip">
                        <div class="fl time"></div>
                        <div class="fr">
                            <p class="readCount">
                                <span class="icon_num"></span>
                                <span class="count">{{val.fpdExamine}}</span>

                                <span class="icon_num1"></span>
                                <span class="count">{{val.fpdPraise}}</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="fl right_div">
                    <img v-lazy="val.fpdCoverPath" alt="">
                </div>
            </li>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        listData: {
            type: Array
        }
    },
    methods: {
        _routerGo() {

        }
    }
}
</script>
<style lang="less" scoped>
.list-box {
  padding: 0 10px;
  padding-bottom: 5px;
  li {
    width: 100%;
    height: 170px;
    margin-top: 10px;
    list-style: none;
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
          .icon_num1 {
            display: inline-block;
            width: 34px;
            height: 30px;
            margin-top: -3px;
            background: url("./noGood.png") no-repeat center center;
            background-size: 100% 100%;
            position: relative;
            top: 6px;
            right: -6px;
          }
          .icon_num2 {
            display: inline-block;
            width: 34px;
            height: 30px;
            margin-top: -3px;
            background: url("./isGood.png") no-repeat center center;
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

