<template>
    <div class="m-footer">
        <mt-tabbar fixed v-model="selected">
            <mt-tab-item id="index">
                <img slot="icon" alt="">
                首页
            </mt-tab-item>
            <mt-tab-item id="information">
                <img slot="icon" alt="">
                资讯
            </mt-tab-item>
            <mt-tab-item id="activity">
                <img slot="icon" alt="">
                活动
            </mt-tab-item>
            <mt-tab-item id="classroom">
                <img slot="icon" alt="">
                课堂
            </mt-tab-item>
            <mt-tab-item id="my">
                <img slot="icon" alt="">
                我的
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
        selected(id) {
            console.log("selected改变了" + id)
        }
    }
}
</script>
<style lang="less" scoped>

</style>

