<template>
    <div class="setInvestor">
        <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
        <p class="top clearfix">
            <span class=" fl">带*号项为必填项，请务必如实填写</span>
            <i class="fr"></i>
        </p>
        <ol class="formList">
          <li class="group clearfix">
            <label class="fl pos1">
              <i class="third">*</i>姓名</label>
            <input class="fl" type="text" />
          </li>
        </ol>
    </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
export default {
  created() {
    this.headerText = "认证投资人"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  components: {
    IndexHeader
  }
};
</script>
<style lang="less" scoped>
.setInvestor {
  .top {
    width: 100%;
    height: 60px;
    line-height: 60px;
    background: #feffc7;
    span {
      color: #666;
      font-size: #666;
      padding: 0 28px;
    }
    i {
      display: inline-block;
      width: 24px;
      height: 24px;
      background: #f00;
      margin: 18px 20px;
    }
  }
  .formList {
    padding: 30px;
    padding-bottom: 100px;
    .group {
      margin-bottom: 19px;
      label {
        display: inline-block;
        width: 116px;
        text-align: right;
        font-size: 24px;
        color: #333;
        margin-top: 20px;
        i {
          display: block;
          font-size: 24px;
          color: #f35828;
          position: absolute;
          top: 5px;
          left: 5px;
        }
        .third {
          left: 55px;
        }
      }
      .similarRadio {
        i {
          display: inline-block;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin: 5px 10px 0 20px;
          border: 2px solid #999;
          box-sizing: border-box;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .noborder {
          border: none;
        }
        .agreeBtn {
          display: block;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin: 0;
          position: absolute;
          top: 8px;
          left: 22px;
          z-index: 3;
          opacity: 0;
        }
        span {
          font-size: 24px;
          color: #333;
          margin-top: 18px;
        }
      }
      .sexBox {
        width: 120px;
        height: 60px;
        margin-left: 20px;
        line-height: 60px;
        text-align: center;
        background: #fff;
        border-radius: 6px;
        border: 2px solid #e0e0ee;
        .sexMan {
          width: 36px;
          height: 36px;
          margin-left: 23px;
          margin-top: 9px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        span {
          font-size: 24px;
          color: #999;
        }
        .maleRadio {
          width: 120px;
          height: 60px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 3;
          margin: 0;
          opacity: 0;
        }
      }
      .sexManActive {
        border-color: #6ea1ff;
        span {
          color: #6ea1ff;
        }
      }
      .sexBox:last-child {
        .sexMan {
          margin-top: 10px;
        }
      }
      .similarRadio:last-child,
      .sexBox:last-child {
        margin-left: 40px;
      }
      input,
      select {
        width: 550px;
        height: 61px;
        background: #f5f5f5;
        border-radius: 6px;
        border: none;
        margin-left: 20px;
      }
      input {
        width: 530px;
        padding-left: 20px;
      }
      select {
        option {
          color: #666;
          font-size: 24px;
        }
      }
      .addeDetail {
        resize: none;
        width: 510px;
        height: 140px;
        background: #f5f5f5;
        border-radius: 6px;
        margin: 10px 5px 0 0;
        padding: 20px;
        border: none;
      }
      .investIdea {
        resize: none;
        width: 510px;
        height: 260px;
        background: #f5f5f5;
        border-radius: 6px;
        margin: 10px 5px 0 0;
        padding: 20px;
        border: none;
      }
      .textCount {
        position: absolute;
        bottom: 20px;
        right: 20px;
        font-size: 20px;
        color: #666;
      }
    }
    .group:last-child {
      .addPic {
        width: 281px;
        height: 181px;
        background: #f5f5f5;
        border-radius: 6px;
        margin-left: 20px;
        .picture {
          width: 80px;
          height: 80px;
          background: #d5d5d5;
          margin: 50px auto;
        }
      }
      .addPicTip {
        width: 255px;
        height: 58px;
        font-size: 20px;
        line-height: 36px;
        color: #999;
        margin: 30px 0 0 14px;
      }
    }
  }
  .operatBtn {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    li {
      width: 40%;
      text-align: center;
      height: 88px;
      line-height: 88px;
      background: #aeaeae;
      font-size: 30px;
      color: #fff;
      letter-spacing: 3px;
    }
    li:last-child {
      width: 60%;
      background: #6ea1ff;
    }
  }
}
</style>
