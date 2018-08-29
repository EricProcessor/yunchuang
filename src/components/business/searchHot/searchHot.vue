<template>
    <ol class="searchHot">
      <h3>热门搜索</h3>
      <li><span>1</span>新零售</li>
      <li><span>2</span>新零售</li>
      <li><span>3</span>新零售</li>
      <li><span>4</span>新零售</li>
      <li><span>5</span>新零售</li>
      <li><span>6</span>新零售</li>
      <li><span>7</span>新零售</li>
      <li><span>8</span>新零售</li>
      <li><span>9</span>新零售</li>
      <li><span>10</span>新零售</li>
    </ol>
</template>
<script>
export default {
  name: "searchCon",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
// 热门搜索样式
.searchHot {
  background: #fff;
  padding-left: 15px;
  padding-bottom: 8px;
  overflow: hidden;
  h3 {
    font-size: 15px;
    color: #333;
    padding: 15px 0;
    font-weight: bold;
  }
  li {
    width: 50%;
    float: left;
    height: 0.3rem;
    line-height: 0.3rem;
    span {
      color: rgb(55, 190, 240);
      display: inline-block;
      width: 0.2rem;
    }
  }
}
</style>