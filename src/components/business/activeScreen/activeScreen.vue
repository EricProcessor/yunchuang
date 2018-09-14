<template>
    <div class="activeScreen">
        <header class="topDetail">活动筛选
            <span class="icon_back" @click="backBtnPre"></span> 
        </header>
        <div class="middle">
            <activeScreenOne></activeScreenOne>
            <div class="actice-time">
                <span>活动时间</span>
                <div class="actice-input">
                    <activeScreenTwo @selectDateOne="selectFromD1"></activeScreenTwo>
                    <activeScreenC3 @selectDateTwo="selectFromD2"></activeScreenC3>
                </div>
            </div>             
        </div>
        <footer>
            <button class="btn"  @click="commitBox">确定</button>
        </footer>   
    </div>
</template>
<script>
import activeScreenOne from "business/activeScreen/activeScreenC1";
import activeScreenTwo from "business/activeScreen/activeScreenC2";
import activeScreenC3 from "business/activeScreen/activeScreenC3";
import { MessageBox } from "mint-ui";
import {Popup} from 'mint-ui';
import {Picker} from 'mint-ui';
export default {
     data() {
        return {
            simpDateD1: "",         //简单日期         
             area_id:'',
             province_id:'',
             city_id:'',
             begintime:'',
             endtime:''   
        }
    },
    methods: {
        backBtnPre() {
          this.$router.go(-1);
        },
        selectDateOne(){

        },
        // screenResult(){
        //     this.$router.push({
        //       path: "/screenResult"
        //     });
        // },
       commitBox() {
           this.$router.push({
                path: "/screenResult",
                query:{
                    begintime:this.simpDateD1,
                    endtime:this.simpDateD2
                }
            });
            
        //   console.log(this.simpDateD1)   
        //    console.log(this.simpDateD2)       
        },
        selectFromD1(val){
            this.simpDateD1 = val           
        },
         selectFromD2(val){
            this.simpDateD2 = val
            // console.log(this.simpDateD2)
        }    
    },
    components:{
        'mt-popup':Popup,
        'mt-picker':Picker,
         activeScreenOne,
         activeScreenTwo,
         activeScreenC3
    }    
    
}
</script>
<style lang="less" scoped>
.activeScreen{
    height:100%;
    display: flex;
    flex-direction: column;
    position: relative;
}
.topDetail {
  width: 100%;
  height: 86px;
  line-height: 86px;
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
.middle{
    flex: 1;
}
.actice-place{
    margin-top:108px;
    margin-left: 20px;
    span{
        height:58px;
        line-height: 58px;
        font-size: 28px;
        color: #333;
    }    
}  
.actice-time{
    margin-top:40px;
    margin-left: 20px;
    span{
        height:58px;
        line-height: 58px;
        font-size: 28px;
        color: #333;
    }
    .actice-input{
        position: relative;
        display: flex;
    }   
}   
footer{
    width: 100%;
    height:85px;
    position: fixed;
    bottom:0;
      .btn {
     width: 100%;
     height:85px;
     background: #6ea1ff;
     text-align: center;
     line-height: 85px;
     color: #fff;
     font-size: 24px;
     border-radius: 2px;
   }
} 
</style>


