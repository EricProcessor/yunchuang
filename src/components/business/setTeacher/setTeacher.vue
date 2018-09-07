<template>
  <div class="setTeacher">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <p class="top clearfix">
      <span class=" fl">带*号项为必填项，请务必如实填写</span>
      <i class="fr"></i>
    </p>
    <ol class="formList">
      <li class="group clearfix">
        <label class="fl pos1">
          <i class="third" v-if="formList.isShow">*</i>姓名</label>
        <input class="fl" v-model="setTeacher.name" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i class="third" v-if="formList.isShow">*</i>性别</label>
        <div class="fl clearfix sexBox pos1" :class="{sexManActive:sex.maleActive}">
          <p class="sexMan fl" v-if="!sex.maleActive">
            <img src="./man_1.png" alt="">
          </p>
          <p class="sexMan fl" v-if="sex.maleActive">
            <img src="./man_2.png" alt="">
          </p>
          <input type="radio" v-model="setTeacher.sex" value="男" @click="maleChange" class="maleRadio" :checked="sex.maleActive">
          <span class="fl">男</span>
        </div>
        <div class="fl sexBox pos1" :class="{sexManActive:sex.femaleActive}">
          <p class="sexMan fl" v-if="!sex.femaleActive">
            <img src="./woman_1.png" alt="" />
          </p>
          <p class="sexMan fl" v-if="sex.femaleActive">
            <img src="./woman_2.png" alt="" />
          </p>
          <input type="radio" v-model="setTeacher.sex" value="女" @click="femaleChange" class="maleRadio" :checked="sex.femaleActive">
          <span class="fl">女</span>
        </div>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>出生日期</label>
        <input class="fl" v-model="setTeacher.birthday" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>工作单位</label>
        <input class="fl" v-model="setTeacher.company" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>现任职位</label>
        <input class="fl" v-model="setTeacher.presentPost" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>接受邀约</label>
        <div class="fl clearfix similarRadio pos1">
          <i class="fl" v-if="invitation.agree" :class="{noborder:invitation.agree}">
            <img src="./agree.png" alt="" />
          </i>
          <i class="fl" v-if="!invitation.agree"></i>
          <input type="radio" v-model="setTeacher.invitaer" value="接受" class="agreeBtn" @click="agreeInviter" :checked="invitation.agree">
          <span class="fl">接受</span>
        </div>
        <div class="fl clearfix similarRadio pos1">
          <i class="fl" v-if="invitation.disagree" :class="{noborder:!invitation.agree}">
            <img src="./agree.png" alt="" />
          </i>
          <i class="fl" v-if="!invitation.disagree"></i>
          <input type="radio" v-model="setTeacher.invitaer" value="不接受" class="agreeBtn" @click="disagreeInviter" :checked="invitation.disagree">
          <span class="fl">不接受</span>
        </div>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>服务载体</label>
        <select class="fl" v-model="setTeacher.serviceCarrier">
          <option value="0">请选择</option>
          <option value="1">金融服务</option>
          <option value="2">投资服务</option>
          <option value="3">融资服务</option>
        </select>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>单位属性</label>
        <select class="fl" v-model="setTeacher.unitAttrbute">
          <option value="0">请选择</option>
          <option value="1">国有</option>
          <option value="2">民营</option>
        </select>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>服务区域</label>
        <input @click="showAddr" v-model="address" class="fl" type="text" placeholder="选择省-市-区" />
        <textarea v-model="setTeacher.serviceArea" class="addeDetail fr" placeholder="请输入详细地址"></textarea>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>邮编</label>
        <input class="fl" v-model="setTeacher.zipCode" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i class="third" v-if="formList.isShow">*</i>手机</label>
        <input class="fl" v-model="setTeacher.phone" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i class="third" v-if="formList.isShow">*</i>邮箱</label>
        <input class="fl" v-model="setTeacher.email" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i class="third" v-if="formList.isShow">*</i>职称</label>
        <input class="fl" v-model="setTeacher.positionalTitles" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>最高学历</label>
        <input class="fl" v-model="setTeacher.highestEducation" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>辅导特长</label>
        <select class="fl" v-model="setTeacher.speciality">
          <option value="0">请选择</option>
          <option value="1">国有</option>
          <option value="2">民营</option>
        </select>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>技术领域</label>
        <select class="fl" v-model="setTeacher.technicalField">
          <option value="0">请选择</option>
          <option value="1">国有</option>
          <option value="2">民营</option>
        </select>
      </li>
      <li class="group clearfix pos1">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>擅长领域</label>
        <textarea v-model="setTeacher.goodTheme" class="investIdea fr" maxlength="200"></textarea>
        <span class="textCount">0/200</span>
      </li>
      <li class="group clearfix pos1">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>个人简历</label>
        <textarea v-model="setTeacher.resume" class="investIdea fr" maxlength="200"></textarea>
        <span class="textCount">0/200</span>
      </li>
      <li class="group clearfix pos1">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>辅导企业</label>
        <textarea v-model="setTeacher.coachEnterprise" class="investIdea fr" maxlength="200"></textarea>
        <span class="textCount">0/200</span>
      </li>
      <li class="group clearfix pos1">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>受聘情况</label>
        <textarea v-model="setTeacher.employment" class="investIdea fr" maxlength="200"></textarea>
        <span class="textCount">0/200</span>
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
import AddressPick from "base/addressPick/addressPick";
export default {
  data() {
    return {
      formList: {
        isShow: true //是否显示*
      },
      address: "", //地址
      sex: {
        //性别
        male: false, //男
        female: false, //女
        maleActive: true,
        femaleActive: false
      },
      invitation: {
        agree: true, //同意
        disagree: false //不同意
      },
      setTeacher: {
        name: "",//姓名
        sex:"",//性别
        birthday: "",//出生日期
        company: "",//工作单位
        presentPost: "",//现任职务
        inviter:"",//是否接受邀请
        serviceCarrier: "",//服务载体
        unitAttrbute: "",//单位属性
        serviceArea: "",//服务区域
        zipCode: "",//邮编
        phone: "",//手机
        email: "",//邮箱
        positionalTitles: "",//职称
        highestEducation : "",//最高学历
        speciality: "",//辅助特长
        technicalField: "",//技术领域
        goodTheme: "",//擅长主题
        resume: "",//个人简历
        coachEnterprise: "",//辅导企业
        employment : "",//受聘情况
      }
    };
  },
  created() {
    this.headerText = "认证导师"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  methods: {
    showAddr() {
      this.$refs.addr.showAddressComponent();
    },
    getAddr(val) {
      this.address = val;
    },
    maleChange() {
      if (!this.sex.maleActive) {
        this.sex.maleActive = !this.sex.maleActive;
        this.sex.femaleActive = !this.sex.femaleActive;
      }
    },
    femaleChange() {
      if (!this.sex.femaleActive) {
        this.sex.femaleActive = !this.sex.femaleActive;
        this.sex.maleActive = !this.sex.maleActive;
      }
    },
    agreeInviter() {
      if (!this.invitation.afree) {
        this.invitation.agree = !this.invitation.agree;
        this.invitation.disagree = !this.invitation.disagree;
      }
    },
    disagreeInviter() {
      if (!this.invitation.disafree) {
        this.invitation.disagree = !this.invitation.disagree;
        this.invitation.agree = !this.invitation.agree;
      }
    }
  },
  components: {
    IndexHeader,
    AddressPick
  }
};
</script>
<style lang="less" scoped>
.setTeacher {
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
