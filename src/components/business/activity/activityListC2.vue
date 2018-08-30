<template>
    <div>       
        <ul class="listBox">
            <li class="list_li clearfix" @click="linkInforDetail" v-for="(val,index) in 3" :key="index">
                <div class="ac-img"><img src="/static/images/ac-pic2.jpg" alt=""/></div>
                <div class="ac-mes">
                   <p>2018 中国创新峰会</p>
                   <span>已报名：<em>80</em>人</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    linkInforDetail() {
        this.$router.push({
            path: '/inforDetail'
        });
    }
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
        margin-top:.15625rem;
        margin-bottom: .15625rem;
        display: flex;
        flex-direction: column;
        .ac-img{
            width:100%;
            height:5rem;
            border-radius: .125rem;
            img{
                width: 100%;  
                height:100%;            
            }
        }
        .ac-mes{
            width:100%;
            height:1.1275rem;
            display: flex;
            background: #fff;
            justify-content: space-around;
            p{
                height:1.1275rem;
                font-size: .39875rem;
                line-height: 1.1275rem;
            }
            span{
                height:1.1275rem;
                line-height: 1.1275rem;
                font-size: 0.275rem;
                color: #999;
            }
        }
    }

}

</style>