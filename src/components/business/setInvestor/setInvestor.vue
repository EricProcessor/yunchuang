<template>
  <div class="setInvestor">
    <index-header :text="headerText" :hasSearch="hasSearch"></index-header>
    <p class="top clearfix" v-if="!formList.isClose">
      <span class=" fl">带*号项为必填项，请务必如实填写</span>
      <i class="fr" @click="closeBtn"></i>
    </p>
    <ol class="formList">
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>姓名</label>
        <input class="fl" v-model="setTeacher.name" type="text" />
      </li>
      <li class="group clearfix sexLi" >
        <label class="fl pos1"><i v-if="formList.isShow">*</i>性别</label>
        <label style="margin-right: 14px">
          <input type="radio" name="peoSex" value="Y" v-model="setTeacher.sex" checked> 
          <span class="sexBorder"><a class="malea"></a><b>男</b></span>
        </label>
        <label>
          <input type="radio" name="peoSex" value="N" v-model="setTeacher.sex"> 
          <span class="sexBorder"><a class="femalea"></a><b>女</b></span>
        </label>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>出生日期</label>
        <!-- <input class="fl" v-model="setTeacher.birthday" type="text" /> -->
        <div class="column-right" @click.prevent="_openPicker"><input type="text" disabled v-model="setTeacher.birthday" placeholder="点击选择" /></div>
        <!-- <mt-field label="" placeholder="请输入生日" type="date" v-model="setTeacher.birthday"></mt-field> -->
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
        <label class="fl pos1"><i v-if="formList.isShow">*</i>接受邀约</label>
        <label>
          <input type="radio" name="invitaer" value="Y" checked v-model="setTeacher.inviter"> 
          <span class="receive"><a></a><b>接受</b></span>
        </label>
        <label>
          <input type="radio" name="invitaer" value="N" v-model="setTeacher.inviter"> 
          <span class="receive"><a></a><b>不接受</b></span>
        </label>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>行业领域</label>
        <select class="fl" v-model="setTeacher.industField">
          <option :value="item.fswId" v-for="(item,index) in industrys" :key="index">{{item.fswName}}</option>
        </select>
      </li>
      <li class="group clearfix">
        <label class="fl pos1">基金规模</label>
        <input class="fl" v-model="setTeacher.fundScale" type="text" />
      </li>
      <li class="group clearfix">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>投资阶段</label>
        <select class="fl" v-model="setTeacher.investStage">
          <option :value="item.fswId" v-for="(item,index) in stages" :key="index">{{item.fswName}}</option>
        </select>
      </li>
      <li class="group clearfix pos1">
        <label class="fl pos1">
          <i v-if="formList.isShow">*</i>投资理念</label>
        <textarea v-model="setTeacher.investIdea" class="investIdea fr" maxlength="200"></textarea>
        <span class="textCount">0/200</span>
      </li>
      <li class="group clearfix pos1">
        <label class="fl pos1">
          <i v-if="!formList.isShow">*</i>成功案例</label>
        <textarea v-model="setTeacher.coachEnterprise" class="investIdea fr" maxlength="200"></textarea>
        <span class="textCount">0/200</span>
      </li>
    </ol>
    <ul class="clearfix operatBtn">
      <li class="fl" @click="resetInfor">重置</li>
      <li class="fl preserve" @click="inforData">保存</li>
    </ul>
    <!--日期选择组件-->
    <mt-datetime-picker 
        ref="datePicker"
        type="date"
        @confirm="_handleTime"
        :startDate="new Date('1900-01-01')"
    ></mt-datetime-picker>
    <success :sucOption="sucOption" v-if="sucOption.showSuccess"></success>
    <!-- <div class="regSucc">
      <header>注册</header>
      <div class="top_div"></div>
      <div class="succBox">
        <p class="succImg">
          <img src="./succSure.png" alt="">
        </p>
        <p class="succTxt">注册成功</p>
        <p class="succTime">
          <span></span>秒后自动跳转到“我的”页面</p>
        <router-link class="succBtn" to="/" tag="p">跳过</router-link>
      </div>
    </div> -->
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import success from "business/success/success";
export default {
  data() {
    return {
      formList: {
        isShow: true, //是否显示*
        isClose: false
      },
      setTeacher: {
        name: "", //姓名
        sex: "Y", //性别
        birthday: "", //出生日期
        company: "", //工作单位
        presentPost: "", //现任职务
        inviter: "Y", //是否接受邀请
        industField: "", //行业领域
        fundScale: "", //基金规模
        investStage: "", //投资阶段
        investIdea: "", //投资理念
        coachEnterprise: "" //成功案例
      },
      industrys: [], //行业领域备选
      stages: [], //投资阶段
      sucOption: {
        title: "认证投资人",
        sucName: "保存成功",
        showSuccess: false,
        path: "/mine/companyAccount"
      }
    };
  },
  created() {
    this.headerText = "认证投资人"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  mounted() {
    //行业领域
    this.alternativeData("行业领域");
    //投资阶段
    this.alternativeData("投资阶段");
  },
  methods: {
    closeBtn() {
      //关闭提示
      this.formList.isClose = !this.formList.isClose;
    },
    //重置数据
    resetInfor() {
      let that = this.setTeacher;
      that.name = ""; //姓名
      that.sex = "Y"; //性别
      that.birthday = ""; //出生日期
      that.company = ""; //工作单位
      that.presentPost = ""; //现任职务
      that.inviter = "Y"; //是否接受邀请
      that.industField = ""; //行业领域
      that.fundScale = ""; //基金规模
      that.investStage = ""; //投资阶段
      that.investIdea = ""; //投资理念
      that.coachEnterprise = ""; //成功案例
    },
    //行业领域投资阶段获取备选项
    alternativeData(Name) {
      let _url = "/fronttutorauthenticationselect-home";
      this.axios
        .post(_url, {
          name: Name
        })
        .then(res => {
          if (Name == "行业领域") {
            this.industrys = res.data;
            this.setTeacher.industField = this.industrys[0].fswId; //行业领域默认选中
          } else {
            this.stages = res.data;
            this.setTeacher.investStage = this.stages[0].fswId; //投资阶段默认选中
          }
        });
    },
    _openPicker() {
      //打开时间选择器
      this.$refs.datePicker.open();
    },
    _handleTime(date) {
      //转换得到的时间格式
      console.log(date);

      let year = date.getFullYear(),
        month = date.getMonth() - 0 + 1,
        day = date.getDate();
      this.setTeacher.birthday = `${year}-${month}-${day}`;
    },
    //获取后台数据
    inforData() {
      let that = this.setTeacher;
      let _url = "/fronttutorauthenticationsave-home";
      this.axios
        .post(_url, {
          fciBirthday: that.birthday, //出生日期
          fciCase: that.coachEnterprise, //成功案例
          fciFlag: that.inviter, //是否接受邀请
          fciIdea: that.investIdea, //投资理念
          fciName: that.name, //姓名
          fciOrgName: that.company, //工作单位
          fciPosition: that.presentPost, //现任职务
          fciScale: that.fundScale, //基金规模
          fciSex: that.sex, //性别
          fifId: that.industField, //行业领域
          fisId: that.investStage, //投资阶段
          fmiType: "R",
          investstage: "investstage"
        })
        .then(res => {
          this.items = res.data.List;
          // if (res == "ture") {
          this.sucOption.showSuccess == ture;
          // }
        });
    }
  },
  components: {
    IndexHeader,
    success
  }
};
</script>
<style lang="less" scoped>
.setInvestor {
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
    // 性别选择样式.sexLi
    .sexLi {
      height: 64px;
    }
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
          right: 2px;
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
      // 接受邀请样式
      input[type="radio"] {
        width: 0px;
        height: 0px;
        margin: 0px;
      }
      input + .receive {
        display: flex;
        align-items: center;
        position: relative;
        top: -26px;
        left: 20px;
        a {
          display: inline-block;
          width: 40px;
          height: 40px;
          border: 1px solid #dfdfdf;
          border-radius: 50%;
          margin-right: 10px;
        }
      }
      input:checked + .receive {
        a {
          background: url(./agree.png);
          background-size: 100%;
        }
      }
      //性别选择样式
      input + .sexBorder {
        border: 1px solid #dfdfdf;
        width: 120px;
        height: 60px;
        display: flex;
        align-items: center;
        border-radius: 6px;
        justify-content: center;
        position: relative;
        top: -14px;
        left: 20px;
        float: left;
        a {
          display: inline-block;
          width: 36px;
          height: 36px;
        }
        .malea {
          background: url(./man_1.png);
          background-size: 100%;
        }
        .femalea {
          background: url(./woman_1.png);
          background-size: 100%;
        }
      }
      input:checked + .sexBorder {
        border: 1px solid #6ea1ff;
        color: #6ea1ff;
        .malea {
          background: url(./man_2.png);
          background-size: 100%;
        }
        .femalea {
          background: url(./woman_2.png);
          background-size: 100%;
        }
      }
      //性别选择样式end
      select {
        option {
          color: #666;
          font-size: 24px;
        }
      }
      .addrDetail {
        resize: none;
        width: 500px;
        height: 140px;
        background: #f5f5f5;
        border-radius: 6px;
        margin: 10px 5px 0 0;
        padding: 20px;
        border: none;
      }
      .investIdea {
        resize: none;
        width: 500px;
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
  .regSucc {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 33;
    background: #fff;
    padding-top: 60px;
    .succBox {
      .succImg {
        padding-top: 120px;
        margin: 0 auto;
        width: 180px;
        height: 180px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .succTxt {
        text-align: center;
        margin-top: 40px;
        font-size: 60px;
        letter-spacing: 6px;
        color: #37bef0;
      }
      .succTime {
        margin: 140px 0 60px 0;
        text-align: center;
        font-size: 30px;
        letter-spacing: 3px;
        color: #333;
        span {
          font-size: 30px;
          color: #6ea1ff;
        }
      }
      .succBtn {
        width: 260px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        background: #6ea1ff;
        border-radius: 6px;
        margin: 0 auto;
        font-size: 30px;
        color: #fff;
      }
    }
  }
}
</style>
