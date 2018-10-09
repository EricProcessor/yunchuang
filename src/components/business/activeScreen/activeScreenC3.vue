<template>
    <!--日期选择器-->
<div class="date-con">  
    <div class="time-right">
        <p @click="openPicker"><input type="text"  v-model="birthdays" disabled placeholder="结束时间"/><i></i></p>       
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
        // console.log(date)
        let year = date.getFullYear(),
                month = date.getMonth() - 0 + 1,
                day = date.getDate()
            this.birthdays = `${year}-${month}-${day}`
            this.$emit("selectDateTwo",this.birthdays)       //向父组件传值
    },
  },
  
}
</script>
<style lang="less">
.picker-slot{
  font-size: 27px;
}
.date-con{
  width: 49%;
  .time-right{
    width: 80%;
    position: relative;
    p{
      width: 100%;
      height:62px;
      position: relative;
      background: #e9e7e7;
      input{
        width: 100%;
        height:62px;
        background: #e9e7e7;
        border:1px solid #f2f2f2;
        padding-left:10px;
        box-sizing: border-box;
        border-radius: 4px;
        color: #666;
      }
      i{  
        display: block;
        height:56px;
        width: 56px;
        position: absolute;
        right:3px;
        top:7px;
        font-size: 34px;
        background: url("./datePic.png") no-repeat ;
        transform: scale(.7,.7)
      }
    }
  }
}

</style>
