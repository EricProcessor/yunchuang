<template>
    <!--日期选择器-->
<div>  
    <div class="time-right">
        <input type="text" @click="openPicker" v-model="birthdays" placeholder="结束时间"/>
        <i>☷</i>
    </div>
   <mt-datetime-picker
      type="date"
      ref="picker"
      v-model="dateTime"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirms"
      >
    </mt-datetime-picker>
</div>
</template>
<script type="text/ecmascript-6">
import { DatetimePicker } from 'mint-ui'
import Vue from 'vue'
Vue.component(DatetimePicker.name, DatetimePicker)
export default {
  data () {
    return {
      birthdays: "",//三个拼接好的 地址
      date:'', //自定义日期
      second:'',//自定义毫秒数
      dateTime: new Date()
    }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirms(date){
        console.log(date)
        let year = date.getFullYear(),
                month = date.getMonth() - 0 + 1,
                day = date.getDate()
            this.birthdays = `${year}-${month}-${day}`
            this.date = `${year} ${month} ${day}`
            this.second = Date.parse(this.date)
            // console.log(this.second)
            this.$emit("selectDateTwo",this.second)       
    },
  },
  
}
</script>
<style lang="less" scoped>
.time-right{
    width: 70%;
    position: relative;
    input{
        width: 95%;
        height:58px;
        background: #e9e7e7;
        border:1px solid #f2f2f2;
        padding-left:10px;
        border-radius: 4px;
        color: #666;
    }
    i{
        position: absolute;
        right:15px;
        top:16px;
        font-size: 34px;
    }
}
</style>
