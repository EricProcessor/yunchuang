<template>
    <div class="class-video">
        <div class="index-header">
            <i class="mintui mintui-back" @click.stop="linkSearchHeader"></i>
        </div>
        <div class="video-box">
            <!-- <video controls="" :src="item.fpdPath" id="ckplayer_a1" width="100%" height="100%" preload="metadata" :poster="item.fpdCoverPath"></video> -->
            <video-player  class="video-player vjs-custom-skin"
                ref="videoPlayer"
                :playsinline="true"
                :options="playerOptions"
            ></video-player>
            <!-- <video controls="" src="http://movie.ks.js.cn/flv/other/1_0.mp4" id="ckplayer_a1" width="100%" height="100%" preload="metadata" poster="http://114.67.150.8:8080/upload_file/upload/2018/07/10/c3cbadb003fd4fe4bd52c52b008e35ca.jpg"></video> -->
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
// import VideoPlayer from "vue-video-player";
// require("video.js/dist/video-js.css");
// require("vue-video-player/src/custom-theme.css");
// Vue.use(VideoPlayer);
export default {
  data() {
    return {
      item: [],
      show: false,
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src:
              "http://v.youku.com/v_show/id_XMTYyNzA0MDc0OA==.html?spm=a2h0j.11185381.listitem_page1.5!4~A" //url地址
          }
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  },
  mounted() {
    //执行ajax渲染详情
    this.videoDetails();
  },
  methods: {
    playerOptions: {
      playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
      autoplay: false, //如果true,浏览器准备好时开始回放。
      muted: false, // 默认情况下将会消除任何音频。
      loop: false, // 导致视频一结束就重新开始。
      preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
      language: "zh-CN",
      aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
      fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
      sources: [
        {
          type: "",
          src: "" //url地址
        }
      ],
      poster: "../../static/images/test.jpg", //你的封面地址
      // width: document.documentElement.clientWidth,
      notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
      controlBar: {
        timeDivider: true,
        durationDisplay: true,
        remainingTimeDisplay: false,
        fullscreenToggle: true //全屏按钮
      }
    },
    //点击“展开”显示更多
    _showMore($event) {
      console.log($event);
      this.show = true;
    },
    // 渲染详情ajax请求
    videoDetails() {
      let _url = "/h5frontclassroom-video/" + this.$route.params.fdpId;
      // let _url = "/h5frontclassroom-item/" + this.$route.params.fdpId;
      axios.get(_url).then(res => {
        this.item = res.data.dp;
        console.log(this.item);
        console.log(this.item.fdpId);
      });
    },
    //返回到上一级
    linkSearchHeader() {
      this.$router.go(-1);
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

