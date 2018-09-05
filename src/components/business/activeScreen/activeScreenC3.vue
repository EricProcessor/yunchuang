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
      birthdays: "",
      dateTime: '',
      startDate: new Date()
    }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    // formatDate(date) {
    // const y = date.getFullYear()
    // let m = date.getMonth() + 1
    // m = m < 10 ? '0' + m : m
    // let d = date.getDate()
    // d = d < 10 ? ('0' + d) : d
    // return y + ' ' + m + ' ' + d
    // },
    handleConfirms(date){
        console.log(date)
        let year = date.getFullYear(),
                month = date.getMonth() - 0 + 1,
                day = date.getDate()
            this.birthdays = `${year}-${month}-${day}`
            
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
    }
    i{
        position: absolute;
        right:15px;
        top:16px;
        font-size: 34px;
    }
}
</style>
