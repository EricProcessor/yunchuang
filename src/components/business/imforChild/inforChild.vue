<template>
    <div class="inforImgBox">
        <img class="inforImg" src="/static/images/business_1.jpg" alt="">
        <List></List>
    </div>
</template>
<script>
import List from "../inforChildList/inforChildList";
export default {
  components: {
    List
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
