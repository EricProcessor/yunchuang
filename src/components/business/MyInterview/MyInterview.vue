<template>
  <div class="myInterview towLevelRouterSco">
    <index-header :text="headerText" :hasSearch="false"></index-header>
    <section class="tabBox" >
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">我的约谈</mt-tab-item>
        <mt-tab-item id="2">被约谈</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <my-interview-list :toggleInt="1"></my-interview-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <my-interview-list :toggleInt="2"></my-interview-list>
        </mt-tab-container-item>
      </mt-tab-container>
    </section>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import MyInterviewList from "../MyInterviewList/MyInterviewList";
export default {
  data() {
    return {
      selected: "1"
    };
  },
  created() {
    this.headerText = "我的约谈"; //设置头部显示导航内容
  },
  components: {
    IndexHeader,
    MyInterviewList
  },
  methods: {
    aaaa() {
      console.log(selected);
    }
  }
};
</script>
<style lang="less">
// 二级路由定位
.towLevelRouterSco {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: rgb(245, 245, 245);
}
.myInterview {
  section {
    .mint-tab-container {
      background: #eee;
    }
    .mint-navbar {
      .mint-tab-item {
        margin-bottom: 0;
        padding: 28px 0;
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
}
</style>

