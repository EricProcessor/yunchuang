<template>
    <div class="inforImgBox">
        <img class="inforImg" src="/static/images/business_1.jpg" alt="">
        <infor-child-list></infor-child-list>
    </div>
</template>
<script>
import InforChildList from "../inforChildList/inforChildList";
export default {
  components: {
    InforChildList
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
