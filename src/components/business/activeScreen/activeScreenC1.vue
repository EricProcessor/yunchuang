<template>
     <div class="actice-place">
          <span>活动区域</span>
          <div class="actice-input">
              <p @click="showAddressPopup"><input type="text" placeholder="选择省-市-区" disabled v-model="simpAddress"/></p>
              <i>▼</i>
          </div>
          <mt-popup v-model="addressShow" position="bottom" class="region-popup">
            <mt-picker :slots="slots" valueKey="name" class="region-picker"  @change="_changeAddress"></mt-picker>
          </mt-popup>
          
      </div>   
</template>
<script>
  import Vue from 'vue'
  import { Popup } from 'mint-ui';
  Vue.component(Popup.name, Popup);
  import { Picker } from 'mint-ui';
  Vue.component(Picker.name, Picker);
  import address from '@/config/address.json'  
 
export default {
    props: {       
        position: {             //弹出方向设置，默认下方弹出
            type: String,
            default: 'bottom'
        }
    },
    data() {
        return {
            address: "",      //由以上三个拼接好 地址信息数组
            simpAddress:"",
            regionInit:false,
            simpId:"",
            slots: [{
                flex: 1,    
                values: Object.keys(address),
                values: address.map(item => {
                    return item.ca_name
                }),
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                // values: Object.keys(address["北京市"]),
                values: address[0].shi.map(item => {
                    return item.ca_name
                }),
                className: 'slot3',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot4'
            }, {
                flex: 1,
                // values: address["北京市"]["市辖区"],
                values: address[0].shi[0].qu.map(item => {
                    return item.ca_name
                }),
                className: 'slot5',
                textAlign: 'center'
            }],
            // oneLevelAddress: [],    //储存一级地址数组
            // secondLevelAddress: [],     //储存二级地址数组
            // thirdLevelAddress: [],      //储存三级地址数组
            addressShow: false,     //控制该组件显示/隐藏
            addressProvince: {},    //省
            addressCity: {},        //市
            addressCounty: {}      //县
            
        }
    },
    methods: {
        //使用本地地址json信息文件
        _changeAddress(picker, values) {              //地址选择组件改变后调用的  回调函数
            // console.log(values)             //values为当前选中的地址数组
            
                //设置二级联动的内容，这里是城市。第二个参数为内容数组

                let second = []
                for (let i = 0; i < address.length; i ++) {
                    if (address[i].ca_name === values[0]) {
                        this.addressProvince = {        //保存用于导出的一级地址
                            ca_name: address[i].ca_name,
                            ca_id: address[i].ca_id
                        }

                        second = address[i].shi         //保存获取的对应二级，用于遍历名称，及获取三级用
                        break
                    }
                }
                picker.setSlotValues(1, second.map(item => {
                    return item.ca_name
                }))    
                
                //设置三级联动的内容，这里是县/区。第三个参数为
                let third = []
                for (let i = 0; i < second.length; i ++ ) {
                    if (second[i].ca_name === values[1]) {
                        this.addressCity = {        //保存用于导出的二级地址
                            ca_name: second[i].ca_name,
                            ca_id: second[i].ca_id
                        }
                        third = second[i].qu            //保存获取的对应三级，用于三级遍历名称用
                    }
                }
                picker.setSlotValues(2, third.map(item => {
                    return item.ca_name
                }))

                //获取用于导出的三级地址
                for (let i = 0; i < third.length; i ++) {
                    if (third[i].ca_name === values[2]) {
                        this.addressCounty = {      //保存用于导出的三级地址
                            ca_name: third[i].ca_name,
                            ca_id: third[i].ca_id
                        }
                    }
                }

                //地址数据整合
                if(this.regionInit){
                    this.address = [this.addressProvince, this.addressCity, this.addressCounty]
                    // console.log(this.addressProvince.ca_id)
                    this.simpAddress= this.address.map(item => {
                          return item.ca_name
                      }).join("-")
                      
                    this.simpId= this.address.map(item => {
                          return item.ca_id
                    })
                    // console.log(this.simAddress)
                    this.$emit('selectAddress', this.simpId)   //给父组件传出地址数值
                }
                else{
                  this.regionInit = true
                }
               
        },
        showAddressPopup() {       //地址选择栏弹出显示
            // this.$refs.addressPopup.open()
            
            this.addressShow = true
        },
        //请求用户数据后，设置指定的地点用，格式["省","市", "县/镇"]（注意，设置的地点名称数组，对应地址json数据中必须有，否则失效）
        setAddress() {
            picker.setValues(["北京市","市辖区"]["东城区"])
        },
        closeAddressComponent(){
          this.addressShow = false
        }
    }
}
</script>
<style lang="less" scoped>
.actice-place{
  margin-top:50px;
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
          color:#666;
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
  height:410px;
  margin-bottom: 85px;
  .region-picker{
    width: 100%;
    height:400px;
    margin-bottom: 45px;
    font-size: 45px;
  }
    .address{
    //   padding-top: 20px;
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