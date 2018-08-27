<template>
    <div>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="创业头条" name="first">创业头条</el-tab-pane>
            <el-tab-pane label="创业政策" name="second">创业政策</el-tab-pane>
            <el-tab-pane label="博文天地" name="third">博文天地</el-tab-pane>
        </el-tabs>
    </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
    }
  }
};
</script>
<style lang="less" scoped>

</style>
