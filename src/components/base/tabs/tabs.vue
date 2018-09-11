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
        <InforChild :lsit="item"></InforChild>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <!-- <InforChild :lsit="item"></InforChild> -->
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <!-- <InforChild :lsit="item"></InforChild> -->
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import InforChild from "business/inforChild/inforChild";
export default {
  data() {
    return {
      item: [],
      selected: "1"
    };
  },
  mounted() {
    this.headlineData();
    this.policyData();
    this.bowenWorld();
  },
  methods: {
    linkInforDetail() {
      this.$router.push({
        path: "/information/inforDetail"
      });
    },
    //创业头条
    headlineData() {
      let _url = "/h5frontcarrierinfotop-home";
      this.axios.get(_url).then(res => {
        this.item = res.data.citList;
        for (let i in this.item) {
          //转化时间戳
          let newTime = new Date(this.item[i].fciDatetime)
            .toLocaleString()
            .split(" ");
          this.item[i].fciDatetime = newTime[0];
        }
      });
    },
    //创业政策
    policyData() {
      let policyUrl = "/h5frontPolicyInfo-home";
      this.axios.get(policyUrl).then(res => {
        console.log(res.data.list);
      });
    },
    //博文天地
    bowenWorld() {
      let bowenUrl = "/h5frontcarrierinfoblog-home";
      this.axios.get(bowenUrl).then(res => {
        console.log(res.data.cibList);
      });
    }
  },
  watch: {
    selected: function(oldVal, newVal) {
      this.selected = newVal;
      console.log(oldVal, newVal)
    }
  },
  components: {
    InforChild
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
