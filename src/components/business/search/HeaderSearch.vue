<template>
<div>
  <div class="header-search">
    <div class="el-icon-arrow-left"></div>
    <el-input v-model="input" placeholder="请输入内容">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    
  <!-- </el-input> -->
  </div>
  <div class="searchBefor">
    <ul class="secrchCon">
      <li>
        <div class="el-icon-search"></div>
        <span>UI设计巡回演讲</span>
      </li>
      <li>
        <div class="el-icon-search"></div>
        <span>UI设计巡回演讲</span>
      </li>
      <li>
        <div class="el-icon-search"></div>
        <span>UI设计巡回演讲</span>
      </li>
        <li>
        <div class="el-icon-search"></div>
        <span>UI设计巡回演讲</span>
      </li>
      <li>
        <div class="el-icon-search"></div>
        <span>UI设计巡回演讲</span>
      </li>
      <li>
        <div class="el-icon-search"></div>
        <span>UI设计巡回演讲</span>
      </li>
      <li>
        <div class="el-icon-search"></div>
        <span>UI设计巡回演讲</span>
      </li>
    </ul>
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
  </div>
  <div class="searchAfter">
    <ul class="searchList">
      <li>
        <div class="search_list_left">

        </div>
        <div class="search_list_right">

        </div>
      </li>
    </ul>
  </div>
  
</div>
 
</template>

<script>
export default {
  name: "HeaderSearch",
  data() {
    return { input5: "" };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-search {
  height: 44px;
  background: #253350;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header-search > div {
  float: left;
}
.el-icon-arrow-left,
.el-icon-search {
  font-size: 26px;
}
.el-icon-search:before {
  color: #fff;
  padding: 10px 10px 0px 10px;
}
.el-icon-arrow-left:before {
  color: #fff;
  padding: 10px 10px 0px 10px;
}
.el-icon-search:before {
  font-size: 24px;
}
.el-button--default {
  font-size: 24px !important;
}
/* 搜索内容的样式 */
.secrchCon .el-icon-search[data-v-5eeac47d]:before {
  color: #999;
  font-size: 16px;
  padding: 10px 5px 0px 0px;
}
.secrchCon {
  background: #fff;
  margin-top: 15px;
  margin-bottom: 15px;
  li {
    height: 0.32rem;
    line-height: 0.32rem;
    border-bottom: 1px solid #dfdfdf;
    margin-left: 0.15rem;
    font-size: 0.12rem;
    span {
      color: #333;
    }
  }
}
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
// 搜索数据列表样式
.searchList {
}
body {
        background: rgb(245, 245, 245);
        height: 100%;
      }
</style>
