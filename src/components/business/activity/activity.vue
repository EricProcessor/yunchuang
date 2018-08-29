<template>
  <div>
    <!-- header -->
    <header class="activity-title">活动
      <span class="acticity-screen"></span>
    </header>
    <!-- tab -->
    <acTab class="ac-tab"></acTab>
  </div>
</template>
<script>
    import acTab from "base/ac-tab/ac-tab";
    export default {
        components: {
            acTab
        }
    };
</script>
<style lang="less" scoped>
.activity-title {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 1.125rem;
  color: #fff;
  background: #253350;
  position: fixed;
  top: 0;
  left: 0;
}
.ac-tab {
  margin-top: 40px;
}
</style>
