<template>
    <div class="activeScreen">
        <header class="topDetail">活动筛选
            <span class="icon_back" @click="backBtnPre"></span> 
        </header>
        <div class="actice-place">
            <span>活动区域</span>
            <div class="actice-input">
                <input type="text" placeholder="选择省-市-区"/>
                <i>▼</i>
            </div>
        </div>
        <div class="actice-time">
            <span>活动时间</span>
            <div class="actice-input">
                <div class="time-left">
                    <input type="text" placeholder="开始时间"/>
                    <i>☷</i>
                </div>
                <div class="time-right">
                    <input type="text" placeholder="结束时间"/>
                    <i>☷</i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        backBtnPre() {
          this.$router.go(-1);
        }
    }    
}
</script>
<style lang="less" scoped>
// body{
//     background: #fff;
// }
// .activeScreen{
//     width: 100%;
//     height:100%;
//     background: #fff;

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
.actice-place{
    margin-top:108px;
    margin-left: 20px;
    span{
        height:58px;
        line-height: 58px;
        font-size: 28px;
        color: #333;
    }
    .actice-input{
        position: relative;
        input{
            width: 95%;
            height:58px;
            background: #e9e7e7;
            border:1px solid #f2f2f2;
            padding-left:10px;
            border-radius: 4px;
        }
        i{
            position: absolute;
            right:40px;
            top:20px;
        }
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
        .time-left{
            position: relative;
            width: 36%;
            margin-right: 5%;
            input{
                width: 95%;
                height:58px;
                background: #e9e7e7;
                border:1px solid #f2f2f2;
                padding-left:10px;
                border-radius: 4px;
            }
            i{
                position: absolute;
                right:35px;
                top:16px;
                font-size: 34px;
            }
        }
        .time-right{
            width: 36%;
            position: relative;
            input{
                width: 95%;
                height:58px;
                background: #e9e7e7;
                border:1px solid #f2f2f2;
                padding-left:10px;
                border-radius: 4px;
            }
            i{
                position: absolute;
                right:35px;
                top:16px;
                font-size: 34px;
            }
        }
    }
    
}  
</style>


