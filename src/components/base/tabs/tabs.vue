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
        <infor-child v-if="showBanner"></infor-child>
        <infor-child-list :list="item1" :title="strTitle1"
        :pageAll="pageAllNum1" @getloadMore="headlineData"></infor-child-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <infor-child v-if="showBanner"></infor-child>
        <infor-child-list :list="item2" :pageAll="pageAllNum2" :title="strTitle2" @getloadMore="policyData"></infor-child-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <infor-child v-if="showBanner"></infor-child>
        <infor-child-list :list="item3" :pageAll="pageAllNum3" :title="strTitle3" @getloadMore="bowenWorld"></infor-child-list>
      </mt-tab-container-item>
    </mt-tab-container>

  </div>
</template>
<script>
import InforChild from "business/inforChild/inforChild";
import InforChildList from "business/inforChildList/inforChildList";
export default {
  props: {
    showBanner: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      item1: [],
      item2: [],
      item3: [],
      strTitle1: "",
      strTitle2: "",
      strTitle3: "",
      selected: "1",
      casePic: [],
      pageAllNum1: "",
      pageAllNum2:"",
      pageAllNum3:"",
      pageSerial: 0,
      butnumrank: 0,
      pageSize: 5,
      udmark: "N"
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
    headlineData(pageCur , pageAll) {
      pageCur = pageCur || 1;
      pageAll = pageAll || 2;
      // console.log(pageCur , pageAll)
      let _url = "/h5frontcarrierinfotop-home";
      let fcaId = "10041";
      if (pageCur <= pageAll) {
        // this.pageSerial++;
        this.axios
          .post(_url, {
            pageSerial: pageCur,
            butnumrank: pageCur,
            udmark: this.udmark,
            fcaId: fcaId,
            pageSize: this.pageSize
          })
          .then(res => {
            // console.log(res.data);
            this.strTitle1 = res.data.current_title;
            for (let i in res.data.citList) {
              this.item1.push(res.data.citList[i]);
            }
            // console.log(this.item1);
            this.pageAllNum1 = res.data.page.pageSun;

            for (let i in this.item1) {
              //转化时间戳
              let newTime = new Date(this.item1[i].fciDatetime)
                .toLocaleString()
                .split(" ");
              this.item1[i].fciDatetime = newTime[0];
            }
          });
      }
    },
    //创业政策
    policyData(pageCur , pageAll) {
      pageCur = pageCur || 1;
      pageAll = pageAll || 2;
      let policyUrl = "/h5frontPolicyInfo-home";
      let fcaId = "10042";
      if (pageCur <= pageAll) {
        this.pageSerial++;
        this.axios
          .post(policyUrl, {
            pageSerial: this.pageSerial,
            butnumrank: this.pageSerial,
            udmark: this.udmark,
            fcaId: fcaId,
            pageSize: this.pageSize
          })
          .then(res => {
            this.strTitle2 = res.data.current_title;
            for (let i in res.data.list) {
              this.item2.push(res.data.list[i]);
            }
            // console.log(res.data);
            this.pageAllNum2 = res.data.page.pageSun;
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
      }
    },
    //博文天地
    bowenWorld(pageCur, pageAll) {
      pageCur = pageCur || 1;
      pageAll = pageAll || 2;
      let bowenUrl = "/h5frontcarrierinfoblog-home";
      let fcaId = "10040";
      if (pageCur <= pageAll) {
        this.axios
          .post(bowenUrl, {
            pageSerial:pageCur,
            butnumrank: pageCur,
            udmark: this.udmark,
            fcaId: fcaId,
            pageSize: this.pageSize
          })
          .then(res => {
            this.strTitle3 = res.data.current_title;
            for (let i in res.data.cibList) {
              this.item3.push(res.data.cibList[i]);
            }
            console.log(this.item1);
            this.pageAllNum3 = res.data.page.pageSun;
            for (let i in this.item3) {
              //转化时间戳
              let newTime = new Date(this.item3[i].fciDatetime)
                .toLocaleString()
                .split(" ");
              this.item3[i].fciDatetime = newTime[0];
            }
          });
      }
    },
    //banner图
    getPapeList() {
      let url = "/h5frontpageList-home";
      this.axios.post(url).then(res => {
        this.casePic = res.data.atiList;
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
