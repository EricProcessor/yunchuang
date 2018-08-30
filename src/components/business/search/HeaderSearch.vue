<template>
<div>
  <div class="header-search">
    <a href="#/" class="page-back router-link-active">
      <i class="mintui mintui-back"></i>
    </a>
    <div class="mint-searchbar-inner">
      <input type="text" placeholder="搜索" @click="linkSearchListBack" v-model="searchVal" class="mint-searchbar-core">
      <i class="mintui mintui-search"></i> 
    </div>
  </div>
  <div class="searchBefor ">
    <ul class="secrchCon">
      <li  @click="linkSearchList" v-show="!afertList.type" v-for="(item,index) in NewItems" :key="index"  >
        <div class="mintui mintui-search"></div>
        <span :value="item.value" v-text="item.name"></span>
      </li>
    </ul>
    <searchHot v-show="!afertList.type"></searchHot>
   
  </div>
  <search-after-list v-show="afertList.type"></search-after-list>
  
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
      afertList: {
        type: false
      },
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
  methods: {
    // 点击搜索内容切换至列表信息
    linkSearchList() {
      this.afertList.type = !this.afertList.type;
    },
    // 在列表信息中点击头部搜索切换至搜索
    linkSearchListBack() {
      if (this.afertList.type == 1) {
        this.afertList.type = !this.afertList.type;
      }
    }
  },
  computed: {
    //模糊搜素
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
  height: 88px;
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
  padding-left: 24px;
  font-size: 48px;
}
.mintui-search:before {
  font-size: 48px;
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
  padding-right: 16px;
}
.mint-searchbar-core[data-v-5eeac47d] {
  font-size: 28px;
}
.hide {
  display: none;
}
/* 搜索内容的样式 */
.secrchCon .el-icon-search[data-v-5eeac47d]:before {
  color: #999;
  font-size: 32px;
  padding: 20px 10px 0px 0px;
}
.secrchCon {
  background: #fff;
  margin-top: 16px;
  margin-bottom: 30px;
  li {
    height: 64px;
    line-height: 64px;
    border-bottom: 2px solid #dfdfdf;
    margin-left: 30px;
    font-size: 24px;
    span {
      color: #333;
    }
  }
}
.el-icon-search {
  width: 40px;
  height: 40px;
  display: inline-block;
}
ul {
  .mintui-search:before {
    font-size: 32px;
    color: #253350;
  }
  .mintui {
    display: inline-block;
    padding-right: 8px;
  }
}
</style>

