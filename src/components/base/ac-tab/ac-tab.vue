<template>
  <div id="tabBox">
    <mt-navbar v-model="selected">
      <mt-tab-item id="1">最新活动</mt-tab-item>
      <mt-tab-item id="2">往期活动</mt-tab-item>
    </mt-navbar>
    <!-- tab-container -->
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <ActiveListone :active-list="activeList"></ActiveListone>
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
import axios from "axios";
import config from "@/config/config";
export default {
  data() {
    return {
      // selected:'',
      selected: "1",
      activeList:[],
      tabValue:""
    };
  }, 
  components: {
    ActiveListone,
    ActiveListtwo
  },
  watch: {
      selected: function (val, oldVal) {
           //val     切换后 id
           //oldVal  切换前 id 
           this.tabValue = val
          //  console.log(this.tabValue)
           this.$emit('selectTab', this.tabValue)   //给父组件传出地址数值
      }
    },
  mounted(){
          this.axios.post("/h5frontactivityinfo-foreshow?type=Y").then(res => {
            this.activeList=res.data.list
            // console.log(this.activeList)
         })            
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
