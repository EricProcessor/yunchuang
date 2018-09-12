<template>
    <div class="classroom">
        <!--课堂页面组件-->
        <index-header text="课堂"></index-header>
        <div class="video-box">
            <!-- <i class="is-live">正在直播</i>
            <i class="play-butt"><img src="./video-play-big.png" /></i>
            <p class="state">马云电商云商互联网领导智慧沟通营销销售讲座</p> -->
            <swiper></swiper>
        </div>
        <div class="class-list">
            <class-tab></class-tab>
        </div>
        <router-view></router-view>
        <m-footer selected="classroom"></m-footer>
    </div>
</template>
<script>
import IndexHeader from 'business/indexHeader/indexHeader'
import MFooter from 'business/mFooter/mFooter'
import ClassTab from 'business/classTab/classTab'
import Swiper from 'base/swiper/swiper'

export default {
    components: {
        IndexHeader,
        MFooter,
        Swiper,
        ClassTab
    }
}
</script>
<style lang="less" scoped>
.classroom{
    .video-box {
        height: 370px;
        background: #cad3dc;
        position: relative;
        .is-live {
            background: red;
            width: 180px;
            height: 50px;
            position: absolute;
            top: 0;
            left: 0;
            text-align: center;
            line-height: 50px;
            color: #fff;
            font-size: 20px;
        }
        .play-butt {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -60px;
            margin-top: -90px;
            width: 120px;
            height: 120px;
            img {
                width: 120px;
                height: 120px;
            }
        }
        .state {
            width: 100%;
            height: 60px;
            box-sizing: border-box;
            background: rgba(0, 0, 0, 0.6);
            line-height: 60px;
            padding-left: 30px;
            color: #fff;
            position: absolute;
            bottom: 0;
            left: 0;
            font-size: 24px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
}
</style>

