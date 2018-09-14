<template>
    <!--地址选择组件-->
    <mt-popup :position="position" v-model="addressShow" :showToolbar="true">
        <slot></slot>
        <mt-picker :slots="slots" valueKey="name"  @change="_changeAddress"></mt-picker>
    </mt-popup>
    <!--地址选择组件-->
</template>
<script>
import address from '@/config/address.json'         //地址三级联动json数据
export default {
    props: {
        position: {             //弹出方向设置，默认下方弹出
            type: String,
            default: 'bottom'
        }
    },
    data() {
        return {
            slots: [{
                flex: 1,    
                // values: Object.keys(address),
                values: [],
                className: 'slot1',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot2'
            }, {
                flex: 1,
                // values: Object.keys(address["北京市"]),
                values: [],
                className: 'slot3',
                textAlign: 'center'
            }, {
                divider: true,
                content: '-',
                className: 'slot4'
            }, {
                flex: 1,
                // values: address["北京市"]["市辖区"],
                values: [],
                className: 'slot5',
                textAlign: 'center'
            }],
            oneLevelAddress: [],    //储存一级地址数组
            secondLevelAddress: [],     //储存二级地址数组
            thirdLevelAddress: [],      //储存三级地址数组
            addressShow: false,     //控制该组件显示/隐藏
            addressProvince: '',    //省
            addressCity: '',        //市
            addressCounty: '',       //县
            address: ''         //由以上三个拼接好的 地址
        }
    },
    created() {
        //第一次请求，获取一级数据
        // this._getAddress('', 'P').then((res) => {
        //     this.oneLevelAddress = res
        //     return res
        // }).then((oneAddress) => {
        //     this._getAddress(oneAddress[0].ca_id, 'C').then(res => {

        //     })
        // })
    },
    methods: {
        _changeAddress(picker, values) {              //地址选择组件改变后调用的  回调函数
            // console.log(values)             //values为当前选中的地址数组
            if(address[values[0]]) {
                picker.setSlotValues(1, Object.keys(address[values[0]]))    //设置二级联动的内容，这里是城市。第二个参数为内容数组
                picker.setSlotValues(2, address[values[0]][values[1]])    //设置三级联动的内容，这里是县/区。第三个参数为
                this.addressProvince = values[0]
                this.addressCity = values[1]
                this.addressCounty = values[2]
                this.address = `${values[0]} - ${values[1]} - ${values[2]}`
                this.$emit('selectAddress', this.address)   //给父组件传出地址数值
            }
        },
        //获取地址Ajax请求
        _getAddress(arg, type) {
            return new Promise((resolve, reject) => {
                this.axios({
                    url: "/frontbaseinfosetareaselect-home",
                    method: 'post',
                    data: {
                        arg,
                        type 
                    }
                }).then(res => {
                    resolve(res)
                })
            })
        },
        //获取二级地址
        _getSecondAddress() {

        },
        //请求用户数据后，设置指定的地点用，格式["省","市", "县/镇"]（注意，设置的地点名称数组，对应地址json数据中必须有，否则失效）
        setAddress() {
            picker.setValues(["北京市","市辖区"]["东城区"])
        },
        showAddressComponent() {        //显示地址选择弹窗
            this.addressShow = true
        }
    }
}
</script>
<style lang="less" scoped>
.mint-popup {
    width: 100% !important;
}
</style>

