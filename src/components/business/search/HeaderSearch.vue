<template>
<div>
  <div class="header-search">
    <a href="#/" class="page-back router-link-active">
      <i class="mintui mintui-back"></i>
    </a>
    <div class="mint-searchbar-inner">
      <input type="text" placeholder="搜索" v-model="searchVal" class="mint-searchbar-core">
      <i class="mintui mintui-search"></i> 
    </div>
  </div>
  <div class="searchBefor ">
    <ul class="secrchCon">
      <li v-for="(item,index) in NewItems" :key="index"  >
        <div class="mintui mintui-search"></div>
        <span :value="item.value" v-text="item.name"></span>
      </li>
    </ul>
    <searchHot></searchHot>
   
  </div>
  <search-after-list></search-after-list>
  
</div>

</template>

<script>
import searchAfterList from "../searchAfterList/searchAfterList";
import searchHot from "../searchHot/searchHot";
export default {
  name: "HeaderSearch",
  components: {
    searchHot,
    searchAfterList
  },
  data() {
    return {
      // result: [
      //   { title: "aaa", value: "aaa" },
      //   { title: "bbb", value: "bbb" },
      //   { title: "bbb", value: "bbb" }
      // ],
      // value: "",
      // title: ""

      searchVal: "",
      items: [
        {
          name: "上海",
          value: "sh"
        },
        {
          name: "北京",
          value: "bj"
        },
        {
          name: "重庆",
          value: "cq"
        },
        {
          name: "嗨嗨嗨",
          value: "hhh"
        },
        {
          name: "海上",
          value: "hs"
        },
        {
          name: "京都",
          value: "jd"
        }
      ]
    };
  },
  methods: {},
  computed: {
    NewItems() {
      var _this = this;
      var NewItems = [];
      this.items.map(function(item) {
        if (item.name.search(_this.searchVal) != -1) {
          NewItems.push(item);
        }
      });
      return NewItems;
    }
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
.mintui-back:before {
  color: #fff;
  padding-left: 12px;
  font-size: 24px;
}
.mintui-search:before {
  font-size: 24px;
  color: #fff;
}
.header-search > div[data-v-5eeac47d] {
  background: #253350;
}
.mint-searchbar-core {
  background: #253350;
  color: #fff;
}
.mint-searchbar-inner .mintui-search {
  padding-right: 8px;
}
.mint-searchbar-core[data-v-5eeac47d] {
  font-size: 14px;
}
.hide {
  display: none;
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
.el-icon-search {
  width: 20px;
  height: 20px;
  display: inline-block;
}
ul {
  .mintui-search:before {
    font-size: 16px;
    color: #253350;
  }
  .mintui {
    display: inline-block;
    padding-right: 4px;
  }
}
</style>

