<template>
  <div id="tabBox">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">最新活动</mt-tab-item>
      <mt-tab-item id="2">往期活动</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ActiveList></ActiveList>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
         <activeList-two></activeList-two>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import ActiveList from "business/activity/activityListC1";
export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    ActiveList
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
      padding: 12px 0;
      .mint-tab-item-label {
        font-size: 1rem;
        color: #333;
      }
    }
    .mint-tab-item.is-selected {
      color: #6ea1ff;
      border-color: #6ea1ff;
      .mint-tab-item-label {
        color: #6ea1ff;
      }
    }
  }
}
</style>
