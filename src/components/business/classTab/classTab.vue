<template>
    <div class="class-tab">
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">直播预告</mt-tab-item>
            <mt-tab-item id="2">精选视频</mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <class-list :list-data="livePreviewData"></class-list>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <class-list :list-data="featureVideoData"></class-list>
               
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import ClassList from "business/classList/classList";
export default {
  data() {
    return {
      selected: "1",
      featureVideoData: [], //保存课堂精选视频列表数据
      livePreviewData: [] //保存直播预告视频列表数据
    };
  },
  created() {
    this._getFeatureVideoAjax();
    this._getLivePreviewAjax();
  },
  methods: {
    //获取“课堂精选视频列表数据”方法
    _getFeatureVideoAjax() {
      this.axios({
        url: "/h5frontclassroom-sift",
        method: "post"
      }).then(res => {
        if (res.status === 200) {
          this.featureVideoData = res.data.dpList;
        }
      });
    },
    //获取直播预告视频列表数据
    _getLivePreviewAjax() {
      this.axios({
        // url: "/h5frontclassroom-notice",
        url: "/frontmessage",
        method: "post"
      }).then(res => {
        console.log(res);
        if (res.status === 200) {
          this.livePreviewData = res.data.dpList;
        }
      });
    }
  },
  components: {
    ClassList
  }
};
</script>
<style lang="less" scoped>
.class-tab {
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

