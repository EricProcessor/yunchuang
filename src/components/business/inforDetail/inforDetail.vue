<template>
  <div class="detailView">
    <index-header :text="headerText"></index-header>
    <!-- 资讯信息 -->
    <div class="detailBox" v-for="(v,i) in detail" :key="i">
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
      <div class="textInfoBox" >
        <p class="detailText">
          6月27日，由京东云电商创新中心、腾讯众创空间（西安）及沣创 星工厂联合主办的第一届“万象·共融科统企业博览会”在中俄丝 路创新园成功举办，来自人工智能、生物医药、电商、文创等领 域的18家园区企业在本次活动中亮相，揭开了“硬实力科统”的 神秘面纱。
        </p>
        <p class="showImg">
          <img src="./inforDetail_1.jpg" alt="">
        </p>
        <p class="detailText">
          6月27日，由京东云电商创新中心、腾讯众创空间（西安）及沣创 星工厂联合主办的第一届“万象·共融科统企业博览会”在中俄丝 路创新园成功举办，来自人工智能、生物医药、电商、文创等领 域的18家园区企业在本次活动中亮相，揭开了“硬实力科统”的 神秘面纱。
        </p>
        <p class="showImg">
          <img src="./inforDetail_1.jpg" alt="">
        </p>
        <p class="detailText">
          6月27日，由京东云电商创新中心、腾讯众创空间（西安）及沣创 星工厂联合主办的第一届“万象·共融科统企业博览会”在中俄丝 路创新园成功举办，来自人工智能、生物医药、电商、文创等领 域的18家园区企业在本次活动中亮相，揭开了“硬实力科统”的 神秘面纱。
        </p>
        <!-- {{v.fciContent}} -->
      </div>
    </div>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";

export default {
  data() {
    return {
      id: "",
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
    this.loadInfo();
  },
  methods: {
    backBtnPre() {
      this.$router.go(-1);
    },
    loadInfo() {
      let infoUrl = "/h5frontcarrierinfotop-item/" + this.id;
      this.axios.post(infoUrl).then(res => {
        console.log(res.data);
        this.detail.push(res.data.ci);

        for (let i in this.detail) {
          let newTime =
            new Date(this.detail[i].fciDatetime)
              .toLocaleDateString()
              .replace(/\//g, "-") +
            " " +
            new Date(this.detail[i].fciDatetime).toTimeString().substr(0, 8);
          this.detail[i].fciDatetime = newTime;
        }
      });
    }
  },
  components: {
    IndexHeader
  }
};
</script>
<style lang="less" scoped>
.detailView {
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #eee;
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
        height: 30px;
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
    margin-top: 60px;
    width: 100%;
    .detailText {
      font-size: 24px;
      line-height: 44px;
    }
    .showImg {
      width: 100%;
      height: 458px;
      margin: 30px 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
