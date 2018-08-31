<template>
  <div id="tabBox">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">创业头条</mt-tab-item>
      <mt-tab-item id="2">创业政策</mt-tab-item>
      <mt-tab-item id="3">博文天地</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <InforList></InforList>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="(n,v) in 4" :key="v" :title="'内容 ' + n" />
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="(n,v) in 5" :key="v" :title="'内容 ' + n" />
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
  methods: {},
  components: {
    InforList
  }
};
</script>
<style lang="less">
#tabBox {
  .mint-tab-container {
    background: #eee;
  }
  .mint-navbar {
    .mint-tab-item {
      margin-bottom: 0;
      padding: 30px 0;
      .mint-tab-item-label {
        font-size: 30px;
        color: #333;
      }
    }
    .mint-tab-item.is-selected {
      color: #6ea1ff;
      border-color: #6ea1ff;
      border-width: 4px;
      .mint-tab-item-label {
        color: #6ea1ff;
      }
    }
  }
}
</style>
