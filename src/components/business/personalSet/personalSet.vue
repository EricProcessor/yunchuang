<template>
    <div class="personal-set">
        <index-header text="个人设置" :hasSearch="false"></index-header>
        <div class="setBox">
            <p class="remind" v-show="remind">带*号为必填项，请务必如实填写  <i class="close" @click="_closeRemind">&times;</i></p>
            <div class="head-box">
                <div class="head-pic">
                    <img v-if="picList[0]" :src="picList[0].src" alt="">
                    <upload-img @getImg="getUploadImg"></upload-img>
                </div>
                <span>更换头像</span>
            </div>
            <div class="form-list">
                <div class="column">
                    <ul>
                        <li class="column-left"><i>*</i>姓名</li>
                        <li class="column-right"><input type="text" v-model="name" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left"><i>*</i>性别</li>
                        <li class="column-right align-left">
                            <span :class="{ active: sex === '男'}" @click="_setSex('男')"><img src="./man.png" />男</span>
                            <span :class="{ active: sex === '女'}" @click="_setSex('女')"><img src="./woman.png" />女</span>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left"><i>*</i>出生日期</li>
                        <li class="column-right" @click.prevent="_openPicker"><input type="text" disabled v-model="birthday" placeholder="点击选择" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left">手机</li>
                        <li class="column-right"><input type="text" v-model="telephone" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left">邮箱</li>
                        <li class="column-right"><input type="text" v-model="email" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left">地址</li>
                        <li class="column-right" @click="_showAddressPopup"><input type="text" placeholder="点击选择" disabled v-model="simpAddress" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left"></li>
                        <li class="column-right">
                            <textarea name="" placeholder="请输入详细地址" v-model="complexAddress" id="" cols="30" rows="10"></textarea>
                        </li>
                    </ul>
                </div>
            </div>
            <!--日期选择组件-->
                <mt-datetime-picker 
                    ref="datePicker"
                    type="date"
                    @confirm="_handleTime"
                    :startDate="new Date('1900-01-01')"
                ></mt-datetime-picker>
            <!--日期选择组件-->
            <!--地址选择组件-->
                <address-pick ref="addressPopup" :defaultProvinceId="provinceId" :defaultCityId="cityId" :defaultAreaId="areaId"  @selectAddress="_getAddress"></address-pick>
            <!--地址选择组件-->
            <div class="butt">
                <div @click="_resetEvent" class="reset">重置</div>
                <div @click="_saveEvent" class="save">保存</div>
            </div>
        </div>
    </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import { MessageBox } from "mint-ui";
