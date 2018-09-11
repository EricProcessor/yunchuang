<template>
  <div>
    <!-- header部分 -->
    <header class="topDetail">活动详情
      <span class="icon_back" @click="backBtnPre"></span>    
    </header>
    <!-- 详情 -->
    <div class="detail">
      <div class="detail-title">
        <span>{{this.activeDetail.faiName}}</span>
      </div>
      <ul>
        <li>
          <label><i>●</i><i>目标定位</i></label>
          <p>{{this.activeDetail.faiGoal}}</p>
        </li>
        <li>
          <label><i>●</i><i>举办时间</i></label>
          <p>{{this.activeDetail.faiDatetime | formatDate}} ─ {{this.activeDetail.faiEndDatetime | formatDate}}</p>
        </li>
        <li>
          <label><i>●</i><i>举办地点</i></label>
          <p>{{this.activeDetail.faiAddress}}</p>
        </li>
        <li>
          <label><i>●</i><i>活动主题</i></label>
          <p>{{this.activeDetail.faiTitle}}</p>
        </li>
        <li>
          <label><i>●</i><i>参与人员</i></label>
          <p>{{this.activeDetail.faiParticipant}}</p>
        </li>
        <li>
          <label><i>●</i><i>报名人数</i></label>
          <p>{{this.activeDetail.faiPerNum}}</p>
        </li>
        <li>
          <label><i>●</i><i>活动内容</i></label>
          <p>{{this.activeDetail.faiContent}}</p>
        </li>
        <li>
          <label><i>●</i><i>联系人</i></label>
          <p>{{this.activeDetail.faiLinkman}}:{{this.activeDetail.faiTel}}</p>
        </li>
      </ul>  
    </div>
    <span class="ac-bao" @click="showAddressPicker">报名</span>
    <mt-popup v-model="popupVisible">
      <div class="popupBox">
        <i @click="closeAddressPicker">✖</i>
        <ul>
            <li>
              <label>活动名称：</label><span>2018中国创业舞林大会</span>
            </li>
            <li class="mh">
              <label>活动时间：</label><span>2018年6月19日<br>上午12：00到0:00</span>
            </li>
            <li class="mh">
              <label>活动地点：</label><span>创新园京东云电商创新中心5F路演大厅</span>
            </li>
            <li>
              <label class="mw">联系人：</label><input type="text"/>
            </li>
            <li>
              <label>联系电话：</label><input type="text"/>
            </li>
        </ul>
        <button>提交</button>
      </div>
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
      popupVisible:false,
      activeDetail:[]
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
    //关闭popup
    closeAddressPicker(){
      this.popupVisible = false;
    },
  },
  filters: {
      formatDate: function (value) {
        let date = new Date(value);
        let y = date.getFullYear();
        let MM = date.getMonth() + 1;
        MM = MM < 10 ? ('0' + MM) : MM;
        let d = date.getDate();
        d = d < 10 ? ('0' + d) : d;
        let h = date.getHours();
        h = h < 10 ? ('0' + h) : h;
        let m = date.getMinutes();
        m = m < 10 ? ('0' + m) : m;
        let s = date.getSeconds();
        s = s < 10 ? ('0' + s) : s;
        return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
  },
  mounted(){
    var id = this.$route.params.id
    // console.log(id)
    this.axios.post("/h5frontactivityinfo-item/"+id+"").then(res => {
          this.activeDetail=res.data.ai       
    }) 
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
.popupBox{
  width:580px;
  height:680px;
  position: relative;
  i{
    position: absolute;
    right:8px;
    top:8px;
  }
  ul{
    padding-top: 50px;
    li{
      height:38px;
      padding:25px 26px;
      display: flex;
      letter-spacing: 1px;
      color: #333;
      label{
        width: 130px;
        line-height: 36px;
        text-align: end;
      }
      .mw{
        letter-spacing: 7px;
      }
      span{
        width: 350px;
        line-height: 36px;
      }
      input{
        width: 340px;
        height:40px;
        background: #f2f2f2;
        border:1px solid rgb(226, 226, 226);
      }
    }
    .mh{
      height:48px;
    }
  }
  button{
    width: 258px;
    height:54px;
    text-align: center;
    line-height:27px;
    margin-left:154px;
    margin-top:60px;
    background: #6ea1ff;
    color: #fff;
    font-size: 26px;
    border:0;
    border-radius: 5px;
  }
}
</style>
