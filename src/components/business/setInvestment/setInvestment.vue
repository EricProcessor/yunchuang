<template>
  <div class="investBox">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <p class="top clearfix" v-if="!formList.isClose">
      <span class=" fl">带*号项为必填项，请务必如实填写</span>
      <i class="fr" @click="closeBtn"></i>
    </p>
    <ul class="formList">
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>联系人</label>
        <input class="fl" v-model="investment.person" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>联系电话</label>
        <input class="fl" v-model="investment.personTel" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>地址</label>
        <input @click="showAddr" readonly v-model="address" class="fl" type="text" placeholder="选择省-市-区" />
        <textarea class="addeDetail fr" v-model="investment.addeDetail" placeholder="请输入详细地址"></textarea>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>邮箱</label>
        <input class="fl" v-model="investment.email" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>网址</label>
        <input class="fl" v-model="investment.website" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>接受邀约</label>
        <div class="fl clearfix similarRadio pos1">
          <i class="fl" v-if="investment.agree" :class="{noborder:investment.agree}">
            <img src="./agree.png" alt="" />
          </i>
          <i class="fl" v-if="!investment.agree"></i>
          <input type="radio" value="接受" class="agreeBtn" @click="agreeInviter" :checked="investment.agree">
          <span class="fl">接受</span>
        </div>
        <div class="fl clearfix similarRadio pos1">
          <i class="fl" v-if="investment.disagree" :class="{noborder:!investment.agree}">
            <img src="./agree.png" alt="" />
          </i>
          <i class="fl" v-if="!investment.disagree"></i>
          <input type="radio" value="不接受" class="agreeBtn" @click="disagreeInviter" :checked="investment.disagree">
          <span class="fl">不接受</span>
        </div>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>{{investName.field}}</label>
        <select class="fl" v-model="investment.field">
          <option v-for="(v,i) in investName.fieldArr" :key="i" :value="v.fswId">{{v.fswName}}</option>
        </select>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>{{investName.stage}}</label>
        <select class="fl" v-model="investment.stage">
          <option v-for="(v,i) in investName.stageArr" :key="i" :value="v.fswId">{{v.fswName}}</option>
        </select>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>基金规模</label>
        <input class="fl" v-model="investment.scale" type="text" />
      </li>
      <li class="group clearfix pos1">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>投资理念</label>
        <textarea class="investIdea fr" v-model="investment.idea" maxlength="200"></textarea>
        <span class="textCount">0/200</span>
      </li>
      <li class="group clearfix pos1">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>成功案例</label>
        <textarea class="investIdea fr" v-model="investment.succCase" maxlength="200"></textarea>
        <span class="textCount">0/200</span>
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
    </ul>
    <ul class="clearfix operatBtn">
      <li class="fl" @click="resetBtn">重置</li>
      <li class="fl preserve" @click="saveSth">保存</li>
    </ul>
    <addressPick @selectAddress="getAddr" ref="addr"></addressPick>
    <!-- 保存成功 -->
    <success :sucOption="sucOption" v-if="sucOption.showSuccess"></success>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import AddressPick from "base/addressPick/addressPick";
