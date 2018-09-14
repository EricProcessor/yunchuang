<template>
  <div class="setTeacher">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <p class="top clearfix" v-if="!formList.isClose">
      <span class=" fl">带*号项为必填项，请务必如实填写</span>
      <i class="fr" @click="closeBtn"></i>
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
          <input type="radio" value="男" @click="maleChange" class="maleRadio" :checked="sex.maleActive">
          <span class="fl">男</span>
        </div>
        <div class="fl sexBox pos1" :class="{sexManActive:sex.femaleActive}">
          <p class="sexMan fl" v-if="!sex.femaleActive">
            <img src="./woman_1.png" alt="" />
          </p>
          <p class="sexMan fl" v-if="sex.femaleActive">
            <img src="./woman_2.png" alt="" />
          </p>
          <input type="radio" value="女" @click="femaleChange" class="maleRadio" :checked="sex.femaleActive">
          <span class="fl">女</span>
        </div>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>出生日期</label>
        <span @click.prevent="_openPicker"><input class="fl" disabled v-model="setTeacher.birthday" type="text" placeholder="点击选择" /></span>
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
          <input type="radio" value="接受" class="agreeBtn" @click="agreeInviter" :checked="invitation.agree">
          <span class="fl">接受</span>
        </div>
        <div class="fl clearfix similarRadio pos1">
          <i class="fl" v-if="invitation.disagree" :class="{noborder:!invitation.agree}">
            <img src="./agree.png" alt="" />
          </i>
          <i class="fl" v-if="!invitation.disagree"></i>
          <input type="radio" value="不接受" class="agreeBtn" @click="disagreeInviter" :checked="invitation.disagree">
          <span class="fl">不接受</span>
        </div>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>{{selectName.carrier}}</label>
        <select class="fl" v-model="setTeacher.serviceCarrier">
          <option v-for="(v,i) in this.selectName.carrierArr" :key="i" :value="v.fswId">{{v.fswName}}</option>

        </select>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>{{selectName.unit}}</label>
        <select class="fl" v-model="setTeacher.unitAttrbute">
          <option v-for="(v,i) in selectName.unitArr" :key="i" :value="v.fswId">{{v.fswName}}</option>
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
          <i v-if="!formList.isShow">*</i>{{selectName.tutorship}}</label>
        <select class="fl" v-model="setTeacher.speciality">
          <option v-for="(v,i) in this.selectName.torshipArr" :key="i" :value="v.fswId">{{v.fswName}}</option>
        </select>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>{{selectName.technicalField}}</label>
        <select class="fl" v-model="setTeacher.technicalField">
          <option v-for="(v,i) in selectName.technicalFieldArr" :key="i" :value="v.fswId">{{v.fswName}}</option>
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
      <li class="fl" @click="resetBtn">重置</li>
      <li class="fl preserve" @click="conserveBtn">保存</li>
    </ul>
    <!-- 日期picker -->
    <mt-datetime-picker ref="datePicker" type="date" @confirm="_handleTime" :startDate="new Date('1970-01-01')"></mt-datetime-picker>
    <!-- 地址 -->
    <AddressPick @selectAddress="getAddr" ref="addr"></AddressPick>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import AddressPick from "base/addressPick/addressPick";
