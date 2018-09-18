<template>
    <div class="swiper">
        <mt-swipe :auto="3000">
            <mt-swipe-item v-for="(val, index) in data" :key="index"><a :href="val.faiUrl"><img :src="val.faiPath" /></a></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {
    props: {
        data: {
            type: Array,
        }
    }
}
</script>
<style lang="less" scoped>
.swiper {
    height: 320px;
    .mint-swipe-item {
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>

