<template>
    <div class="class-video">
        <div class="video-box"></div>
        <div class="class-content">
            <h2>马云电商云商互联网领导智慧沟通营销销售讲座</h2>
            <div class="summary">
                <span>录制场景</span>
                <p>视频录制于阿里巴巴总部演讲厅</p>
            </div>
            <div class="summary">
                <span>视频时长</span>
                <p>220分钟</p>
            </div>
            <div class="summary">
                <span>主讲人</span>
                <p>马云</p>
            </div>
            <div class="summary">
                <span>课程摘要</span>
                <p>这里是课程摘要考虑到实际发牢骚的经费落实地方就是了快递费</p>
            </div>
            <div class="summary">
                <span>个人简介</span>
                <div class="over-box">
                    <div class="over-content">
                        看电视剧了分手费劲死了多少了空间的法律的纠纷乐山大佛框架类看电视剧了分手费劲死了多少了空间的法律的纠纷乐山大佛框架类
                    </div>
                </div>
                <div class="show-more">
                    <span @click="_showMore">展开</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        _showMore() {       //点击“展开”显示更多

        }
    }
}
</script>
<style lang="less" scoped>
.class-video {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: #fff;
    min-height: 100%;
    .video-box {
        height: 420px;
        background: #cad3dc;
    }
    .class-content {
        padding-top: 25px;
        padding-left: 20px;
        padding-right: 20px;
        h2 {
            font-size: 30px;
            line-height: 40px;
            color: #333333;
        }
        .summary {
            margin-top: 30px;
            span {
                font-size: 24px;
                line-height: 40px;
                color: #999999;
            }
            p {
                font-size: 24px;
                line-height: 40px;
                color: #666666;
            }
            .over-box {
                height: 143px;
                overflow: hidden;
                .over-content {
                    font-size: 24px;
                    line-height: 40px;
                    color: #666666;
                }
            }
            .show-more {
                font-size: 20px;
                line-height: 40px;
                color: #37bef0;
                text-align: center;
            }
        }
    }
}
</style>

