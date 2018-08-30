<template>
    <div class="index-header" @click="linkSearchHeader">
        首页
        <i data-v-5eeac47d="" class="mintui mintui-search"></i>
    </div>
</template>
<script>
export default {
  components: {},
  methods: {
    linkSearchHeader() {
      this.$router.push("/HeaderSearch");
    }
  }
};
</script>
<style lang="less" scoped>
.index-header {
  height: 88px;
  background: #253350;
  line-height: 88px;
  text-align: center;
  font-size: 36px;
  color: #fff;
}
.mintui-search:before {
  font-size: 0.64rem;
  color: #fff;
  position: absolute;
  right: 20px;
}
</style>

