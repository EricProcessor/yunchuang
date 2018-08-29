<template>
  <div id="tabBox">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">最新活动</mt-tab-item>
      <mt-tab-item id="2">往期活动</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ActiveListone></ActiveListone>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
         <ActiveListtwo></ActiveListtwo>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import ActiveListone from "business/activity/activityListC1";
import ActiveListtwo from "business/activity/activityListC2";
export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    ActiveListone,
    ActiveListtwo
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
      padding: .375rem 0;
      .mint-tab-item-label {
        font-size: .4375rem;
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
