<template>
    <div class="personal-set">
        <index-header :text="headerText" :hasSearch="false"></index-header>
        <div class="setBox">
            <p class="remind">带*号为必填项，请务必如实填写  <i class="close">&times;</i></p>
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
                        <li class="column-right"><input type="text" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left"><i>*</i>性别</li>
                        <li class="column-right">
                            <span>男</span>
                            <span>女</span>
                        </li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left"><i>*</i>出生日期</li>
                        <li class="column-right"><input type="text" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left">手机</li>
                        <li class="column-right"><input type="text" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left">邮箱</li>
                        <li class="column-right"><input type="text" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left">地址</li>
                        <li class="column-right"><input type="text" /></li>
                    </ul>
                </div>
                <div class="column">
                    <ul>
                        <li class="column-left"></li>
                        <li class="column-right"><input type="text" placeholder="请输入详细地址" /></li>
                    </ul>
                </div>
            </div>
            <div class="butt">
                <div class="reset">重置</div>
                <div class="save">保存</div>
            </div>
        </div>
    </div>
</template>
<script>
import IndexHeader from 'business/indexHeader/indexHeader'

export default {

    created() {
        console.log("找到我这个组件了")
        this.headerText = "个人设置"        //头部显示内容
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
                ul {
                    width: 100%;
                    .column-left {
                        width: 115px;
                    }
                    .column-right {
                        width: 560px;
                        input[type=text] {
                            width: 550px;
                            height: 60px;
                            line-height: 60px;
                            border-radius: 6px;
                            background: #f5f5f5;
                            border: none;
                        }
                    }
                }
            }
        }
    }
}
</style>

