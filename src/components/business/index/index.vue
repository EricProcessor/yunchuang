<template>
    <div class="index-content">
        <index-header text="首页"></index-header>
        <swiper></swiper>
        <div class="tab-list">
            <tabs :showBanner="false"></tabs>
            <p @click="_jump('information')">查看更多</p>
        </div>
        <div class="block">
            <div class="block-title">
                <h2>创业活动</h2>
                <span @click="_jump('activity')">更多</span>
            </div>
            <div class="block-list activity-list">
                <ul>
                    <li @click="_jumpToActive(val.faiId)" v-for="(val,index) in activeData" :key="index">
                        <img :src="val.faiPath" :alt="val.faiName" />
                        <h3>{{val.faiName}}</h3>
                    </li>
                </ul>
            </div>
        </div>
        <div class="block">
            <div class="block-title">
                <h2>创业课堂</h2>
                <span @click="_jump('classroom')">更多</span>
            </div>
            <div class="block-list class-list">
                <ul>
                    <li @click="_jumpToClassroom(val.fdpId)" v-for="(val, index) in classroomData" :key="index">
                        <div class="class-img">
                            <img :src="val.fpdCoverPath" :alt="val.fdpTitle" />
                            <i><img src="./video-play-big.png" /></i>
                        </div>
                        <h3>{{val.fdpTitle}}</h3>
                        <!-- <span class="hot-sowing">正在热播</span> -->
                        <span>{{val.fpdExamine}}次观看</span>
                    </li>
                </ul>
            </div>
        </div>
        <m-footer selected="index"></m-footer>
    </div>
</template>
<script>
import IndexHeader from 'business/indexHeader/indexHeader'
import Swiper from 'base/swiper/swiper'
import Tabs from 'base/tabs/tabs'
import config from '@/config/config'
import MFooter from 'business/mFooter/mFooter'
export default {
    data() {
        return {     
            activeData: [],         //创业活动保存数据
            classroomData: []       //创业课堂保存数据
        }
    },
    created() {
        this._getEntrepreneurshipData()     //获取创业活动列表信息
        this._getClassroomData()            //获取创业课堂列表信息
    },
    methods: {
        //点击"更多"，路由跳转
        _jump(path) {
            this.$router.push({
                path
            })
            //改变导航栏对应的选中状态
            this.$emit("changeSelect", path)
        },
        //获取创业活动列表信息
        _getEntrepreneurshipData() {
            this.axios({
                url: "/h5frontactivityinfo-foreshow",
                method: "post",
            }).then(res => {
                if (res.status === 200) {
                    this.activeData = res.data.list
                }
            })
        },
        //点击“创业活动”列表跳转到详情页面
        _jumpToActive(id) {
            return 
            this.$router.push({
                path: "/activity/" + id
            })
        },
        //获取创业课堂列表信息
        _getClassroomData() {
            this.axios({
                url: "/h5frontclassroom-sift",
                method: 'post'
            }).then(res => {
                if (res.status === 200) {
                    this.classroomData = res.data.dpList
                }
            })
        },
        //点击“创业课堂”列表跳转到详情页面
        _jumpToClassroom(id) {
            return 
            this.$router.push({
                path: "/classroom/" + id
            })
        }
    },
    components: {
        IndexHeader,
        Swiper,
        Tabs,
        MFooter
    }
}
</script>
<style lang="less" scoped>
.index-content {
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
        margin-top: 20px;
        padding-bottom: 10px;
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
            margin-left: 20px;
            margin-right: 20px;
            height: 240px;
            margin-top: 10px;
            ul {
                white-space: nowrap;
                li {
                    height: 240px;
                    width: 165px;
                    display: inline-block;
                    margin-right: 20px;
                    img {
                        width: 165px;
                        height: 165px;
                        border-radius: 5px;
                        display: inline-block;
                    }
                    h3 {
                        font-size: 22px;
                        line-height: 32px;
                        height: 64px;
                        color: #333333;
                        margin-top: 10px;
                        overflow: hidden;
                        white-space: normal;
                        text-overflow: ellipsis;
                        -webkit-line-clamp: 2;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                    }
                }
            }
        }
        .class-list {
            overflow-x: auto;
            overflow-y: hidden;
            margin-left: 20px;
            margin-right: 20px;
            height: 480px;
            margin-top: 10px;
            ul {
                white-space: nowrap;
                li {
                    height: 480px;
                    width: 660px;
                    margin-left: 20px;
                    display: inline-block;
                    .class-img {
                        width: 660px;
                        height: 370px;
                        border-radius: 10px;
                        display: inline-block;
                        overflow: hidden;
                        position: relative;
                        &>img {
                            width: 660px;
                            height: 370px;
                        }
                        i {
                            display: inline-block;
                            width: 120px;
                            height: 120px;
                            position: absolute;
                            top: 50%;
                            left: 50%;
                            margin-left: -60px;
                            margin-top: -60px;
                            img {
                                width: 120px;
                                height: 120px;
                            }
                        }
                    }
                    h3 {
                        font-size: 28px;
                        line-height: 40px;
                        height: 40px;
                        color: #333333;
                        margin-top: 10px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        margin-bottom: 10px;
                    }
                    .hot-sowing {
                        width: 120px;
                        height: 40px;
                        border-radius: 5px;
                        color: #fff;
                        background: #f35828;
                        line-height: 36px;
                        text-align: center;
                        font-size: 20px;
                        display: inline-block;
                    }
                }
            }
        }

    }
}
</style>

