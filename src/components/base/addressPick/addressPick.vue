<template>
    <!--地址选择组件-->
    <mt-popup :position="position" v-model="addressShow" :showToolbar="true">
        <slot></slot>
        <mt-picker :slots="slots" valueKey="name"  @change="_changeAddress"></mt-picker>
    </mt-popup>
    <!--地址选择组件-->
</template>
<script>
// import address from '@/config/address.json'         //地址三级联动json数据
export default {
    props: {
        position: {             //弹出方向设置，默认下方弹出
            type: String,
            default: 'bottom'
        }
    },
    data() {
        return {
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
    computed: {
        slots: function() {
            let _this = this
            return [{       //定义的备选数据。当地址信息请求过来时，添加到这个对象上，再赋值给slots。否则直接操作slots，因为vue和js的限制，无法监听数据元素上的对象上的属性变化
                flex: 1,    
                // values: Object.keys(address),
                values: _this.oneLevelAddress.map(item => {
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
                values: _this.secondLevelAddress.map(item => {
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
                values: _this.thirdLevelAddress.map(item => {
                    return item.ca_name
                }),
                className: 'slot5',
                textAlign: 'center'
            }]
        }
    },
    created() {
        this._initAddress()    //第一次请求，获取默认地址显示数据
    },
    methods: {
        //使用本地地址json信息文件
        // _changeAddress(picker, values) {              //地址选择组件改变后调用的  回调函数
        //     console.log(values)             //values为当前选中的地址数组
        //     if(address[values[0]]) {
        //         picker.setSlotValues(1, Object.keys(address[values[0]]))    //设置二级联动的内容，这里是城市。第二个参数为内容数组
        //         picker.setSlotValues(2, address[values[0]][values[1]])    //设置三级联动的内容，这里是县/区。第三个参数为
        //         this.addressProvince = values[0]
        //         this.addressCity = values[1]
        //         this.addressCounty = values[2]
        //         this.address = `${values[0]} - ${values[1]} - ${values[2]}`
        //         this.$emit('selectAddress', this.address)   //给父组件传出地址数值
        //     }
        // },
        //初始化
        _initAddress() {
            //第一次请求，获取一级数据
            this._getAddress('', 'P').then(res => {
                this.oneLevelAddress = res.data
                console.log(res)

                this.addressProvince = res.data[0].ca_name  //保存一级地址

                return this._getAddress(res.data[0].ca_id, 'C')

            }).then(res => {    //获取二级地址数据
                this.secondLevelAddress = res.data
                console.log(res)

                this.addressCity = res.data[0].ca_name      //保存二级地址

                return this._getAddress(res.data[0].ca_id, 'A')
                
            }).then(res => {    //获取三级地址数据
                this.thirdLevelAddress = res.data
                console.log(res)

                this.addressCounty = res.data[0].ca_name     //保存三级地址

            })
        },
        //发送请求调取对应的地址信息
        _changeAddress(picker, values) {              //地址选择组件改变后调用的  回调函数
            console.log(values)             //values为当前选中的地址数组
            
            // if(address[values[0]]) {
            //     picker.setSlotValues(1, Object.keys(address[values[0]]))    //设置二级联动的内容，这里是城市。第二个参数为内容数组
            //     picker.setSlotValues(2, address[values[0]][values[1]])    //设置三级联动的内容，这里是县/区。第三个参数为
            //     this.address = `${values[0]} - ${values[1]} - ${values[2]}`
            //     this.$emit('selectAddress', this.address)   //给父组件传出地址数值
            // }
            //数据不全，及第一次刚加载完，拦截
            if (!values[0] || !values[1] || !values[2]) {
                return
            } else {
                if(!this.first) {this.first = true; return}
            }
            
            for (let i = 0; i < values.length; i ++) {

                //当一级地址改变时，直接"进行第二级、三级的全部查询"，并跳出循环
                if (i === 0 && this.addressProvince !== values[0]) {
                    this.addressProvince = values[0]
                    console.log("看看这个为什么执行了两遍")
                    this._getSecond(this._getCaid(values[0], 1))
                    break
                }

                //当一级地址没变，二级地址改变时，直接"只进行第三级的查询"
                if (i === 1 && this.addressCity !== values[1]) {
                    this.addressCity = values[1]
                    console.log("二级执行了")
                    this._getThird(this._getCaid(values[1], 2))
                    break
                }
            }

            console.log("这个时候运行了")

            // this.addressProvince = values[0]
            // this.addressCity = values[1]
            this.addressCounty = values[2]
        },
        //进行第二级、三级的全部查询
        _getSecond(caId) {
            
            this._getAddress(caId, 'C').then(res => {
                console.log(res)
                this.secondLevelAddress = res.data
                this.addressCity = res.data[0].ca_name    //保存二级地址

                return this._getAddress(res.data[0].ca_id, 'A')
            }).then(res => {
                
                this.thirdLevelAddress = res.data
                console.log(res)
                this.addressCounty = res.data[0].ca_name    //保存三级地址
            })
        },
        //进行第三级的全部查询
        _getThird(caId) {
            this._getAddress(csId, 'A').then(res => {
                this.thirdLevelAddress = res.data

                this.addressCounty = res.data[0].ca_name    //保存三级地址
            })
        },
        //通过地址名称，来获取对应的ca_id。
        /*  val是指地址名。
            index是指定查询第几级的地址数据：
                1是一级， 
                2是二级， 
                3是三级
        */
        _getCaid(val, index) {
            let arr
            switch(index) {
                case 1: arr = this.oneLevelAddress; break;
                case 2: arr = this.secondLevelAddress; break;
                case 3: arr = this.thirdLevelAddress; break;
            }
            for (var i = 0; i < arr.length; i ++) {
                if (arr[i].ca_name === val) {
                    return arr[i].ca_id
                }
            }
        },
        //获取地址Ajax请求
        _getAddress(arg, type) {
            return new Promise((resolve, reject) => {
                this.axios({
                    url: "/frontbaseinfosetareaselect-home",
                    method: 'post',
                    data: {
                        arg,        //位置对应的id
                        type        //类型
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

