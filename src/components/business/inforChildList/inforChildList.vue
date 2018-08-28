<template>
    <div>
        <ul class="listBox">
            <li class="list_li clearfix">
                <div class="fl left_div">
                    <p class="text">京东科统园区企业惊艳亮相 ,多 领域“开花”尽显风采</p>
                    <div class="clearfix">
                        <div class="fl time">2018-08-08</div>
                        <div class="fr">
                            <p class="clearfix readCount">
                                <span class="fl el-icon-view"></span>
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
    data (){
        return {
            
        }
    }
};
</script>
<style lang="less" scoped>
.listBox {
  padding: 0 0.3125rem;
  padding-bottom: 0.3rem;
  li {
    width: 100%;
    height: 5.3125rem;
    margin-top: 0.3125rem;
    .left_div {
      width: 60%;
      height: 100%;
      background: #fff;
      border-radius: 3px 0px 0px 3px;
      .text {
        width: 90%;
        height: auto;
        text-align: left;
        margin: 0.625rem 0 1.5rem 0.625rem;
        font-size: 0.875rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .time {
        font-size: 0.625rem;
        color: #999;
        margin-left: 0.625rem;
      }
      .readCount {
        margin-right: 0.9375rem;
        .count {
          font-size: 0.625rem;
          color: #999;
          line-height: 1rem;
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