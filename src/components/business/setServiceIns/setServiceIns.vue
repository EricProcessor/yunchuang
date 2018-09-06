<template>
    <div class="serviceBox">
        <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
        <p class="top clearfix">
            <span class=" fl">带*号项为必填项，请务必如实填写</span>
            <i class="fr"></i>
        </p>
        <ol class="formList">
            <li class="group clearfix">
                <label class="fl pos1">
                    <i v-if="formList.isShow">*</i>企业名称</label>
                <input class="fl" type="text" v-model="serviceIns.companyName" />
            </li>
            <li class="group clearfix">
                <label class="fl pos1">
                    <i v-if="!formList.isShow">*</i>服务类型</label>
                <select class="fl" v-model="serviceIns.serviceType">
                    <option value="0">请选择</option>
                    <option value="1">金融服务</option>
                    <option value="2">投资服务</option>
                    <option value="3">融资服务</option>
                </select>
            </li>
            <li class="group clearfix">
                <label class="fl pos1">
                    <i class="third" v-if="formList.isShow">*</i>联系人</label>
                <input class="fl" type="text" v-model="serviceIns.person" />
            </li>
            <li class="group clearfix">
                <label class="fl pos1">
                    <i v-if="formList.isShow">*</i>联系电话</label>
                <input class="fl" type="text" v-model="serviceIns.phone" />
            </li>
            <li class="group clearfix">
                <label class="fl pos1">
                    <i v-if="!formList.isShow">*</i>邮箱</label>
                <input class="fl" type="text" v-model="serviceIns.email" />
            </li>
            <li class="group clearfix">
                <label class="fl pos1">
                    <i v-if="!formList.isShow">*</i>网址</label>
                <input class="fl" type="text" v-model="serviceIns.websit" />
            </li>
            <li class="group clearfix">
                <label class="fl pos1">
                    <i v-if="!formList.isShow">*</i>地址</label>
                <input @click="showAddr" v-model="address" class="fl" type="text" placeholder="选择省-市-区" />
                <textarea class="addeDetail fr" v-model="serviceIns.addDetail" placeholder="请输入详细地址"></textarea>
            </li>
            <li class="group clearfix pos1">
                <label class="fl pos1">
                    <i v-if="!formList.isShow">*</i>照片</label>
                <div class="addPic fl pos1">
                    <img v-if="inputImg[0]" :src="inputImg[0].src" alt="">
                    <upload-img @getImg="inputGetImg"></upload-img>
                </div>
                <p class="fl addPicTip">包含但不限于xxxxxx证件、 jpg、png、gif格式，≤5MB
                </p>
            </li>
        </ol>
        <ul class="clearfix operatBtn">
            <li class="fl">重置</li>
            <li class="fl preserve">保存</li>
        </ul>
        <AddressPick @selectAddress="getAddr" ref="addr"></AddressPick>
    </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import UploadImg from "base/uploadImg/uploadImg";
import AddressPick from "base/addressPick/addressPick";
export default {
  data() {
    return {
      formList: {
        isShow: true //是否显示*
      },
      address: "", //地址
      serviceIns: {
        companyName: "",
        serviceType: "",
        person: "",
        phone: "",
        email: "",
        websit: "",
        addrDetail: ""
      },
      inputImg: [] //上传的图片
    };
  },
  created() {
    this.headerText = "认证服务机构"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  methods: {
    showAddr() {
      this.$refs.addr.showAddressComponent();
    },
    getAddr(val) {
      this.address = val;
    },
    inputGetImg(arr) {
      this.inputImg = arr;
    }
  },
  components: {
    IndexHeader,
    UploadImg,
    AddressPick
  }
};
</script>

<style lang="less" scoped>
.serviceBox {
  background: #fff;
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
          left: 30px;
        }
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
        width: 506px;
        height: 140px;
        background: #f5f5f5;
        border-radius: 6px;
        margin: 10px 5px 0 0;
        padding: 20px;
        border: none;
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
        img{
            width: 100%;
            height: 100%;
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
