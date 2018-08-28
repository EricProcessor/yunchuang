<template>
    <div class="index-content">
        <index-header></index-header>
        <swiper></swiper>
        <mfooter></mfooter>
        <div class="tab-list">
            <tabs></tabs>
            <p>查看更多</p>
        </div>
        <div class="block">
            <div class="block-title">
                <h2>创业活动</h2>
                <span>更多</span>
            </div>
            <div class="block-list activity-list">
                <ul>
                    <li>
                        <img src="" alt="" />
                        <h3>人工智能研讨峰会</h3>
                    </li>
                </ul>
            </div>
        </div>
        <div class="block">
            <div class="block-title">
                <h2>创业课堂</h2>
                <span>更多</span>
            </div>
            <div class="block-list class-list">
                <ul>
                    <li>
                        <img src="" alt="" />
                        <h3>赢创学院《霍夫曼独角兽训练营》第2期</h3>
                        <span class="hot-sowing">正在热播</span>
                        <span>183次观看</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import IndexHeader from 'business/indexHeader/indexHeader'
import Swiper from 'base/swiper/swiper'
import Mfooter from 'business/mFooter/mFooter'
import Tabs from 'base/tabs/tabs'
export default {
    data() {
        return {

        }
    },
    components: {
        IndexHeader,
        Swiper,
        Mfooter,
        Tabs
    }
}
</script>
<style lang="less" scoped>
.index-content {
    padding-bottom: 55px;
    .tab-list{ 
        p {
            height: 70px;
            line-height: 70px;
            text-align: center;
            font-size: 20px;
            color: #666666;
            background: #F5F5F5;
        }
    }
    .block {
        background: #fff;
        .block-title {
            margin-left: 20px;
            margin-right: 20px;
            position: relative;
            h2 {
                color: #333333;
                font-size: 30px;
                line-height: 60px;
                height: 60px;
                padding-left: 20px;
                position: relative;
                &:before {
                    content: "";
                    display: block;
                    border-left: 10px solid #37bef0;
                    height: 30px;
                    position: absolute;
                    top: 15px;
                    left: 0px;
                }
            }
            span {
                position: absolute;
                top: 20px;
                right: 0px;
                font-size: 20px;
                color: #6ea1ff;
            }
        }
        .activity-list {
            overflow-x: auto;
            overflow-y: hidden;
            ul {
                li {
                    height: 240px;
                    width: 165px;
                    display: inline-block;
                    img {
                        width: 165px;
                        height: 165px;
                        border-radius: 5px;
                        display: inline-block;
                        background: red;
                    }
                    h3 {
                        font-size: 22px;
                        line-height: 32px;
                        color: #333333;
                        margin-top: 20px;
                    }
                }
            }
        }
    }
}
</style>

