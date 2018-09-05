<template>
  <div class="myInterview towLevelRouterSco">
    <!-- header -->
    <header class="top pos1">
      <a href="#/" class="page-back router-link-active">
        <i class="mintui mintui-back"></i>
      </a>
      <span>我的约谈</span>
    </header>
    <section class="tabBox" >
      <mt-navbar v-model="selected">
        <mt-tab-item id="1">我的约谈</mt-tab-item>
        <mt-tab-item id="2">被约谈</mt-tab-item>
        <mt-tab-item id="3">我的活动</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="selected">
        <mt-tab-container-item id="1">
          <my-interview-list :toggleInt="1"></my-interview-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <my-interview-list :toggleInt="2"></my-interview-list>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <my-activity-list></my-activity-list>
        </mt-tab-container-item>
      </mt-tab-container>
    </section>
  </div>
</template>
<script>
import MyInterviewList from "../MyInterviewList/MyInterviewList";
import MyActivityList from "../MyActivityList/MyActivityList";
export default {
  data() {
    return {
      selected: "1"
    };
  },
  components: {
    MyInterviewList,
    MyActivityList
  },
  methods: {}
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
  z-index: 10;
  background: rgb(245, 245, 245);
}
.myInterview {
  // 头部样式
  .top {
    width: 100%;
    height: 88px;
    text-align: center;
    line-height: 88px;
    font-size: 36px;
    color: #fff;
    background: #253350;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;

    .mintui-back {
      position: absolute;
      left: 0px;
    }
    .mintui-back:before {
      color: #fff;
      padding-left: 0.32rem;
      font-size: 0.64rem;
      position: relative;
      top: 6px;
    }
  }
  section {
    margin-top: 88px;
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

