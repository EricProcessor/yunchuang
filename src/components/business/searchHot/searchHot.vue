<template>
    <ol class="searchHot">
      <h3>热门搜索</h3>
      <li  @click="linkSearchList" v-for="(item,index) in 10" :key="index">
        <span>{{index+1}}</span>新零售
      </li>
    </ol>
</template>
<script>
export default {
  name: "searchCon",
  data() {
    return {};
  },
  methods: {
    // 点击热搜索切换至列表信息
    linkSearchList() {
      this.$router.push("/inforDetail");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 热门搜索样式
.searchHot {
  background: #fff;
  padding-left: 30px;
  padding-bottom: 16px;
  overflow: hidden;
  h3 {
    font-size: 30px;
    color: #333;
    padding: 30px 0;
    font-weight: bold;
  }
  li {
    width: 50%;
    float: left;
    height: 60px;
    line-height: 60px;
    span {
      color: rgb(55, 190, 240);
      display: inline-block;
      width: 40px;
    }
  }
}
</style>