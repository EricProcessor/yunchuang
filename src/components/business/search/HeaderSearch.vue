<template>
<div>
  <div class="header-search" @click="TogSelect=false"> 
    <a href="#/" class="page-back router-link-active">
      <i class="mintui mintui-back"></i>
    </a>
    <div class="selModel" >
      <div  @click.stop="TogSelect=!TogSelect"><span>{{serachSend.checkedClass}}</span><img src="./updown.png" alt=""></div>
      <ol v-show="TogSelect">
        <li  @click="checkSeachType(item)" v-for="(item,index) in checkClass" :key="index"  >{{item.title}}</li>
      </ol>
    </div>
    <div class="mint-searchbar-inner">
      <input type="text" placeholder="搜索" v-model="serachSend.searchVal" class="mint-searchbar-core">
      <i class="mintui mintui-search" @click="inforData"></i> 
    </div>
  </div>
  <search-after-list :items="items" :SearchClass="serachSend.SearchClass"></search-after-list>
  <search-after-list v-if="serachSend.SearchClass == 'C'" :items="itemsCibList" :SearchClass="serachSend.SearchClass" :fcaName="'博文天地'"></search-after-list>
  <search-after-list v-if="serachSend.SearchClass == 'C'" :items="itemsCitList" :SearchClass="serachSend.SearchClass" :fcaName="'创业头条'"></search-after-list>
  <search-after-list v-if="serachSend.SearchClass == 'C'" :items="itemspiList" :SearchClass="serachSend.SearchClass" :fcaName="'创业政策'"></search-after-list>
</div>

</template>

<script>
import searchAfterList from "../searchAfterList/searchAfterList";
// import searchHot from "../searchHot/searchHot";
import config from "@/config/config";
export default {
  name: "",
  components: {
    // searchHot,
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
      // title: "",
      checkClass: [
        { title: "创业资讯", Ctype: "C" },
        { title: "创业活动", Ctype: "H" }
      ],
      serachSend: {
        SearchClass: "C",
        checkedClass: "创业资讯",
        searchVal: ""
      },
      TogSelect: false,
      // afertList: {
      //   type: false
      // },

      // items: [
      //   {
      //     name: "上海",
      //     value: "sh"
      //   },
      //   {
      //     name: "北京",
      //     value: "bj"
      //   }
      // ]
      items: [],
      itemsCibList: [],
      itemsCitList: [],
      itemspiList: []
    };
  },
  mounted() {
    // this.inforData();
  },
  methods: {
    // 点击搜索内容切换至列表信息
    // linkSearchList() {
    //   this.afertList.type = !this.afertList.type;
    // },
    // 在列表信息中点击头部搜索切换至搜索
    // linkSearchListBack() {
    //   if (this.afertList.type == 1) {
    //     this.afertList.type = !this.afertList.type;
    //   }
    // },
    //选择搜索的类型
    checkSeachType(item) {
      this.serachSend.checkedClass = item.title;
      this.serachSend.SearchClass = item.Ctype;
    },
    //获取后台数据
    inforData() {
      let _url = "/h5frontsearch-home";
      this.axios
        .post(_url, {
          selType: this.serachSend.SearchClass,
          KeyWord: this.serachSend.searchVal
        })
        .then(res => {
          if (this.serachSend.SearchClass == "C") {
            this.itemsCibList = res.data.cibList;
            this.itemsCitList = res.data.citList;
            this.itemspiList = res.data.piList;
          } else {
            this.items = res.data.List;
          }
        });
    }
  },
  computed: {
    //模糊搜素
    // NewItems() {
    //   var _this = this;
    //   var NewItems = [];
    //   this.items.map(function(item) {
    //     if (item.name.search(_this.searchVal) != -1) {
    //       NewItems.push(item);
    //     }
    //   });
    //   return NewItems;
    // }
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
//选择版块样式
.header-search {
  .selModel {
    font-size: 24px;
    color: #d1d0d0;
    padding: 0px 20px;
    border-right: 1px solid #697897;
    img {
      width: 18px;
      padding-left: 12px;
    }
    ol {
      position: absolute;
      width: 142px;
      background-color: #253350;
      opacity: 0.8;
      left: 80px;
      top: 92px;
      opacity: 0.8;
      width: 156px;
      li {
        height: 70px;
        line-height: 70px;
        padding-left: 12px;
        font-size: 24px;
        color: #ffffff;
      }
    }
  }
}
.header-search > div[data-v-5eeac47d] {
  background: #253350;
  height: auto;
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
  text-indent: 14px;
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
  li {
    height: 64px;
    // line-height: 64px;
    border-bottom: 2px solid #dfdfdf;
    margin-left: 30px;
    font-size: 24px;
    span {
      color: #333;
    }
  }
  :nth-child(1) {
    margin-top: 16px;
  }
  li:last-child {
    margin-bottom: 30px;
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

