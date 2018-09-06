<template>
    <div class="enterprise-set">
        <index-header text="企业设置" :hasSearch="false"></index-header>
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
                        <li class="column-left"><i>*</i>联系人</li>
                        <li class="column-right"><input type="text" v-model="name" /></li>
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
                        <li class="column-left"><i>*</i>网址</li>
                        <li class="column-right"><input type="text" disabled v-model="website" /></li>
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
                            <textarea name="" placeholder="请输入详细地址" v-model="address" id="" cols="30" rows="10"></textarea>
                        </li>
                    </ul>
                </div>
            </div>
            <!--地址选择组件-->
                <address-pick ref="addressPopup" @selectAddress="_getAddress"></address-pick>
            <!--地址选择组件-->
            <div class="butt">
                <div @click="_resetEvent" class="reset">重置</div>
                <div @click="_saveEvent" class="save">保存</div>
            </div>
        </div>
    </div>
</template>
<script>
import IndexHeader from 'business/indexHeader/indexHeader'
import axios from '@/config/axiosConf'
import config from '@/config/config'
import {MessageBox} from 'mint-ui'
import UploadImg from 'base/uploadImg/uploadImg'
import AddressPick from 'base/addressPick/addressPick'
export default {
    data() {
        return {
            remind: true,       //弹窗提示
            name: "",       //企业名称
            telephone: "",          //联系方式
            website: "",            //网址
            email: "",              //邮箱
            simpAddress: "",              //简单地址
            address: "",             //详细地址
            picList: []            //保存上传图片文件的数组，元素是file对象
        }
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

        // axios.post(config.host + "/frontcompanyinfoperson-checkAcc", {
        //     fmiTel: "15130038144",
        //     fmiMile: "15130038144@163.com"
        // }).then(res => {
        //     console.log(res)
        // })
    },
    methods: {
        _closeRemind() {    //关闭提示窗
            this.remind = false
        },
        _showAddressPopup() {       //地址选择栏弹出显示
            this.$refs.addressPopup.showAddressComponent()
        },
        _resetEvent() {          //重置事件
            MessageBox({
                title: '提示',
                message: "确定要执行此操作吗？",
                showCancelButton: true,
                showConfirmButton: true,
            }).then( action => {
                (action === "confirm") && this._reset()     //如果点击确定，那么进行重置操作
            })
        },
        _reset() {            //重置信息操作
            this.name = ""       //姓名
            this.sex = ""            //性别
            this.birthday = ""          //生日
            this.telephone = ""         //手机号
            this.email = ""           //邮箱
            this.simpAddress = "",              //简单地址
            this.address = ""             //详细地址
        },
        _saveEvent() {               //保存信息
            //进行ajax请求

        },
        getUploadImg(imgList) {     //获得上传的图片数组
            this.picList = imgList
        },
        _getAddress(val) {      //获取选择的地址
            this.simpAddress = val
        }
    },
    components: {
        IndexHeader,
        UploadImg,
        AddressPick
    }
}
</script>
<style lang="less" scoped>
.enterprise-set {
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
            dispaly: flex;
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
                        input[type=text] {
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
                width: 270px;
                line-height: 88px;
                background: #aeaeae;
                text-align: center;
            }
            .save {
                width: 480px;
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

