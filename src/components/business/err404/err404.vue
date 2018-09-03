<template>
    <div class="error">
        <p class="errCode">
            <img src="./err404.png" alt="">
        </p>
        <p class="errText">哎呀，不小心就出错啦！！！</p>
        <img class="backBtn" src="./backBtn.png" alt="" @click="backBtn">
    </div>
</template>
<script>
export default {
    data (){
        return {

        }
    },
    methods:{
        backBtn(){
            history.go(-1);
        }
    }
};
</script>
<style lang="less" scoped>
.error {
  width: 100%;
  height: 17.786667rem;
  background: -webkit-linear-gradient(#0c87c4,#945ab2 ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(#0c87c4,#945ab2); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(#0c87c4,#945ab2); /* Firefox 3.6 - 15 */
  background: linear-gradient(#0c87c4,#945ab2);
  .errCode{
      width: 612px;
      height: 300px;
      margin: 0 auto;
      padding-top: 220px;
      img{
          width: 100%;
          height: 100%;
      }
  }
  .errText{
      text-align: center;
      margin: 30px 0;
      font-size: 36px;
      color: #fff;
  }
  .backBtn{
      width: 64px;
      height: 64px;
      position: absolute;
      top: 30px;
      left: 20px;
      z-index: 2;
  }
}
</style>
