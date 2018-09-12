<template>
  <div class="screen">
    <!-- header部分 -->
    <header class="screen-title">筛选结果
      <span class="icon_back" @click="backBtnPre"></span> 
      <span class="screen-result" @click="activeScreen">筛选</span>
    </header>
    <ul>
      <li v-for="(val,index) in screenResult" :key="index"  @click="activeDetail">
        <div class="screen-con">
          <p class="pOne">{{val.faiName}}</p>
          <p class="pTwo"><i></i> {{val.faiAddress}}</p>
        </div>
        <div class="screen-img"><img :src="val.faiPath" alt=""></div>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
        data(){
          return{
             screenResult:''
            //  area_id:'',
            //  province_id:'',
            //  city_id:'',
            //  begintime:'',
            //  endtime:''
          }        
        },
        methods: {
          backBtnPre() {
            this.$router.go(-1);
          },
          activeDetail() {
            this.$router.push('/activeDetail');
          },
          activeScreen(){
            this.$router.push('/activeScreen');
          }         
        },
        mounted(){
         3
            
          params.append('area_id', JSON.stringify(this.screenResult.areaId));
           console.log(JSON.stringify(this.screenResult.areaId))
          // console.log(this.val.areaId)
          // params.append('province_id', 'this.val.provinceId');
          // params.append('city_id', 'this.val.cityId');
          // params.append('begintime', 'this.val.faiDatetime');
          // params.append('endtime', 'this.val.faiEndDatetime');
          this.axios.post("/h5frontactivityinfo-foreshow",{
            
          }).then(res=>{
            this.screenResult = res.data.list
            // console.log(this.screenResult)
          })
        }
    };
</script>s
<style lang="less" scoped>
.screen{
  background: #f2f2f2;
  .screen-title {
    position: relative;
    width: 100%;
    height: 86px;
    text-align: center;
    line-height: 86px;
    font-size: 30px;
    color: #fff;
    background: #253350;
    position: fixed;
    top: 0;
    left: 0;
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
    .screen-result{
      height: 86px;
      line-height: 86px;
      position: absolute;
      right:20px;
      font-size: 24px;;
      color: #fff;
    }
  }
  ul{
    display: flex;
    flex-direction: column;
    margin-top: 88px;
    li{
      width: 96%;
      height:170px;
      margin-left:2%;
      margin-top:10px;
      background: #fff;
      display: flex;
      .screen-con{
        width: 60%;
        height:170px;
        p{
          position: relative;
          height:75px;
          line-height: 75px;
          margin-left: 20px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          
          i{
            position: absolute;
            top:13px;
            left:-10px;
            display:block;
            width: 44px;
            height:48px;
            background: url("./address.png") no-repeat;
            transform: scale(0.5,0.5)
          } 
        }
        .pOne{
          font-size: 29px;
        }
        .pTwo{
          font-size: 12px;
          color: #999;
          padding-left: 35px;
        }
      }
      .screen-img{
        width: 40%;
        height:170px;
        img{
          width: 100%;
          height:100%;
        }
      }
    } 
  }
  
}
</style>
