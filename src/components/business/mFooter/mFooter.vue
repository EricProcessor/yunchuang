<template>
    <div class="m-footer">
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="index">
                <i></i>
                <br>
                <span>首页</span>
            </mt-tab-item>
            <mt-tab-item id="information">
                <i></i>
                <br>
                <span>资讯</span>
            </mt-tab-item>
            <mt-tab-item id="activity">
                <i></i>
                <br>
                <span>活动</span>
            </mt-tab-item>
            <mt-tab-item id="classroom">
                <i></i>
                <br>
                <span>课堂</span>
            </mt-tab-item>
            <mt-tab-item id="my">
                <i></i>
                <br>
                <span>我的</span>
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selected: "index"
        }
    },
    watch: {
        selected(type) {
            //路由跳转
            this._jumpRouter(type)
        }
    },
    methods: {
        _jumpRouter(type) {
            var path = ""
            switch(type) {
                case 'index': path = '/'; break;
                case 'information': path = '/information'; break;
                case 'activity': path = '/activity'; break;
                case  'classroom': path = '/'; break;
                case 'my': path = '/'; break;
            }
            this.$router.push({
                path
            })
        }   
    }
}
</script>
<style lang="less" scoped>
.m-footer {
    .mint-tabbar {
        .mint-tab-item {
            height: 100px;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
            vertical-align: middle;
            padding: 0;
            .mint-tab-item-label {
                i {
                    display: inline-block;
                    width: 36px;
                    height: 36px;
                }
                span {
                    color: #666666;
                    font-size: 20px;
                }
            }
            &.is-selected {
                span {
                    color: #6ea1ff;
                }
            }
            &:first-child {
                i {
                    background: url(./index.png) center no-repeat;
                    background-size: 100%;
                }
                &.is-selected {
                    i {
                        background: url(./index-selected.png) center no-repeat;
                        background-size: 100%;
                    }
                }
            }
            &:nth-child(2) {
                i {
                    background: url(./information.png) center no-repeat;
                    background-size: 100%;
                }
                &.is-selected {
                    i {
                        background: url(./information-selected.png) center no-repeat;
                        background-size: 100%;
                    }
                }
            }
            &:nth-child(3) {
                i {
                    background: url(./activity.png) center no-repeat;
                    background-size: 100%;
                }
                &.is-selected {
                    i {
                        background: url(./activity-selected.png) center no-repeat;
                        background-size: 100%;
                    }
                }
            }
            &:nth-child(4) {
                i {
                    background: url(./classroom.png) center no-repeat;
                    background-size: 100%;
                }
                &.is-selected {
                    i {
                        background: url(./classroom-selected.png) center no-repeat;
                        background-size: 100%;
                    }
                }
            }
            &:last-child {
                i {
                    background: url(./my.png) center no-repeat;
                    background-size: 100%;
                }
                &.is-selected {
                    i {
                        background: url(./my-selected.png) center no-repeat;
                        background-size: 100%;
                    }
                }
            }
        }
    }
}
</style>

