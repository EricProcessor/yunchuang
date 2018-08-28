<template>
    <div class="swiper">
        <mt-swipe :auto="3000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
            <mt-swipe-item>4</mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="less" scoped>
.swiper {
    height: 320px;
    border: 1px solid red;
}
</style>

