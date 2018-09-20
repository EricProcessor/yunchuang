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
        },
        defaultProvinceId: {
            type: Number,
            default: 2
        },
        defaultCityId: {
            type: Number,
            default: 52
        },
        defaultAreaId: {
            type: Number,
            default: 500
        }
    },
    data() {
        return {
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
            addressCounty: {},       //县
            address: []         //由以上三个拼接好 地址信息数组
        }
    },
    methods: {
        //使用本地地址json信息文件
        _changeAddress(picker, values) {              //地址选择组件改变后调用的  回调函数
            console.log(values)             //values为当前选中的地址数组
            if (!this.first) {
                //根据传入的默认地址ID，显示默认地址。
                this.setAddress(picker)
                this.first = true
                return
            }

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
            this.address = [this.addressProvince, this.addressCity, this.addressCounty]
            console.log(this.address)
            this.$emit('selectAddress', this.address)   //给父组件传出地址数值
        },
        //请求用户数据后，设置指定的地点用，格式["省","市", "县/镇"]（注意，设置的地点名称数组，对应地址json数据中必须有，否则失效）
        setAddress(picker) {

            let second = []
            console.log(this.defaultProvinceId)
            for (let i = 0; i < address.length; i ++) {
                if (address[i].ca_id === this.defaultProvinceId) {
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

            let third = []
            for (let i = 0; i < second.length; i ++ ) {
                if (second[i].ca_id === this.defaultCityId) {
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
                if (third[i].ca_id === this.defaultAreaId) {
                    this.addressCounty = {      //保存用于导出的三级地址
                        ca_name: third[i].ca_name,
                        ca_id: third[i].ca_id
                    }
                }
            }
            console.log(this.addressProvince.ca_name)
            console.log(this.addressCity.ca_name)
            console.log(this.addressCounty.ca_name)

            // picker.setSlotValue(1, this.addressProvince.ca_name)
            // picker.setSlotValue(2, this.addressCity.ca_name)
            // picker.setSlotValue(3, this.addressCounty.ca_name)

            //设置传过来的默认值地址ID对应的地址
            picker.setValues([this.addressProvince.ca_name, this.addressCity.ca_name, this.addressCounty.ca_name])

            //地址数据整合
            this.address = [this.addressProvince, this.addressCity, this.addressCounty]
            console.log(this.address)
            this.$emit('selectAddress', this.address)   //给父组件传出地址数值
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

