<template>
  <div id="tabBox">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">创业头条</mt-tab-item>
      <mt-tab-item id="2">创业资讯</mt-tab-item>
      <mt-tab-item id="3">博文天地</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <InforList></InforList>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(n,v) in 4" :key='v' :title="'测试 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n,v) in 6" :key='v' :title="'选项 ' + n" />
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import InforList from "business/imforChild/inforChild";
export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    InforList
  }
};
</script>
<style lang="less">
#tabBox {
  .mint-navbar {
    .mint-tab-item {
      margin-bottom: 0;
      padding: 12px 0;
    }
    .mint-tab-item-label {
      font-size: 1rem;
    }
  }
}
</style>
