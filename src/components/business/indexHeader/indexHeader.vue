<template>
  <div class="public-header">
    <div class="sitg"><!--占位用，撑起公共头部的高度--></div>
    <div class="index-header">
        <!-- <router-link  to="/"> -->
          <i class="mintui mintui-back" v-if="hasBack" @click.stop="linkBack"></i>
        <!-- </router-link> -->
        {{text}}
        <i v-if="hasSearch" data-v-5eeac47d="" class="mintui mintui-search" @click.stop="linkSearch" ></i>
        <slot></slot>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    text: {
      //头部显示内容
      type: String
    },
    hasSearch: {
      //是否显示搜索图标
      type: Boolean,
      default: true
    },
    hasBack: {
      type: Boolean,
      default: true
    }
  },
  components: {},
  methods: {
    linkBack() {
      // this.$router.push({
      //   path: "/HeaderSearch"
      // });
      this.$router.go(-1);
      // history.go(-1);
    },
    //跳转到搜索
    linkSearch() {
      this.$router.push({
        path: "/HeaderSearch"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.sitg {
  height: 88px;
}
.mintui-back {
  font-size: 38px;
  color: #fff;
  position: absolute;
  left: 20px;
}
.index-header {
  height: 88px;
  background: #253350;
  line-height: 88px;
  text-align: center;
  font-size: 36px;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
}
.mintui-search:before {
  font-size: 0.64rem;
  color: #fff;
  position: absolute;
  right: 20px;
}
</style>

