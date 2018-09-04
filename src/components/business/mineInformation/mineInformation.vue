<template>
  <div class="mine_information"> 
    <ol>
      <li class="infor_left">
      </li>
      <li class="infor_right">
        <h3>盈创兴 <img src="./nan.png" alt=""></h3>
        <span>内蒙古自治区-包头市-东河区</span>
        <span>注册于2107-09-19</span>
      </li>
    </ol>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
// 我的基本信息
.mine_information {
  width: 750px;
  height: 140px;
  margin-bottom: 120px;
  margin-top: 128px;
  background: linear-gradient(
    bottom,
    rgb(245, 245, 245) 20%,
    #253350
  ); /* 标准的语法 */
  ol {
    width: 690px;
    height: 220px;
    background: rgb(245, 245, 245);
    margin: 0 auto;
    box-shadow: 0px 10px 20px #dfdfdf;
    position: relative;
    z-index: 10;
    top: -20px;
    border-radius: 20px;
    .infor_left {
      float: left;
      margin: 50px 34px 50px 60px;
      background: #cad3dc;
      border-radius: 50%;
      width: 120px;
      height: 120px;
    }
    .infor_right {
      float: left;
      margin: 50px 30px 50px 0px;
      h3 {
        color: #000;
        font-size: 30px;
        font-weight: normal;
        letter-spacing: 3px;
        height: 48px;
        line-height: 48px;
        img {
          transform: rotate(45deg);
          width: 24px;
          position: relative;
          top: 6px;
          left: 8px;
        }
      }
      span {
        letter-spacing: 2px;
        font-size: 20px;
        color: #999999;
        display: block;
        height: 36px;
        line-height: 36px;
      }
    }
  }
}
</style>
