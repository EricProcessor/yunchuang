<template>
    <div>       
        <ul class="listBox">
            <li class="list_li clearfix" @click="linkActDetail" >
                <div class="ac-img"><img src="/static/images/ac-pic1.jpg" alt=""/></div>
                <div class="ac-mes">
                   <p>2018Demo Asia 创新中国亚洲峰会</p>
                   <span>已报名：<em>86</em>人</span>
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
        this.$router.push('/inforDetail');
    }
  }
};
</script>
<style lang="less" scoped>
.listBox{
    width: 100%;
    background: #f2f2f2;
    li{
        width:98%;
        margin-left:1%;
        margin-top:3px;
        margin-bottom: 3px;
        display: flex;
        flex-direction: column;
        .ac-img{
            width:100%;
            height:16rem;
            img{
                width: 100%;  
                height:100%;            
            }
        }
        .ac-mes{
            width:100%;
            height:38px;
            display: flex;
            background: #fff;
            justify-content: space-between;
        }
    }

}
// .listBox {
//   padding: 0 0.3125rem;
//   padding-bottom: 0.3rem;
//   li {
//     width: 100%;
//     height: 5.3125rem;
//     margin-top: 0.3125rem;
//     .left_div {
//       width: 60%;
//       height: 100%;
//       background: #fff;
//       border-radius: 3px 0px 0px 3px;
//       .text {
//         width: 90%;
//         height: auto;
//         text-align: left;
//         margin: 0.625rem 0 1.5rem 0.625rem;
//         font-size: 0.875rem;
//         overflow: hidden;
//         text-overflow: ellipsis;
//         display: -webkit-box;
//         -webkit-box-orient: vertical;
//         -webkit-line-clamp: 2;
//       }
//       .time {
//         font-size: 0.625rem;
//         color: #999;
//         margin-left: 0.625rem;
//       }
//       .readCount {
//         margin-right: 0.9375rem;
//         .icon_num {
//           display: block;
//           width: 1.25rem;
//           height: 1rem;
//           background: url("./readNum.png") no-repeat center center;
//           background-size: 100% 100%;
//         }
//         .count {
//           font-size: 0.625rem;
//           color: #999;
//           line-height: 1rem;
//           padding-left: 2px;
//         }
//       }
//     }
//     .right_div {
//       width: 40%;
//       height: 100%;
//       border-radius: 0px 3px 3px 0;
//       img {
//         width: 100%;
//         height: 100%;
//         border-radius: 0px 3px 3px 0;
//       }
//     }
//   }
// }
</style>