import Install from "@/config/checkRule";
export default {
  data() {
    return {
      //是否显示*
      formList: {
        isShow: true,
        isClose: false
      },
      address: "", //地址
      //性别
      sex: {
        male: false, //男
        female: false, //女
        maleActive: true,
        femaleActive: false
      },
      //接受邀请
      invitation: {
        agree: true, //同意
        disagree: false //不同意
      },
      //select name
      selectName: {
        carrier: "服务载体",
        unit: "单位属性",
        tutorship: "辅导特长",
        technicalField: "技术领域",
        carrierType: "载体类型",
        torship: "辅助特长",
        carrierArr: [],
        unitArr: [],
        torshipArr: [],
        technicalFieldArr: []
      },
      //整体数据
      setTeacher: {
        name: "", //姓名
        sex: "男", //性别
        birthday: "", //出生日期
        company: "", //工作单位
        presentPost: "", //现任职务
        inviter: "接受", //是否接受邀请
        serviceCarrier: "", //服务载体
        unitAttrbute: "", //单位属性
        serviceArea: "", //服务区域-详细地址
        zipCode: "", //邮编
        phone: "", //手机
        email: "", //邮箱
        positionalTitles: "", //职称
        highestEducation: "", //最高学历
        speciality: "", //辅导特长
        technicalField: "", //技术领域
        goodTheme: "", //擅长主题
        resume: "", //个人简历
        coachEnterprise: "", //辅导企业
        employment: "", //受聘情况
        fciLatitude: "",
        fciLongitude: ""
      }
    };
  },
  created() {
    this.headerText = "认证导师"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  mounted() {
    this.getServiceCarrier();
    this.getUnitAttribute();
    this.getTutorship();
    this.getTechnicalField();
  },
  methods: {
    //唤出地址-城市信息
    showAddr() {
      this.$refs.addr.showAddressComponent();
    },
    //获得地址-城市信息
    getAddr(val) {
      this.address = val;
    },
    //关闭顶部提示
    closeBtn() {
      this.formList.isClose = !this.formList.isClose;
    },
    maleChange() {
      if (!this.sex.maleActive) {
        this.sex.maleActive = !this.sex.maleActive;
        this.sex.femaleActive = !this.sex.femaleActive;
        this.setTeacher.sex = "男";
      }
    },
    femaleChange() {
      if (!this.sex.femaleActive) {
        this.sex.femaleActive = !this.sex.femaleActive;
        this.sex.maleActive = !this.sex.maleActive;
        this.setTeacher.sex = "女";
      }
    },
    agreeInviter() {
      if (!this.invitation.agree) {
        this.invitation.agree = !this.invitation.agree;
        this.invitation.disagree = !this.invitation.disagree;
        this.setTeacher.inviter = "接受";
      }
    },
    disagreeInviter() {
      if (!this.invitation.disagree) {
        this.invitation.disagree = !this.invitation.disagree;
        this.invitation.agree = !this.invitation.agree;
        this.setTeacher.inviter = "不接受";
      }
    },
    //打开时间选择器
    _openPicker() {
      this.$refs.datePicker.open();
    },
    //转换得到的时间格式
    _handleTime(date) {
      let year = date.getFullYear(),
        month = date.getMonth() - 0 + 1,
        day = date.getDate();
      this.setTeacher.birthday = `${year}-${month}-${day}`;
    },
    //获取服务载体
    getServiceCarrier() {
      let _url = "/fronttutorauthenticationselect-home";
      this.axios.post(_url, { name: this.selectName.carrierType }).then(res => {
        this.selectName.carrierArr = res.data;
      });
    },
    //获取单位类型
    getUnitAttribute() {
      let _url = "/fronttutorauthenticationselect-home";
      this.axios.post(_url, { name: this.selectName.unit }).then(res => {
        this.selectName.unitArr = res.data;
      });
    },
    //获取辅导特长
    getTutorship() {
      let _url = "/fronttutorauthenticationselect-home";
      this.axios.post(_url, { name: this.selectName.torship }).then(res => {
        this.selectName.torshipArr = res.data;
      });
    },
    //获取技术领域
    getTechnicalField() {
      let _url = "/fronttutorauthenticationselect-home";
      this.axios
        .post(_url, { name: this.selectName.technicalField })
        .then(res => {
          this.selectName.technicalFieldArr = res.data;
        });
    },
    //重置所有信息
    resetBtn() {
      for (let key in this.setTeacher) {
        if (this.setTeacher[key] != "") {
          this.setTeacher[key] = "";
        }
      }
    },
    //保存信息
    conserveBtn() {
      //信息验证
      for (let key in this.setTeacher) {
        if (key == "name" && this.setTeacher[key] == "") {
          alert("姓名不能为空");
          return;
        } else if (key == "birthday" && this.setTeacher[key] == "") {
          alert("出生日期不能为空！");
          return;
        } else if (key == "company" && this.setTeacher[key] == "") {
          alert("工作单位不能为空！");
          return;
        } else if (key == "serviceCarrier" && this.setTeacher[key] == "") {
          alert("服务载体不能为空！");
          return;
        } else if (key == "unitAttrbute" && this.setTeacher[key] == "") {
          alert("单位属性不能为空！");
          return;
        } else if (
          key == "serviceArea" &&
          this.setTeacher[key] == "" &&
          this.address == ""
        ) {
          alert("服务区域不能为空！");
          return;
        } else if (key == "phone") {
          if (this.setTeacher[key] == "") {
            alert("手机号不能为空");
          } else {
            if (!Install.isPhone(this.setTeacher[key])) {
              alert("手机号码格式不正确！");
            }
          }
          return;
        } else if (key == "eamil") {
          if (this.setTeacher[key] == "") {
            alert("邮箱不能为空");
          } else {
            if (!Install.isEmail(this.setTeacher[key])) {
              alert("邮箱格式不正确！");
            }
          }
          return;
        } else if (key == "positionalTitles" && this.setTeacher[key] == "") {
          alert("职称不能为空！");
          return;
        } else if (key == "highestEducation" && this.setTeacher[key] == "") {
          alert("最高学历不能为空！");
          return;
        } else if (key == "goodTheme" && this.setTeacher[key] == "") {
          alert("技术领域不能为空！");
          return;
        } else if (key == "resume" && this.setTeacher[key] == "") {
          alert("个人简历不能为空！");
          return;
        } else {
          console.log(key, this.setTeacher[key]);
          let _serviceUrl = "/fronttutorauthenticationsave-home";
          let set_addr = this.address + " " + this.setTeacher.serviceArea;
          let datas = {
            fciName: this.setTeacher.name, //名字
            fciSex: this.setTeacher.sex, //性别
            fciBirthday: this.setTeacher.birthday, //生日
            fciOrgName: this.setTeacher.company, //工作单位
            fciPosition: this.setTeacher.presentPost, //职务
            fciFlag: this.setTeacher.inviter, //是否接收邀请
            fcciId: this.setTeacher.serviceCarrier, //服务载体
            fciAttribute: this.setTeacher.unitAttrbute, //单位属性
            fciAddress: set_addr, //地址
            fciPostcode: this.setTeacher.zipCode, //邮编
            fciTel: this.setTeacher.phone, //手机
            fciMile: this.setTeacher.email, //邮箱
            fciTechnical: this.setTeacher.positionalTitles, //职称
            fciEducation: this.setTeacher.highestEducation, //学历
            fciPoint: this.setTeacher.speciality, //辅导特长
            fciDomain: this.setTeacher.technicalField, //技术领域
            fciTheme: this.setTeacher.goodThememe, //擅长主题
            fciResume: this.setTeacher.resume, //个人简历
            fciEnterprise: this.setTeacher.coachEnterprise, //辅导企业
            fciAppointment: this.setTeacher.employment, //受聘情况
            fciLatitude: this.setTeacher.fciLatitude, //
            fciLongitude: this.setTeacher.fciLongitude //
            // provinceId: this.setTeacher.name,  //省
            //cityId: this.setTeacher.name, //市
            // areaId : this.setTeacher.name //区
          };
          this.axios.post(_serviceUrl,datas).then(res => {
            console.log(res);
          });
        }
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
        width: 530px;
        height: 61px;
        background: #f5f5f5;
        border-radius: 6px;
        border: none;
        margin-left: 20px;
      }
      input {
        width: 510px;
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
        width: 490px;
        height: 140px;
        background: #f5f5f5;
        border-radius: 6px;
        margin: 10px 10px 0 0;
        padding: 20px;
        border: none;
      }
      .investIdea {
        resize: none;
        width: 490px;
        height: 260px;
        background: #f5f5f5;
        border-radius: 6px;
        margin: 10px 10px 0 0;
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
