<template>
    <div class="m-footer">
        <mt-tabbar fixed v-model="isSelected">
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
            isSelected: "index"
        }
    },
    props: {
        selected: {
            type: String,
            default: "index"
        }
    },
    watch: {
        isSelected(type) {
            //路由跳转
            this._jumpRouter(type)
        },
        selected(path) {
            console.log("传递的路由路径值改变了")

            //如果selected改变的值是""，那么就是切换导航时手动清空的，不是父组件传过来的。不做处理
            path ? this.isSelected = path : ""
            
        }
    },
    methods: {
        _jumpRouter(type) {
            this.$emit("changeSelect", "")      //修改父组件传入的导航选中状态，避免在页面两次跳转相同的二级导航栏目，状态selected值不变，无法监听。导致导航栏选中状态无法同步

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

