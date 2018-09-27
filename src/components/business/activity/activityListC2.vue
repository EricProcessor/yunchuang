<template>
    <div>       
        <ul class="listBox">
            <li class="list_li clearfix" v-for="(val,index) in activeList" :key="index">
                <div class="ac-img">
                    <router-link :to="'/activeDetail/'+val.faiId"><img :src="val.faiPath" alt=""/></router-link>  
                </div>    
                <div class="ac-mes">
                   <p>{{val.faiName}}</p>
                   <span>已报名：<em>{{val.faiPerNum}}</em>人</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
        activeList:[]
    };
  },
  methods: {

  },
  mounted(){
          this.axios.post("/h5frontactivityinfo-foreshow?type=W").then(res => {
            this.activeList=res.data.list
            // console.log(this.activeList)
         })      
  }
};
</script>
<style lang="less" scoped>
.listBox{
    width: 100%;
    background: #f2f2f2;
    li{
        width:97%;
        margin-left:1.5%;
        margin-top:29px;
        margin-bottom: 29px;
        display: flex;
        flex-direction: column;
        .ac-img{
            width:100%;
            height:320px;
            border-radius: 5px;
            img{
                width: 100%;  
                height:100%;            
            }
        }
        .ac-mes{
            width:100%;
            height:80px;
            display: flex;
            background: #fff;
            justify-content: space-around;
            p{
                height:80px;
                font-size: 28px;
                line-height: 80px;
                color:#333;
            }
            span{
                height:80px;
                line-height: 80px;
                font-size: 14px;
                color: #999;
            }
        }
    }

}

</style>