<template>
    <div class="public-footer">
        <div class="sitg"><!--占位用，撑起公共底部的高度--></div>
        <div ref="mFooter" class="m-footer">
            <mt-tabbar v-model="isSelected">
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
                <mt-tab-item id="mine">
                    <i></i>
                    <br>
                    <span>我的</span>
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isSelected: "",
        }
    },
    props: {
        selected: {
            type: String,
        }
    },
    mounted() {
        this.isSelected = this.selected
        this.isFirst = true         //是否首次状态传值
    },
    watch: {
        isSelected(type) {
            //首次改变是传select值改版的，不进行路由跳转
            this.isFirst ? this.isFirst = !this.isFirst : this._jumpRouter(type)
        }
    },
    methods: {
        _jumpRouter(type) {
            // this.$emit("changeSelect", "")      //修改父组件传入的导航选中状态，避免在页面两次跳转相同的二级导航栏目，状态selected值不变，无法监听。导致导航栏选中状态无法同步

            var path = ""
            switch(type) {
                case 'index': path = '/'; break;
                case 'information': path = '/information'; break;
                case 'activity': path = '/activity'; break;
                case  'classroom': path = '/classroom'; break;
                case 'mine': path = '/mine'; break;
            }
            this.$router.push({
                path
            })
        }
    }
}
</script>
<style lang="less" scoped>
.public-footer {
    position: relative;
}
.sitg {
    height: 100px;
}
.m-footer {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 200;
    width: 100%;
    background: red;
    -webkit-overflow-scrolling: touch;
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

