<template>
    <div class="class-video">
        <div class="index-header">
            <i class="mintui mintui-back" @click.stop="linkSearchHeader"></i>
        </div>
        <div class="video-box">
            <video controls="" :src="item.fpdPath" id="ckplayer_a1" width="100%" height="100%" preload="metadata" :poster="item.fpdCoverPath"></video>
        </div>
        <div class="class-content">
            <h2>{{item.fdpTitle}}</h2>
            <div class="summary">
                <span>录制场景</span>
                <p>{{item.fpdScene}}</p>
            </div>
            <div class="summary">
                <span>视频时长</span>
                <p>{{item.fpdDuration}}</p>
            </div>
            <div class="summary">
                <span>主讲人</span>
                <p>{{item.fpdName}}{{item.fpdLabel}}</p>
            </div>
            <div class="summary">
                <span>课程摘要</span>
                <p>{{item.fpdDigest}}</p>
            </div>
            <div class="summary">
                <span>个人简介</span>
                <div class="over-box" :class="{'over-box-all': show}">
                    <div class="over-content" >
                        {{item.fpdIntroduce}}  
                    </div>
                </div>
                <div class="show-more" :class="{'more': show}" @click="_showMore($event)">
                    <span>展开</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
import { videoPlayer } from "vue-video-player";
import ckplayer from "./ckplayer.js";
export default {
  data() {
    return {
      item: [],
      show: false
    };
  },
  components: {
    videoPlayer
  },
  mounted() {
    //执行ajax渲染详情
    this.videoDetails();
  },
  methods: {
    //点击“展开”显示更多
    _showMore($event) {
      this.show = true;
    },
    onPlayerPlay(player) {
      alert("play");
    },
    onPlayerPause(player) {
      alert("pause");
    },
    // 渲染详情ajax请求
    videoDetails() {
      let _url = "/h5frontclassroom-video/" + this.$route.params.fdpId;
      axios.get(_url).then(res => {
        this.item = res.data.dp;
      });
    },
    //返回到上一级
    linkSearchHeader() {
      this.$router.go(-1);
    }
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  }
};
</script>
<style lang="less" scoped>
.class-video {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: #fff;
  height: 100%;
  overflow-y: auto;
  .index-header {
    height: 88px;
    line-height: 88px;
    text-align: center;
    font-size: 36px;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .mintui-back {
    font-size: 38px;
    color: #fff;
    position: absolute;
    left: 20px;
  }
  .video-box {
    height: 420px;
    background: #cad3dc;
  }
  .class-content {
    padding-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
    h2 {
      font-size: 30px;
      line-height: 40px;
      color: #333333;
    }
    .summary {
      margin-top: 30px;
      span {
        font-size: 24px;
        line-height: 40px;
        color: #999999;
      }
      p {
        font-size: 24px;
        line-height: 40px;
        color: #666666;
      }
      .over-box {
        height: 150px;
        overflow: hidden;
        .over-content {
          font-size: 24px;
          line-height: 40px;
          color: #666666;
        }
      }
      .over-box-all {
        min-height: 150px;
        height: auto;
        overflow: auto;
        padding-bottom: 40px;
      }
      .show-more {
        font-size: 20px;
        line-height: 40px;
        color: #37bef0;
        text-align: center;
        padding: 15px;
        span {
          color: #37bef0;
        }
      }
      .more {
        display: none;
      }
    }
  }
}
</style>

