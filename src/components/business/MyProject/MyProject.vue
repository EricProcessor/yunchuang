<template>
  <div class="towLevelRouter">
    <index-header :text="headerText" :hasSearch="false"></index-header>
    <ul class="myIntCon">
      <li>
        <ol>
          <div class="myIntConImg">
            <img src="" alt="">
          </div>
          <div class="myIntConInf">
            <h3>2018中国创业武林大会</h3>
            <span>2018-07-17 至 08-21</span>
          </div>
        </ol>
        <dl>
          <dd>
            <h4>行业领域</h4>
            <span>消费生活</span>
            
          </dd>
          <dd>
            <h4>所属阶段</h4>
            <span>概念阶段</span>
          </dd>
          <dd>
            <h4>融资进度</h4>
            <span>未融资</span>
          </dd>
          <dd>
            <h4>审核状态</h4>
            <span class="cared">待审核</span>
          </dd>
        </dl> 
          <!-- <div class="operation">
            <p><img src="./edit.png" alt=""><span>编辑</span></p>
            <p><img src="./deleate.png" alt=""><span>删除</span></p>
          </div> -->
      </li>
    </ul>
  </div>
</template>
<script>
import IndexHeader from "business/indexHeader/indexHeader";
import axios from "axios";
import config from "@/config/config";
export default {
  created() {
    this.headerText = "我的项目"; //设置头部显示导航内容
  },
  components: {
    IndexHeader
  },
  mounted() {
    this.inforData();
  },
  methods: {
    //获取后台数据
    inforData() {
      let _url = config.host + "/h5frontmyactivity-home";
      let params = new URLSearchParams();
      // params.append("selType", this.serachSend.SearchClass);
      // params.append("KeyWord", encodeURI(encodeURI(this.serachSend.searchVal)));
      axios.post(_url).then(res => {
        // this.items = res.data;
        console.log(res.data);
      });
    }
  }
};
</script>
<style lang="less" scoped>
// 二级路由定位
.towLevelRouter {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  background: rgb(245, 245, 245);
}
//我的项目内容区域
.myIntCon {
  overflow: hidden;
  li {
    background-color: #fff;
    margin-top: 20px;
    ol {
      width: 750px;
      height: 180px;
      display: flex;
      align-items: center;
      .myIntConImg {
        width: 120px;
        height: 120px;
        background-color: #cad3dc;
        margin: 0 30px;
      }
      .myIntConInf {
        h3 {
          font-size: 30px;
          height: 48px;
          // line-height: 60px;
          color: #333333;
          letter-spacing: 3px;
        }
        span {
          font-size: 20px;
          letter-spacing: 2px;
          color: #999999;
        }
      }
    }
    dl {
      display: flex;
      justify-content: space-around;
      padding-bottom: 8px;
      dd {
        width: 187px;
        height: 64px;
        line-height: 32px;
        margin: 10px 0;
        border-right: 1px solid #ebebeb;
        text-align: center;
        h4 {
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 2px;
          color: #666666;
        }
        span {
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          letter-spacing: 2px;
          color: #333333;
        }
        .cared {
          color: #f35828;
        }
      }
    }
    // 编辑删除的样式
    .operation {
      display: flex;
      justify-content: center;
      height: 70px;
      margin: 0 15px;
      border-top: 1px solid #f5f5f5;
      p {
        display: flex;
        align-items: center;
        width: 120px;
        img {
          width: 32px;
          padding-right: 6px;
        }
        span {
          font-size: 20px;
          letter-spacing: 2px;
          color: #999999;
        }
      }
    }
  }
}
</style>