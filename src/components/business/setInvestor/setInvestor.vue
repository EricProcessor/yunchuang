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
              <label>
                <input type="radio" name="invitaer" value="male" checked> 
                <span>接收</span>
              </label>
              
              <input type="radio" name="invitaer" value="female"> 
            <!-- <div class="fl clearfix similarRadio pos1">
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
            </div> -->
          </li>
          <li class="group clearfix">
            <label class="fl pos1">
              <i v-if="formList.isShow">*</i>行业领域</label>
            <select class="fl" v-model="setTeacher.industField">
              <option value="0">行业领域1</option>
              <option value="1">行业领域2</option>
              <option value="2">行业领域3</option>
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
              <option value="0">行业领域1</option>
              <option value="1">行业领域2</option>
              <option value="2">行业领域3</option>
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
    </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
export default {
  data() {
    return {
      formList: {
        isShow: true //是否显示*
      },
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
        name: "", //姓名
        sex: "", //性别
        birthday: "", //出生日期
        company: "", //工作单位
        presentPost: "", //现任职务
        inviter: "", //是否接受邀请
        industField: "", //行业领域
        fundScale: "", //基金规模
        investStage: "", //投资阶段
        investIdea: "", //投资理念
        coachEnterprise: "" //辅导企业
      }
    };
  },
  created() {
    this.headerText = "认证投资人"; //设置头部显示导航内容
    this.hasSearch = false;
  },
  methods: {
    //性别选择
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
    //接受邀约选择
    agreeInviter() {
      if (!this.invitation.agree) {
        this.invitation.agree = !this.invitation.agree;
        this.invitation.disagree = !this.invitation.disagree;
      }
    },
    disagreeInviter() {
      if (!this.invitation.disagree) {
        this.invitation.disagree = !this.invitation.disagree;
        this.invitation.agree = !this.invitation.agree;
      }
    },
    //重置数据
    resetInfor() {
      let that = this.setTeacher;
      that.name = ""; //姓名
      that.sex = ""; //性别
      that.birthday = ""; //出生日期
      that.company = ""; //工作单位
      that.presentPost = ""; //现任职务
      that.inviter = ""; //是否接受邀请
      that.industField = ""; //行业领域
      that.fundScale = ""; //基金规模
      that.investStage = ""; //投资阶段
      that.investIdea = ""; //投资理念
      that.coachEnterprise = ""; //辅导企业
    },
    //获取后台数据
    inforData() {
      console.log(1111);
      let _url = "/h5frontsearch-home";
      // let params = new URLSearchParams();
      // params.append("selType", this.serachSend.SearchClass);
      // params.append("KeyWord", encodeURI(encodeURI(this.serachSend.searchVal)));
      this.axios
        .post(_url, {
          userName: "yuanna",
          sex: "女",
          birthday: "2000.01.01",
          workPosition: "北京市朝阳区青年路",
          wordName: "web前端",
          yaoyue: "1",
          lingyu: "计算机",
          guimo: "",
          tzjieduan: "b轮",
          guanmian: "aaaaa",
          anli: "bbbbb"
        })
        .then(res => {
          this.items = res.data.List;
        });
    }
  },
  components: {
    IndexHeader
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
      input[type="radio"] {
        width: 0px;
        height: 0px;
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
