<template>
  <div>
    <!-- header部分 -->
    <header class="topDetail">活动详情
      <span class="icon_back" @click="backBtnPre"></span>    
    </header>
    <!-- 详情 -->
    <div class="detail">
      <div class="detail-title">
        <span>2018中国创业武林大会</span>
      </div>
      <ul>
        <li>
          <label><i>●</i><i>目标定位</i></label>
          <p>电商平台店铺行业分析、电商平台店铺基准定位、电商平台
            店铺目标分解规划、电商平台店铺活动促销视觉规划
          </p>
        </li>
        <li>
          <label><i>●</i><i>举办时间</i></label>
          <p>2018年6月19日 上午12:00-2018年12月31日 上午12:00
          </p>
        </li>
        <li>
          <label><i>●</i><i>举办地点</i></label>
          <p>创新园京东云电商创新中心5F路演大厅
          </p>
        </li>
        <li>
          <label><i>●</i><i>活动主题</i></label>
          <p>2018年中国创业武林大会
          </p>
        </li>
        <li>
          <label><i>●</i><i>参与人员</i></label>
          <p>宋海讲师
          </p>
        </li>
        <li>
          <label><i>●</i><i>报名人数</i></label>
          <p>82
          </p>
        </li>
        <li>
          <label><i>●</i><i>活动内容</i></label>
          <p>电商平台店铺行业分析、电商平台店铺基准定位、电商平台
            店铺目标分辨规划、电商平台店铺活动促销视觉规划
          </p>
        </li>
        <li>
          <label><i>●</i><i>联系人</i></label>
          <p>刘一鸣：1852095477
          </p>
        </li>
      </ul>  
    </div>
    <span class="ac-bao" @click="showAddressPicker">报名</span>
    <mt-popup
    v-model="popupVisible"
    >
    sadasd
    </mt-popup>
  </div>
</template>
<script>
import Vue from 'vue'
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
export default {
  data() {
    return {
      popupVisible:false
    };
  },
  methods: {
    backBtnPre() {
      this.$router.go(-1);
    },
    //打开popup
    showAddressPicker(){
      this.popupVisible = true;
    },
  }
};
</script>
<style lang="less" scoped>
.topDetail {
  width: 100%;
  height: 88px;
  line-height: 88px;
  text-align: center;
  font-size: 36px;
  color: #fff;
  background: #253350;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  .icon_back {
    display: block;
    width: 40px;
    height:46px;
    background: url("./backBtn.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 20px;
    left: 30px;
    z-index: 3;
  }
}
.detail {
  margin-top: 90px;
  padding: 0 1rem;
    .detail-title {
      width: 100%;
      padding: .4rem 0;
      font-size: .425rem;
      font-stretch: normal;
    }
   ul{
     li:nth-child(1){
       margin-top: .2125rem;
     }
     li{
       width: 100%;
       display: flex;
       flex-direction: column;
       margin-top: 75px;
       label{
         width: 100%;
         height:.425rem;
         line-height: .425rem;
         font-size: .285rem;
         color: #666;
       }
       p{
         width: 100%;
         height:.425rem;
         line-height: .425rem;
         font-size: .275rem;
         color: #333;
         margin-left: .1975rem;
       }
     }    
   }
  
}
.ac-bao{
  display: block;
  width: 100%;
  height:85px;
  text-align: center;
  line-height: 85px;
  background: #6ea1ff;
  color: #fff;
  font-size: 25px;
  position: fixed;
  bottom:0;
}
</style>