import UploadImg from "base/uploadImg/uploadImg";
import Success from "business/success/success";
import Install from "@/config/checkRule";
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
      //地址ID
      addrId: {
        province: "",
        city: "",
        area: ""
      },
      address: "", //地址
      inputImg: [], //上传的图片
      headPicUrl: "",
      //投资
      investName: {
        field: "投资领域",
        stage: "投资阶段",
        stageArr: [],
        fieldArr: []
      },
      //数据
      investment: {
        person: "", //联系人
        personTel: "", //联系人电话
        addeDetail: "", //详细地址
        email: "", //邮箱
        website: "", //网址
        agree: true, //同意
        disagree: false, //不同意
        field: "", //投资领域
        stage: "", //投资阶段
        scale: "", //基金规模
        idea: "", //投资理念
        succCase: "", //成功案例
        flag: "M"
      }
    };
  },
  created() {
    this.headerText = "认证投资机构"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  mounted() {
    this.getFieldData();
    this.getInvestStage();
  },
  methods: {

    showAddr() {
      this.$refs.addr.showAddressComponent();
    },
    getAddr(val) {
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
      this.formList.isClose = !this.formList.isClose;
    },
    agreeInviter() {
      if (!this.investment.agree) {
        this.investment.agree = !this.investment.agree;
        this.investment.disagree = !this.investment.disagree;
        this.investment.flag = "M";
      }
    },
    disagreeInviter() {
      if (!this.investment.disagree) {
        this.investment.disagree = !this.investment.disagree;
        this.investment.agree = !this.investment.agree;
        this.investment.flag = "Y";
      }
    },
    //重置信息
    resetBtn() {
      for (let key in this.investment) {
        if (this.investment[key] != "") {
          this.investment[key] = "";
        }
      }
      this.inputImg = [];
    },
    //获得投资领域数据
    getFieldData() {
      let _url = "/fronttutorauthenticationselect-home";
      this.axios.post(_url, { name: this.investName.field }).then(res => {
        this.investName.fieldArr = res.data;
      });
    },
    //获得投资阶段数据
    getInvestStage() {
      let _url = "/fronttutorauthenticationselect-home";
      this.axios.post(_url, { name: this.investName.stage }).then(res => {
        this.investName.stageArr = res.data;
      });
    },
    //保存信息
    saveSth() {
      if (
        this.investment.person == "" &&
        this.investment.personTel == "" &&
        this.investment.field == ""
      ) {
        alert("信息不完整！");
      } else if (this.investment.person == "") {
        alert("联系人不能为空！");
      } else if (this.investment.personTel == "") {
        alert("手机号不能为空！");
      } else if (this.investment.field == "") {
        alert("投资领域不能为空！");
      } else {
        if (Install.isPhone(this.investment.personTel)) {
          let _url = "/frontcompanyauthenticationserviceaddpage-home";
          let _address = this.address + " " + this.investment.addeDetail;
          let params = {
            provinceId: this.addrId.province,
            cityId: this.addrId.city,
            areaId: this.addrId.area,
            address: _address, //地址
            fciUrl: this.investment.website, //网址
            fciMile: this.investment.email, //邮箱
            fciTel: this.investment.personTel, //联系电话
            fciName: this.investment.person, //联系人
            fciIdea: this.investment.idea, //投资理念
            fciScale: this.investment.scale, //基金规模
            fciCase: this.investment.succCase, //成功案例
            fifId: this.investment.stage, //投资阶段
            fisId: this.investment.field, //投资领域
            fciFlag: this.investment.flag //是否接受邀约
          };
          this.axios.post(_url, params).then(res => {
            if (res.data.flag) {
              this.sucOption.showSuccess = true;
            }else{
              alert(res.data.msg);
            }
            
          });
        }
      }
    }
  },
  components: {
    IndexHeader,
    AddressPick,
    UploadImg,
    Success
  }
};
</script>
<style lang="less" scoped>
.investBox {
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
      margin-bottom: 20px;
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
          right: 2px;
        }
        .third {
          left: 30px;
        }
      }
      .similarRadio {
        i {
          display: inline-block;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          margin: 10px 10px 0 20px;
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
          top: 10px;
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
      .similarRadio:last-child {
        margin-left: 40px;
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
      .investIdea {
        resize: none;
        width: 480px;
        height: 260px;
        background: #f5f5f5;
        border-radius: 6px;
        margin: 10px 20px 0 0;
        padding: 20px;
        border: none;
      }
      .textCount {
        position: absolute;
        bottom: 20px;
        right: 40px;
        font-size: 20px;
        color: #666;
      }
    }
    .group:last-child {
      .addPic {
        width: 281px;
        height: 181px;
        background: url("./addPic.png") no-repeat #f5f5f5 center center;
        background-size: 30% 45%;
        border-radius: 6px;
        margin-left: 20px;
        img{
          width: 100%;
          height: 100%;
        }
        .picture {
          width: 80px;
          height: 80px;
          background: #d5d5d5;
          margin: 50px auto;
        }
      }
      .addPicTip {
        width: 240px;
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
