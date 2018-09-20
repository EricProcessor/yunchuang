<template>
  <div class="inforImgBox">
    <!-- <img class="inforImg" src="/static/images/business_1.jpg" alt=""> -->
    <Swiper :data="carouselData"></Swiper>
  </div>
</template>
<script>
import Swiper from "base/swiper/swiper";
export default {
  data() {
    return {
      carouselData: []
    };
  },
  methods: {
    _getCarouselData() {
      this.axios({
        url: "h5frontpageList-home",
        method: "post"
      }).then(res => {
        if (res.status === 200) {
          this.carouselData = res.data.atiList;
        }
      });
    }
  },
  mounted(){
    this._getCarouselData();
  },
  components: {
    Swiper
  }
};
</script>
<style lang="less" scoped>
.inforImgBox {
  margin-top: 12px;
  .inforImg {
    width: 100%;
    height: 260px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
