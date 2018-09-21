<template>
  <div class="serviceBox">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <p class="top clearfix" v-if="!formList.isClose">
      <span class=" fl">带*号项为必填项，请务必如实填写</span>
      <i class="fr" @click="closeBtn"></i>
    </p>
    <ol class="formList">
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>企业名称</label>
        <input class="fl" type="text" v-model="serviceIns.companyName" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>{{serType.name}}</label>
        <select class="fl" v-model="serviceIns.serviceType">
          <option v-for="(v,i) in serType.typeArr" :key="i" :value="v.fswId">{{v.fswName}}</option>
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
        <input @click="showAddr" readonly v-model="address" class="fl" type="text" placeholder="选择省-市-区" />
        <textarea class="addeDetail fr" v-model="serviceIns.addrDetail" placeholder="请输入详细地址"></textarea>
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
      <li class="fl" @click="resetBtn">重置</li>
      <li class="fl preserve" @click="preservation">保存</li>
    </ul>
    <AddressPick @selectAddress="getAddr" ref="addr"></AddressPick>
    <!-- 保存成功 -->
    <success :sucOption="sucOption" v-if="sucOption.showSuccess"></success>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import UploadImg from "base/uploadImg/uploadImg";
import AddressPick from "base/addressPick/addressPick";
import Install from "@/config/checkRule";
import Success from "business/success/success";
export default {
  data() {
    return {
      sucOption: {
        title: "账号认证", //这个是传的跳转到页面的名称
        sucName: "保存成功", //(保存成功、注册成功)
        showSuccess: false, //是否显示组件
        path: "/mine/companyAccount" //成功后条状的路径
      },
      formList: {
        isShow: true, //是否显示*
        isClose: false
      },
      serType: {
        name: "服务类型",
        typeArr: []
      },
      addrId: {
        province: "",
        city: "",
        area: ""
      }, //地址ID
      address: "", //地址
      serviceIns: {
        companyName: "",
        serviceType: "0",
        person: "",
        phone: "",
        email: "",
        websit: "",
        addrDetail: "",
        fciLongitude: "",
        fciLatitude: ""
      },
      inputImg: [], //上传的图片
      headPicUrl: ""
    };
  },
  created() {
    this.headerText = "认证服务机构"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  mounted() {
    this.getServiceType();
      
  },
  methods: {
    showAddr() {
      //显示地址弹出层
      this.$refs.addr.showAddressComponent();
    },
    getAddr(val) {
      //展示地址
      this.address = val
        .map(item => {
          return item.ca_name;
        })
        .join("-");
      this.addrId.province = val[0].ca_id;
      this.addrId.city = val[1].ca_id;
      this.addrId.area = val[2].ca_id;
    },
    inputGetImg(arr) {
      //获得上传图片的数组
      this.inputImg = arr;
      this._upLoadImg(this.inputImg[0]);
    },
    //开始上传头像
    _upLoadImg(myFile) {
      var fd = new FormData();
      fd.append("myFile", myFile);

      this.axios({
        url: "upload-file",
        method: "post",
        noQs: true, //不进行fs参数处理
        data: fd
      }).then(res => {
        // console.log(res)
        if (res.status === 200) {
          this.headPicUrl = res.data.url;
        }
      });
    },
    closeBtn() {
      //关闭提示
      this.formList.isClose = !this.formList.isClose;
    },
    //获得服务类型
    getServiceType() {
      let typeUrl = "/fronttutorauthenticationselect-home";
      this.axios.post(typeUrl, { name: this.serType.name }).then(res => {
        this.serType.typeArr = res.data;
      });
    },
    resetBtn() {
      //重置信息
      for (let key in this.serviceIns) {
        if (this.setTeacher[key] != "") {
          this.setTeacher[key] = "";
        }
      }
      this.inputImg = [];
    },
    preservation() {
      //保存
      if (
        this.serviceIns.companyName == "" &&
        this.serviceIns.person == "" &&
        this.serviceIns.phone == ""
      ) {
        alert("信息不完整！");
      } else if (this.serviceIns.companyName == "") {
        alert("公司名称不能为空！");
      } else if (this.serviceIns.person == "") {
        alert("联系人不能为空！");
      } else if (this.serviceIns.phone == "") {
        alert("手机号不能为空！");
      } else {
        if (Install.isPhone(this.serviceIns.phone)) {
          let _this_url = "/frontcompanyauthenticationserviceaddpage-home";
          //提交成功
          let addr = this.address + " " + this.serviceIns.addrDetail;
          let datas = {
            // fciName: this.serviceIns.companyName,//企业名称
            fstId: this.serviceIns.serviceType, //服务类型
            fciName: this.serviceIns.person, //联系人
            fciTel: this.serviceIns.phone, //手机号
            fciMile: this.serviceIns.email, //邮箱
            fciUrl: this.serviceIns.websit, //网址
            address: addr, //地址
            fciPath: this.headPicUrl, //上传图片的地址
            provinceId: this.addrId.province, //省ID
            cityId: this.addrId.city, //市ID
            areaId: this.addrId.area, //区域ID
            fciLatitude: this.serviceIns.fciLatitude, //纬度
            fciLongitude: this.serviceIns.fciLongitude //经度
          };
          this.axios.post(_this_url, datas).then(res => {
            console.log(res);
            if (res.data.flag) {
              alert(res.data.msg);
              this.sucOption.showSuccess = true;
            } else {
              alert(res.data.msg);
            }
          });
        } else {
          alert("手机号格式不正确！");
        }
      }
    },
  },
  components: {
    IndexHeader,
    UploadImg,
    AddressPick,
    Success
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
      width: 30px;
      height: 30px;
      background: url("./close.png") no-repeat center center;
      background-size: 100% 100%;
      margin: 14px 16px;
    }
  }
  .formList {
    padding: 30px;
    padding-bottom: 100px;
    .group {
      margin-bottom: 19px;
      label {
        display: inline-block;
        width: 128px;
        text-align: right;
        font-size: 24px;
        color: #333;
        margin-top: 20px;
        i {
          display: inline-block;
          font-size: 24px;
          color: #f35828;
          position: relative;
          top: 5px;
        }
      }
      input,
      select {
        width: 520px;
        height: 61px;
        background: #f5f5f5;
        border-radius: 6px;
        border: none;
        margin-left: 20px;
      }
      input {
        width: 500px;
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
        width: 480px;
        height: 140px;
        background: #f5f5f5;
        border-radius: 6px;
        margin: 10px 20px 0 0;
        padding: 20px;
        border: none;
      }
    }
    .group:last-child {
      .addPic {
        width: 281px;
        height: 181px;
        border-radius: 6px;
        margin-left: 20px;
        background: url("./addPic.png") no-repeat #f5f5f5 center center;
        background-size: 30% 45%;
        .picture {
          width: 80px;
          height: 80px;
          background: #d5d5d5;
          margin: 50px auto;
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .addPicTip {
        width: 235px;
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
