<template>
    <div class="index-content">
        <index-header></index-header>
        <swiper></swiper>
        <mfooter></mfooter>
    </div>
</template>
<script>
import IndexHeader from 'business/indexHeader/indexHeader'
import Swiper from 'base/swiper/swiper'
import Mfooter from 'business/mFooter/mFooter'
export default {
    data() {
        return {

        }
    },
    components: {
        IndexHeader,
        Swiper,
        Mfooter
    }
}
</script>
<style lang="less" scoped>

</style>