import UploadImg from "base/uploadImg/uploadImg";
import AddressPick from "base/addressPick/addressPick";
export default {
  data() {
    return {
      remind: true, //弹窗提示
      name: "", //姓名
      sex: "男", //性别
      birthday: "", //生日
      telephone: "", //手机号
      email: "", //邮箱
      provinceId: 2, //省份id
      cityId: 52, //城市id
      areaId: 500, //区域id
      province: "", //省
      city: "", //市
      area: "", //区
      simpAddress: "", //保存用于显示用的地址字符串
      complexAddress: "", //详细地址
      picList: [], //保存上传图片文件的数组，元素是file对象
      headPicUrl: "" //保存上传的 头像图片的url地址
    };
  },
  created() {
    // axios({
    //     url: config.host + "/frontcompanyinfoperson-checkAcc",
    //     method: 'post',
    //     data: {
    //         fmiTel: "15130038144",
    //         fmiMile: "15130038144@163.com"
    //     }
    // }).then(res => {
    //     console.log(res)
    // })

    // this.axios.post(config.host + "/frontcompanyinfoperson-checkAcc", {
    //     fmiTel: "15130038144",
    //     fmiMile: "15130038144@163.com"
    // }).then(res => {
    //     console.log(res)
    // })
    this._getPersonMsg(); //获取用户已经设置好的信息内容
  },
  methods: {
    _closeRemind() {
      //关闭提示窗
      this.remind = false;
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
      this.birthday = `${year}-${month}-${day}`;
    },
    _showAddressPopup() {
      //地址选择栏弹出显示
      console.log(this.$refs.addressPopup);
      this.$refs.addressPopup.showAddressComponent();
    },
    _setSex(val) {
      //设置性别
      this.sex = val;
    },
    //获取用户已经设置好的信息内容。后期改为本地获取用户信息
    _getPersonMsg() {
      this.axios({
        method: "post",
        url: "/h5frontmembercentre-home"
      }).then(res => {
        if (res.status === 200) {
          this._initPerson(res.data);
        }
      });
    },
    _resetEvent() {
      //重置事件
      MessageBox({
        title: "提示",
        message: "确定要执行重置操作吗？",
        showCancelButton: true,
        showConfirmButton: true
      }).then(action => {
        action === "confirm" && this._reset(); //如果点击确定，那么进行重置操作
      });
    },
    //初始化用户信息操作：将请求来的用户数据填充到页面上
    _initPerson(data) {
      this.name = data.member.fmiUsername;
      this.sex = data.sex ? data.sex : "男";
      data.fciBirthday && this._handleTime(new Date(data.fciBirthday)); //时间数据转换，并保存给this.birthday
      this.telephone = data.member.fmiTel;
      this.email = data.member.fmiMile;
      this.picList = [{ src: data.member.fmiPath }];
      this.headPicUrl = data.member.fmiPath;
      this.provinceId = data.provinceid ? data.provinceid : 2;
      this.cityId = data.cityid ? data.cityid : 52;
      this.areaId = data.areaid ? data.areaid : 500;
      this.complexAddress = data.fciAddress;
    },
    _reset() {
      //重置信息操作
      this.name = ""; //姓名
      this.sex = "男"; //性别
      this.birthday = ""; //生日
      this.telephone = ""; //手机号
      this.email = ""; //邮箱
      this.complexAddress = ""; //详细地址
      this.provinceId = 2; //省份id
      this.cityId = 52; //城市ID
      this.areaId = 500; //地区id
      this.picList = []; //保存上传图片文件的数组，元素是file对象
      this.headPicUrl = ""; //保存上传的 头像图片的url地址
      this._saveEvent();
    },
    //点击“保存”按钮，进行个人信息保存
    _saveEvent() {
      //保存信息
      var _this = this;
      //进行ajax请求
      //保存用户个人信息
      let sendMsg = () => {
        return this.axios({
          url: "/frontsavebaseinfoset-home",
          method: "post",
          data: {
            fciName: _this.name, //姓名
            fciSex: _this.sex, //性别
            fciBirthday: _this.birthday, //生日  2001-08-06这种形式
            fciTel: _this.telephone, //手机号
            fciMile: _this.email, //邮箱
            provinceId: _this.provinceId, //省份id
            cityId: _this.cityId, //城市id
            areaId: _this.areaId, //地区id
            fciAddress: _this.complexAddress //详细地址
          }
        });
      };

      //上传图片路径
      let sendPic = () => {
        return this.axios({
          url: "/frontbaseheadupdate-home",
          method: "post",
          data: {
            url: _this.headPicUrl
          }
        });
      };

      //并发请求
      this.axios.all([sendMsg(), sendPic()]).then(
        this.axios.spread(function(acct, perms) {
          //修改完成重新设置本地存储
          let ownInfo1 = JSON.parse(localStorage.getItem("ownInfo1"));
          ownInfo1.info.fmiUsername = _this.name;
          ownInfo1.memmberDetail.sex = _this.sex; //性别
          ownInfo1.memmberDetail.province = _this.province; //省
          ownInfo1.memmberDetail.city = _this.city; //市
          ownInfo1.memmberDetail.area = _this.area; //区
          ownInfo1.info.fmiDatetimes = _this.birthday; //时间
          ownInfo1.info.fmiPath = _this.headPicUrl; //头像
          localStorage.setItem("ownInfo1", JSON.stringify(ownInfo1));

          console.log(); //名字
          //这个时候两个请求都完成了
          // console.log(acct, perms)
          MessageBox({
            title: "提示",
            message: "个人信息设置成功"
          });
        })
      );
    },
    getUploadImg(imgList) {
      //获得上传的图片数组
      this.picList = imgList;

      this._upLoadImg(this.picList[0]); //开始上传头像
    },

    //开始上传头像
    _upLoadImg(file) {
      var fd = new FormData();
      fd.append("myFile", file);

      this.axios({
        url: "upload-file",
        method: "post",
        noQs: true, //不进行fs参数处理
        data: fd
      }).then(res => {
        MessageBox({
          title: "提示",
          message: res.data.msg
        });
        if (res.status === 200) {
          this.headPicUrl = res.data.url;
        }
      });
    },

    _getAddress(val) {
      //获取选择的地址对象信息
      this.simpAddress = val
        .map(item => {
          return item.ca_name;
        })
        .join("-");
      this.province = val[0].ca_name; //省
      this.city = val[1].ca_name; //市
      this.area = val[2].ca_name; //区
      this.provinceId = val[0].ca_id;
      this.cityId = val[1].ca_id;
      this.areaId = val[2].ca_id;
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
.personal-set {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 200;
  width: 100%;
  min-height: 100%;
  .setBox {
    position: relative;
    .remind {
      height: 60px;
      font-size: 20px;
      color: #666666;
      padding-left: 30px;
      padding-right: 30px;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      line-height: 60px;
      box-sizing: border-box;
      background: #feffc7;
      display: -webkit-flex;
      display: flex;
      justify-content: space-between;
      .close {
        font-size: 40px;
        color: #999999;
      }
    }
    .head-box {
      padding-top: 100px;
      text-align: center;
      .head-pic {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        background: #f5f5f5;
        margin: 0 auto;
        margin-bottom: 20px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        font-size: 20px;
        color: #000000;
      }
    }
    .form-list {
      margin-top: 60px;
      margin-left: 38px;
      margin-right: 38px;
      .column {
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        ul {
          width: 100%;
          display: flex;
          display: -webkit-flex;
          justify-content: space-between;
          .column-left {
            width: 110px;
            text-align: right;
            font-size: 24px;
            color: #333333;
            line-height: 60px;
            height: 60px;
            i {
              position: relative;
              top: 5px;
            }
          }
          .column-right {
            width: 560px;
            text-align: right;
            input[type="text"] {
              width: 550px;
              height: 60px;
              line-height: 60px;
              border-radius: 6px;
              background: #f5f5f5;
              border: none;
              box-sizing: border-box;
              padding-left: 20px;
            }
            textarea {
              width: 550px;
              height: 140px;
              border-radius: 6px;
              border: none;
              background: #f5f5f5;
              box-sizing: border-box;
              padding-left: 20px;
            }
            span {
              width: 120px;
              height: 60px;
              display: inline-block;
              border: 2px solid #e0e0e0;
              border-radius: 6px;
              text-align: center;
              line-height: 60px;
              font-size: 24px;
              color: #999999;
              margin-left: 10px;
              &.active {
                border: solid 2px #6ea1ff;
                color: #6ea1ff;
              }
              img {
                width: 18px;
                height: 24px;
                position: relative;
                top: 3px;
                margin-right: 5px;
              }
            }
          }
          .align-left {
            text-align: left;
          }
        }
      }
    }
    .address-pick {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      background: #fff;
      z-index: 300;
    }
    // .mint-popup-bottom {
    //     width: 100%;
    // }
    .butt {
      height: 88px;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      color: #fff;
      font-size: 30px;
      .reset {
        width: 36%;
        line-height: 88px;
        background: #aeaeae;
        text-align: center;
      }
      .save {
        width: 64%;
        line-height: 88px;
        background: #6ea1ff;
        text-align: center;
      }
    }
  }
  .mint-msgbox-btns {
    height: 100px !important;
    line-height: 100px !important;
  }
}
</style>

