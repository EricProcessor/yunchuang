<template>
     <div class="actice-place">
          <span>活动区域</span>
          <div class="actice-input">
              <input type="text" placeholder="选择省-市-区" v-model="region"  @click="showAddressPicker"/>
              <i>▼</i>
          </div>
          <mt-popup v-model="regionVisible" position="bottom" class="region-popup">
            <div class="address">
              <p class="address-p">热门城市</p><p>✖</p>
            </div>
            <ul>
              <li>北京</li>
              <li>上海</li>
              <li>广州</li>
              <li>深圳</li>
              <li>杭州</li>
              <li>武汉</li>
              <li>南京</li>
              <li>成都</li>
              <li>苏州</li>
              <li>东莞</li>
              <li>宁波</li>
              <li>郑州</li>
            </ul>
            <mt-picker :slots="myAddressSlots"  valueKey="name"  :visibleItemCount	="2" @change="addressChange" :itemHeight="30"></mt-picker>
          </mt-popup>
      </div>   
</template>
<script>
  import Vue from 'vue'
  import { Popup } from 'mint-ui';
  Vue.component(Popup.name, Popup);
  import { Picker } from 'mint-ui';
  Vue.component(Picker.name, Picker);
 
  //引入省市区数据json文件
  import threeLevelAddress from './threeLevelAddress.json'
 
  export default {
    data(){
      return{
        region:'',//三级地址
        province:'',//省
        city:'',//市
        county:'',//县
        provinceCode:'',//省级代码
        cityCode:'', //市级代码
        countyCode:'',//县级代码
        regionVisible:false,//弹出框是否可见
        regionInit:false,//禁止地区选择器自动初始化，picker组件会默认进行初始化，导致一进入页面就会默认选中一个初始3级地址
        //picker组件插槽
        myAddressSlots: [
          //省
          {
            flex: 1,
            values: this.getProvinceArr(), //省份数组
            className: 'slot1',
            textAlign: 'center'
          },
           //分隔符
          {
            divider: true,
            content: '',
            className: 'slot2'
          },
          //市
          {
            flex: 1,
            values: this.getCityArr("北京市"),
            className: 'slot3',
            textAlign: 'center'
          },
          {
            divider: true,
            content: '',
            className: 'slot4'
          },
          //县
          {
            flex: 1,
            values: this.getCountyArr("北京市","北京市"),
            className: 'slot5',
            textAlign: 'center'
          }
        ],
      }
    },
    methods:{
      //打开地址选择器
      showAddressPicker(){
        this.regionVisible = true;
      },
      //picker组件的change事件，进行取值赋值
      addressChange(picker, values){
        // console.log(picker);
        // console.table(values);
        if (this.regionInit){
          //取值并赋值
          this.region = values[0]["name"] + values[1]["name"] + values[2]["name"];
          this.province = values[0]["name"];
          this.city = values[1]["name"];
          this.county = values[2]["name"];
          this.provinceCode = values[0]["code"];
          this.cityCode = values[1]["code"];
          this.countyCode = values[2]["code"];
 
          // console.log(picker.getSlotValue(0));
          // console.table(picker.getSlotValues(0));
          // console.table(picker.getValues());
          //给市、县赋值
          picker.setSlotValues(1, this.getCityArr(values[0]["name"]));
          picker.setSlotValues(2, this.getCountyArr(values[0]["name"], values[1]["name"]));
        }else {
          this.regionInit = true;
        }
      },
      //遍历json，返回省级对象数组
      getProvinceArr() {
        let provinceArr = [];
        threeLevelAddress.forEach(function (item) {
          let obj = {};
          obj.name = item.name;
          obj.code = item.code;
          provinceArr.push(obj);
        });
        return provinceArr;
      },
      //遍历json，返回市级对象数组
      getCityArr(province) {
        // console.log("省：" + province);
        let cityArr = [];
        threeLevelAddress.forEach(function (item) {
          if (item.name === province) {
            item.children.forEach(function (args) {
              let obj = {};
              obj.name = args.name;
              obj.code = args.code;
              cityArr.push(obj);
            });
          }
        });
        return cityArr;
      },
      //遍历json，返回县级对象数组
      getCountyArr(province,city){
        let countyArr = [];
        threeLevelAddress.forEach(function(item){
          if (item.name === province){
            item.children.forEach(function (args) {
              if (args.name === city){
                args.children.forEach(function (param) {
                  let obj = {};
                  obj.name=param.name;
                  obj.code=param.code;
                  countyArr.push(obj);
                })
              }
            });
          }
        });
        // console.log(countyArr);
        return countyArr;
      },
    },
    mounted(){
      //初始化设备高度为设备高度height 100%
      let orderHeight = window.innerHeight;
      document.getElementById("three_level_address").style.height = orderHeight + 'px';
    }
  }
 
</script>
<style lang="less" scoped>
.actice-place{
    margin-top:108px;
    margin-left: 20px;
    span{
        height:58px;
        line-height: 58px;
        font-size: 28px;
        color: #333;
    }
    .actice-input{
        position: relative;
        input{
            width: 95%;
            height:58px;
            background: #e9e7e7;
            border:1px solid #f2f2f2;
            padding-left:10px;
            border-radius: 4px;
        }
        i{
            position: absolute;
            right:40px;
            top:20px;
        }
    }
    
}  

.region-popup{
  width: 100%;
  height:700px;
  .address{
    padding-top: 20px;
    width: 96%;
    margin-left: 2%;
    display: flex;
    justify-content:space-between;
    .address-p{
      color: #6ea1ff;
    }
  }
  ul{
    width: 96%;
    margin-left: 2%;
    margin-top: 15px;
    li{
      width: 20%;
      height:55px;
      line-height: 55px;
      text-align: center;
      display: inline-block;
      border:1px solid #f2f2f2;
      margin: 13px;
    }
    li:hover{
      color: #6ea1ff;
    }
  }
}
</style>
