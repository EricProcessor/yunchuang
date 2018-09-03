<template>
  <ul class="myIntCon">
    <li>
      <ol>
        <div class="myIntConImg">
          <img src="" alt="">
        </div>
        <div class="myIntConInf">
          <h3>SWEET MELL</h3>
          <span>互联网咖啡O2O</span>
        </div>
      </ol>
      <dl>
        <dd>
          <h4>行业领域</h4>
          <span>消费生活</span>
          
        </dd>
        <dd>
          <h4>所属阶段</h4>
          <span>概念阶段</span>
        </dd>
        <dd>
          <h4>融资进度</h4>
          <span>未融资</span>
        </dd>
        <dd>
          <h4>状态</h4>
          <span class="cared"><img src="./careRed.png" alt="">已关注</span>
        </dd>
      </dl>
    </li>
  </ul>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
//我的关注内容区域
.myIntCon {
  overflow: hidden;
  li {
    background-color: #fff;
    margin: 10px 0;
    ol {
      width: 750px;
      height: 180px;
      display: flex;
      align-items: center;
      .myIntConImg {
        width: 120px;
        height: 120px;
        background-color: #cad3dc;
        margin: 0 30px;
      }
      .myIntConInf {
        h3 {
          font-size: 30px;
          height: 48px;
          // line-height: 60px;
          color: #333333;
          letter-spacing: 3px;
        }
        span {
          font-size: 20px;
          letter-spacing: 2px;
          color: #999999;
        }
      }
    }
    dl {
      display: flex;
      justify-content: space-around;
      padding-bottom: 8px;
      dd {
        width: 187px;
        height: 64px;
        line-height: 32px;
        margin: 10px 0;
        border-right: 1px solid #dfdfdf;
        text-align: center;
        h4 {
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 2px;
          color: #666666;
        }
        span {
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 2px;
          color: #333333;
          display: flex;
          align-items: center;
          justify-content: center;
          img {
            width: 28px;
            padding-right: 3px;
          }
        }
        .cared {
          color: #f35828;
        }
      }
    }
  }
}
</style>