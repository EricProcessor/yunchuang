<template>
  <div class="regSucc">
    <header>注册</header>
    <div class="top_div"></div>
    <div class="succBox">
      <p class="succImg">
        <img src="./succSure.png" alt="">
      </p>
      <p class="succTxt">{{sucOption.sucName}}</p>
      <p class="succTime">
        <span id="mes">5</span>秒后自动跳转到“{{sucOption.title}}”页面</p>
      <router-link class="succBtn" to="/" tag="p">跳过</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      time: 5
    };
  },
  props: {
    sucOption: {}
  },
  mounted() {
    this.success();
  },
  methods: {
    // 跳转到成功提示页面
    success() {
      var intervalid;
      let i = 5;

      intervalid = setInterval(() => {
        if (this.time == 0) {
          // window.location.href = "../index.html";
          //页面路由跳转方法
          this.$router.push(this.sucOption.path);
          this.sucOption.showSuccess == false;
          clearInterval(intervalid);
        }
        i--;
        this.time = i;
        console.log(this.time);
        document.getElementById("mes").innerHTML = i;
      }, 1000);
    }
  }
};
</script>
<style lang="less" scoped>
.regSucc {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 33;
  background: #fff;
  padding-top: 60px;
  .succBox {
    .succImg {
      padding-top: 120px;
      margin: 0 auto;
      width: 180px;
      height: 180px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .succTxt {
      text-align: center;
      margin-top: 40px;
      font-size: 60px;
      letter-spacing: 6px;
      color: #37bef0;
    }
    .succTime {
      margin: 140px 0 60px 0;
      text-align: center;
      font-size: 30px;
      letter-spacing: 3px;
      color: #333;
      span {
        font-size: 30px;
        color: #6ea1ff;
      }
    }
    .succBtn {
      width: 260px;
      height: 60px;
      line-height: 60px;
      text-align: center;
      background: #6ea1ff;
      border-radius: 6px;
      margin: 0 auto;
      font-size: 30px;
      color: #fff;
    }
  }
}
</style>
