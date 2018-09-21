<template>
  <div class="screen">
    <!-- header部分 -->
    <index-header text="筛选结果" :hasSearch="false">
      <span @click="activeScreen" class="screen-result">筛选</span>
    </index-header>
    <ul>
      <li v-for="(val,index) in screenResult" :key="index"  @click="activeDetail(val.faiId)">
        <div class="screen-con">
          <p class="pOne">{{val.faiName}}</p>
          <p class="pTwo"><i></i> {{val.faiAddress}}</p>
        </div>
        <div class="screen-img">          
          <img :src="val.faiPath" alt=""></div>
      </li>
    </ul>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
export default {
      data(){
        return{
           screenResult:'',
            area_id:'',     // 区/县
           province_id:'', // 省
           city_id:'',     //市
           begintime:'',   //开始时间
           endtime:'' ,    //结束时间  
           type:""
        }        
      },
      components: {
        IndexHeader,
      },
      methods: {
        backBtnPre() {                        //返回上一级
          this.$router.go(-1);
        },
        activeDetail(id) {
          this.$router.push('/activeDetail/'+id); //跳转详情页
        },
        activeScreen(){                         //跳转结果页
          this.$router.push('/activeScreen');
        }         
      },
      mounted(){
        let url = "/h5frontactivityinfo-foreshow";
        let params={
          province_id:this.$route.query.province_id,
          city_id:this.$route.query.city_id,
          area_id:this.$route.query.area_id,
          begintime:this.$route.query.begintime,
          endtime:this.$route.query.endtime,
          type:this.$route.query.type
        }
        this.axios.post(url,params).then(res=>{
          if(res.data.list){
            this.screenResult = res.data.list
          }else{
            alert("没有筛选到数据")
          }
          // console.log(this.screenResult)
        })
        // console.log(this.$route.query.begintime) 
      }
};
</script>
<style lang="less" scoped>
.screen{
  background: #f2f2f2;
    .screen-result{
      height: 86px;
      line-height: 86px;
      position: absolute;
      right:20px;
      font-size: 24px;;
      color: #fff;
  }
  ul{
    display: flex;
    flex-direction: column;
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
