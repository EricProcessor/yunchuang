<template>
    <div class="enterprise-set">
        <index-header text="企业设置" :hasSearch="false"></index-header>
        <scroll class="listview">
          <div class="setBox">
              <p class="remind" v-show="remind">带*号为必填项，请务必如实填写  <i class="close" @click="_closeRemind">&times;</i></p>
                  <div class="head-box">
                    <div class="head-pic">
                        <img v-if="picList[0]" :src="picList[0].src" alt="">
                        <upload-img @getImg="getHeadUploadImg"></upload-img>
                    </div>
                    <span>更换头像</span>
                  </div>
                  <div class="form-list">
                      <div class="column">
                          <ul>
                              <li class="column-left"><i>*</i>联系人</li>
                              <li class="column-right"><input type="text" v-model="name" /></li>
                          </ul>
                      </div>
                      <div class="column">
                          <ul>
                              <li class="column-left">联系电话</li>
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
                              <li class="column-left">网址</li>
                              <li class="column-right"><input type="text" v-model="website" /></li>
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
                      <div class="column">
                          <ul>
                              <li class="column-left">照片</li>
                              <div class="column-right align-left">
                                  <div class="img-box">
                                      <img v-if="picList2[0]" :src="picList2[0].src" />
                                      <upload-img @getImg="getUploadImg"></upload-img>
                                  </div>
                                  <div class="upload-state">
                                    
                                  </div>
                              </div>
                          </ul>
                      </div>
                  </div>
          </div>
          <div class="butt">
              <div @click="_resetEvent" class="reset">重置</div>
              <div @click="_saveEvent" class="save">保存</div>
          </div>
        </scroll>
        <!--地址选择组件-->
            <address-pick v-if="isEchoAjaxOver" ref="addressPopup" :defaultProvinceId="provinceId" :defaultCityId="cityId" :defaultAreaId="areaId"  @selectAddress="_getAddress"></address-pick>
        <!--地址选择组件-->
    </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import { MessageBox } from "mint-ui";
