<template>
    <div class="personal-set">
        <index-header :text="headerText" :hasSearch="false"></index-header>
        <div class="setBox">
            <p class="remind" v-show="remind">带*号为必填项，请务必如实填写  <i class="close" @click="_closeRemind">&times;</i></p>
            <div class="head-box">
                <div class="head-pic">
                    <img src="" alt="">
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
                            <span>男</span>
                            <span>女</span>
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
                        <li class="column-right"><input type="text" v-model="simpAddress" /></li>
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
            <!--日期选择组件-->
            <mt-datetime-picker 
                ref="datePicker"
                type="date"
                @confirm="_handleTime"
            ></mt-datetime-picker>
            <!--日期选择组件-->
            <!--地址选择组件-->
            <div class="address-pick" v-show="addressShow">
                <mt-picker :slots="slots" @change="_changeAddress"></mt-picker>
            </div>
            <!--地址选择组件-->
            <div class="butt">
                <div class="reset">重置</div>
                <div class="save">保存</div>
            </div>
        </div>
    </div>
</template>
<script>
import IndexHeader from 'business/indexHeader/indexHeader'
import address from '@/config/address.json'         //地址三级联动json数据
export default {
    data() {
        return {
            remind: true,       //弹窗提示
            addressShow: false,     //选择地址栏显示/隐藏
            name: "",       //姓名
            sex: "",            //性别
            birthday: "",           //生日
            telephone: "",          //手机号
            email: "",              //邮箱
            simpAddress: "",              //简单地址
            address: "",             //详细地址
            slots: [{
                flex: 1,    
                values: Object.keys(address),
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                values: [],
                className: 'slot3',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot4'
            }, {
                flex: 1,
                values: [],
                className: 'slot5',
                textAlign: 'center'
            }],
            addressProvince: '北京',
            addressCity: '北京'
        }
    },
    created() {
        this.headerText = "个人设置"        //头部显示内容
    },
    methods: {
        _closeRemind() {    //关闭提示窗
            this.remind = false
        },
        _openPicker() {     //打开时间选择器
            this.$refs.datePicker.open()
        },
        _handleTime(date) {     //转换得到的时间格式
            console.log(date)
            
            let year = date.getFullYear(),
                month = date.getMonth() - 0 + 1,
                day = date.getDate()
            this.birthday = `${year}-${month}-${day}`
        },
        _changeAddress(picker, values) {              //地址选择组件改变后调用的  回调函数
            console.log(values)             //values为当前选中的地址数组
            picker.setSlotValues(1, address[values[0]]);    //设置二级联动的内容。第二个参数为内容数组
            this.addressProvince = values[0];
            this.addressCity = values[1];
            this.addressShow
        },
        _setAddress() {     //请求用户数据后，设置地点
            picker.setValues(["北京", "北京"])
        },

    },
    components: {
        IndexHeader
    }
}
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
                            border: 2px solid #6ea1ff;
                            border-radius: 6px;
                            text-align: center;
                            line-height: 60px;
                            font-size: 24px;
                            color: #999999;
                            margin-left: 10px;
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
}
</style>

