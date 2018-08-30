<template>
  <div id="app">
    <router-view @changeSelect="_changeFooter"/>
    <m-footer :selected="footerSelect" @changeSelect="_changeFooter"></m-footer>
  </div>
</template>

<script>
import MFooter from 'business/mFooter/mFooter'
export default {
  name: 'App',
  data() {
    return {
      footerSelect: "index"
    }
  },
  methods: {
    //子组件修改导航选中状态用
    _changeFooter(path) {
      this.footerSelect = path
    }
  },
  components: {
    MFooter
  }
}
</script>

<style lang="less" scoped>

</style>
