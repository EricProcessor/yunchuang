<template>
  <div class="detailView">
    <index-header :text="headerText"></index-header>
    <!-- 资讯信息 -->
    <div class="detailBox" v-if="title!='创业政策'" v-for="(v,i) in detail" :key="i">
      <div class="titleInfoBox">
        <div class="detailTile">{{v.fciTitle}}</div>
        <p class="detailFrom">{{v.fciSource}}</p>
        <div class="clearfix">
          <div class="fl detailTime">{{v.fciDatetime}}</div>
          <div class="fr">
            <p class="clearfix readCount">
              <span class="fl icon_num"></span>
              <span class="fl count">{{v.fciExamine}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="textInfoBox" v-html="v.fciContent"></div>
    </div>
    <div class="detailBox" v-if="title=='创业政策'" v-for="(v,i) in detail" :key="i">
      <div class="titleInfoBox">
        <div class="detailTile">{{v.fpiName}}</div>
        <p class="detailFrom">{{v.fpiSource}}</p>
        <div class="clearfix">
          <div class="fl detailTime">{{v.fpiDatetime}}</div>
          <div class="fr">
            <p class="clearfix readCount">
              <span class="fl icon_num"></span>
              <span class="fl count">{{v.fpiExamine}}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="textInfoBox" v-html="v.fpiContent"></div>
    </div>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";

export default {
  data() {
    return {
      id: "",
      title: "",
      paicheNo: "",
      detail: []
    };
  },
  created() {
    this.headerText = "资讯详情"; //头部显示内容
  },
  mounted() {
    this.paicheNo = this.$route.params.paicheNo;
    this.id = this.$route.params.id;
    this.title = this.$route.params.title;
    if (this.title == "创业头条") {
      this.loadHeadInfo();
    } else if (this.title == "创业政策") {
      this.loadPolicyInfo();
    } else {
      this.loadBoWenInfo();
    }
  },
  methods: {
    backBtnPre() {
      this.$router.go(-1);
    },
    loadHeadInfo() {
      //创业头条
      let infoUrl = "/h5frontcarrierinfotop-item/" + this.id;
      this.axios.post(infoUrl).then(res => {
        this.detail.push(res.data.ci);
        console.log(this.detail);
        for (let i in this.detail) {
          let newTime1 =
            new Date(this.detail[i].fciDatetime)
              .toLocaleDateString()
              .replace(/\//g, "-") +
            " " +
            new Date(this.detail[i].fciDatetime).toTimeString().substr(0, 8);
          this.detail[i].fciDatetime = newTime1;
        }
      });
    },
    loadBoWenInfo() {
      //博文天地
      let bowenUrl = "/h5frontcarrierinfoblog-item/" + this.id;
      this.axios.post(bowenUrl).then(res => {
        console.log(res.data);
        this.detail.push(res.data.ci);
        for (let i in this.detail) {
          let newTime2 =
            new Date(this.detail[i].fciDatetime)
              .toLocaleDateString()
              .replace(/\//g, "-") +
            " " +
            new Date(this.detail[i].fciDatetime).toTimeString().substr(0, 8);
          this.detail[i].fciDatetime = newTime2;
        }
      });
    },
    loadPolicyInfo() {
      //创业政策
      let policyUrl = "/h5frontPolicyInfo-item/" + this.id;
      this.axios.post(policyUrl).then(res => {
        // console.log(res.data);
        this.detail.push(res.data.pi);
        for (let i in this.detail) {
          let newTime3 =
            new Date(this.detail[i].fpiDatetime)
              .toLocaleDateString()
              .replace(/\//g, "-") +
            " " +
            new Date(this.detail[i].fpiDatetime).toTimeString().substr(0, 8);
          this.detail[i].fpiDatetime = newTime3;
          this.detail[i].fpiContent=this.unescapeHTML(this.detail[i].fpiContent);
        }
      });
    },
    unescapeHTML: function(html) {
      html = "" + html;
      return html
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&apos;/g, "'");
    }
  },
  components: {
    IndexHeader
  }
};
</script>
<style lang="less" scoped>
.detailView {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 105;
  overflow-y: auto;
}
.detailBox {
  margin: 0 auto;
  width: 94%;
  .titleInfoBox {
    .detailTile {
      width: 100%;
      padding: 40px 0;
      font-size: 36px;
      font-stretch: normal;
      line-height: 60px;
      letter-spacing: 4px;
      color: #333;
    }
    .detailFrom {
      font-size: 20px;
      line-height: 60px;
      letter-spacing: 2px;
      color: #333;
    }
    .detailTime {
      font-size: 20px;
      color: #999;
      line-height: 40px;
    }
    .readCount {
      .icon_num {
        display: block;
        width: 36px;
        height: 34px;
        background: url("../inforChildList/readNum.png") no-repeat center center;
        background-size: 100% 100%;
      }
      .count {
        font-size: 20px;
        color: #999;
        line-height: 30px;
        padding-left: 2px;
      }
    }
  }
  .textInfoBox {
    margin-top: 40px;
    width: 100%;
  }
}
</style>
