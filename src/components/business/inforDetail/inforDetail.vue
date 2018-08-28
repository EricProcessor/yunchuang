<template>
    <div>
        <!-- header -->
        <header class="topDetail pos1">资讯详情
            <span class="icon_back" @click="backBtnPre"></span>
            <span class="icon_search" @click="linkSearch"></span>
        </header>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    backBtnPre() {
      this.$router.go(-1);
    },
    linkSearch() {}
  }
};
</script>
<style lang="less" scoped>
.topDetail {
  width: 100%;
  height: 2.75rem;
  line-height: 2.75rem;
  text-align: center;
  font-size: 1.125rem;
  color: #fff;
  background: #253350;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  .icon_back {
    display: block;
    width: 1.25rem;
    height: 1.5rem;
    background: url("./backBtn.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    z-index: 3;
  }
  .icon_search {
    display: block;
    width: 1.25rem;
    height: 1.25rem;
    background: url("../information/search.png") no-repeat center center;
    background-size: 100% 100%;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    z-index: 3;
  }
}
</style>
