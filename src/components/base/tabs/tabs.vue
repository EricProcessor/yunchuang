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
        <infor-child :banner="casePic" v-if="showBanner"></infor-child>
        <infor-child-list :list="item1"></infor-child-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <infor-child :banner="casePic" v-if="showBanner"></infor-child>
        <infor-child-list :list="item2" :title="strTitle"></infor-child-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <infor-child :banner="casePic" v-if="showBanner"></infor-child>
        <infor-child-list :list="item3"></infor-child-list>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>
<script>
import InforChild from "business/inforChild/inforChild";
import InforChildList from "business/inforChildList/inforChildList";
export default {
  props: {
    showBanner: {     //是否显示banner图组件
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      item1: [],
      item2: [],
      item3: [],
      strTitle: "",
      selected: "1",
      casePic:[]
    };
  },
  mounted() {
    this.headlineData();
    this.policyData();
    this.bowenWorld();
    this.getPapeList();
  },
  methods: {
    //创业头条
    headlineData() {
      let _url = "/h5frontcarrierinfotop-home";
      this.axios.get(_url).then(res => {
        this.item1 = res.data.citList;
        // console.log(this.item1);
        for (let i in this.item1) {
          //转化时间戳
          let newTime = new Date(this.item1[i].fciDatetime)
            .toLocaleString()
            .split(" ");
          this.item1[i].fciDatetime = newTime[0];
        }
      });
    },
    //创业政策
    policyData() {
      let policyUrl = "/h5frontPolicyInfo-home";
      this.axios.get(policyUrl).then(res => {
        this.strTitle = res.data.current_title;
        this.item2 = res.data.list;
        // console.log(this.item2);
        for (let i in this.item2) {
          //转化时间戳
          let newTime = new Date(this.item2[i].fpiDatetime)
            .toLocaleString()
            .split(" ");
          this.item2[i].fpiDatetime = newTime[0];
          if (this.item2[i].fpiExamine == "") {
            this.item2[i].fpiExamine = 0;
          }
        }
      });
    },
    //博文天地
    bowenWorld() {
      let bowenUrl = "/h5frontcarrierinfoblog-home";
      this.axios.get(bowenUrl).then(res => {
        this.item3 = res.data.cibList;
        for (let i in this.item3) {
          //转化时间戳
          let newTime = new Date(this.item3[i].fciDatetime)
            .toLocaleString()
            .split(" ");
          this.item3[i].fciDatetime = newTime[0];
        }
      });
    },
    //banner图
    getPapeList() {
      let url = "/h5frontpageList-home";
      this.axios.post(url).then(res => {
        this.casePic=res.data.atiList;
      });
    }
  },

  components: {
    InforChild,
    InforChildList
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