import UploadImg from "base/uploadImg/uploadImg";
import AddressPick from "base/addressPick/addressPick";
import Scroll from 'base/scroll/scroll'
export default {
  data() {
    return {
      remind: true, //弹窗提示
      isEchoAjaxOver: false,        //用来记录回显用的ajax是否响应了。解决 地址选择组件在默认传值时，数据还没请求过来，导致没法回显的问题
      userId: "", //用户的fciId       暂时写死，后边要从登陆保存的用户信息中获取fciId
      name: "", //企业名称
      telephone: "", //联系方式
      website: "", //网址
      email: "", //邮箱
      provinceId: 2, //省份id
      cityId: 52, //城市ID
      areaId: 500, //地区id
      simpAddress: "", //简单地址
      complexAddress: "", //详细地址
      picList: [], //保存头像上传图片文件的数组，元素是file对象
      picList2: [], //保存照片上传图片文件的数组，元素是file对象
      headPicUrl: "", //保存上传的头像返回的 url地址
      picture: "" //保存上传的照片返回的 url地址
    };
  },
  created() {
    this._getMsg(); //设置数据
  },
  methods: {
    _closeRemind() {
      //关闭提示窗
      this.remind = false;
    },
    _showAddressPopup() {
      //地址选择栏弹出显示
      this.$refs.addressPopup.showAddressComponent();
    },
    //获取已经设置好的企业信息内容。接口还未完成。后期 改为在本地获取（登陆后保存的用户信息）
    _getMsg() {
      this.axios({
        method: "post",
        url: "/h5frontmembercentre-home"
      }).then(res => {
        if (res.status === 200) {
          this._initMsg(res.data);
        }
      });
    },
    //初始化公司信息操作：将请求来的公司数据填充到页面上
    _initMsg(data) {
      console.log(typeof data)
      this.userId = data.fciId;
      this.name = data.fciName;
      this.telephone = data.fciTel;
      this.email = data.fciMile;
      this.website = data.fciUrl;
      this.picList = [{ src: data.member ? data.member.fmiPath : "" }];    //头像显示
      this.picList2 = [{src: data.fciPath ? data.fciPath : ""}]         //照片显示
      this.headPicUrl = data.member ? data.member.fmiPath : "";        //头像保存地址用
      this.picture = data.fciPath ? data.fciPath : ""               //照片保存地址用
      this.complexAddress = data.fciAddress;
      this.provinceId = data.provinceid ? data.provinceid : 2;
      this.cityId = data.cityid ? data.cityid : 52;
      this.areaId = data.areaid ? data.areaid : 500;

      this.isEchoAjaxOver = true    //这个时候地址选择组件v-if开始渲染
    },
    //重置事件
    _resetEvent() {
      MessageBox({
        title: "提示",
        message: "确定要执行此操作吗？",
        showCancelButton: true,
        showConfirmButton: true
      }).then(action => {
        action === "confirm" && this._reset(); //如果点击确定，那么进行重置操作
      });
    },
    //重置信息操作
    _reset() {
      this.name = ""; //姓名
      this.website = ""; //网址
      this.telephone = ""; //联系方式
      this.email = ""; //邮箱
      (this.complexAddress = ""), //详细地址
        (this.provinceId = 2), //省份
        (this.cityId = 52), //城市
        (this.areaId = 500), //区域
        (this.picList = []); //头像信息
      this.picList2 = []; //照片图片信息
      this.picture = ""; //照片上传路径清空
      this.headPicUrl = ""; //头像上传路径清空

      this._saveEvent(); //设置
    },
    //点击“保存”按钮，进行个人信息保存
    _saveEvent() {
      //保存信息
      var _this = this;
      //进行ajax请求
      //保存用户个人信息
      let sendMsg = () => {
        return this.axios({
          url: "/frontcompanysavebaseinfoset-home",
          method: "post",
          data: {
            fciId: _this.userId, //ID
            fciName: _this.name, //姓名
            fciTel: _this.telephone, //联系方式
            fciUrl: _this.website, //网址
            fciMile: _this.email, //邮箱
            fciAddress: _this.complexAddress, //详细地址
            provinceId: _this.provinceId, //省份id
            cityId: _this.cityId, //城市ID
            areaId: _this.areaId, //地区id
            fciPath: _this.picture, //上传的照片返回的 url地址
            picList: [], //保存头像上传图片文件的数组，元素是file对象
            picList2: [], //保存照片上传图片文件的数组，元素是file对象
            url: _this.headPicUrl //上传图片
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
        this.axios.spread((acct, perms) => {
          //这个时候两个请求都完成了
          // console.log(acct, perms)
            this.refreshLocal()
          MessageBox({
            title: "提示",
            message: "企业信息设置成功"
          });
        })
      );
    },
    //更新本地localStorage内的信息，用于返回到“我的”页面时，信息更新
    refreshLocal() {
         //修改完成重新设置本地存储
          let ownInfo1 = JSON.parse(localStorage.getItem("ownInfo1"));
          ownInfo1.info.fmiUsername = this.name;
          ownInfo1.memmberDetail.province = this.simpAddress.split('-')[0]; //省
          ownInfo1.memmberDetail.provinceid = this.provinceId; //省
          ownInfo1.memmberDetail.city = this.simpAddress.split('-')[1]; //市
          ownInfo1.memmberDetail.cityid = this.cityId; //市
          ownInfo1.memmberDetail.area = this.simpAddress.split('-')[2]; //区
          ownInfo1.memmberDetail.areaid = this.areaId; //区
          ownInfo1.info.fmiPath = this.headPicUrl; //头像
          localStorage.setItem("ownInfo1", JSON.stringify(ownInfo1));
    },
    getHeadUploadImg(imgList) {
      //获得上传的头像图片数组
      this.picList = imgList;

      //开始上传头像
      this._upLoadImg(this.picList[0], "headPicUrl");
    },
    getUploadImg(imgList) {
      //获得上传的照片图片数组。
      this.picList2 = imgList;

      //开始上传照片
      this._upLoadImg(this.picList2[0], "picture");
    },
    //开始上传头像。第一个参数是 图片文件对象， 第二个参数是 用来判断是要保存哪个图片
    _upLoadImg(file, imgType) {
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
          imgType === "headPicUrl"
            ? (this.headPicUrl = res.data.url)
            : (this.picture = res.data.url);
        }
      });
    },
    _getAddress(val) {
      //获取选择的地址
      this.simpAddress = val
        .map(item => {
          return item.ca_name;
        })
        .join("-");
      this.provinceId = val[0].ca_id;
      this.cityId = val[1].ca_id;
      this.areaId = val[2].ca_id;
    }
  },
  components: {
    IndexHeader,
    UploadImg,
    AddressPick,
    Scroll
  }
};
</script>
<style lang="less" scoped>
.enterprise-set {
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 200;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .listview {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
  }
  .setBox {
    position: relative;
    padding-bottom: 200px;
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
            .img-box {
              width: 280px;
              height: 180px;
              position: relative;
              background: #f5f5f5;
              border-radius: 6px;
              margin-left: 10px;
              float: left;
              img {
                width: 100%;
                height: 100%;
                z-index: 50;
                position: relative;
              }
              &:before {
                content: "";
                width: 80px;
                border-top: 2px solid #d9d9d9;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-left: -40px;
                z-index: 10;
              }
              &:after {
                content: "";
                height: 80px;
                border-left: 2px solid #d9d9d9;
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -40px;
                z-index: 10;
              }
            }
            .upload-state {
              width: 255px;
              padding-top: 35px;
              padding-left: 20px;
              box-sizing: border-box;
              float: left;
              display: inlin-block;
              font-size: 20px;
              line-height: 36px;
              color: #999999;
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
  }
  .butt {
      height: 88px;
      width: 100%;
      position: absolute;
      bottom: 88px;
      left: 0;
      display: flex;
      display: -webkit-flex;
      justify-content: space-between;
      color: #fff;
      font-size: 30px;
      z-index: 300;
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
  .mint-msgbox-btns {
    height: 100px !important;
    line-height: 100px !important;
  }
}
</style>

