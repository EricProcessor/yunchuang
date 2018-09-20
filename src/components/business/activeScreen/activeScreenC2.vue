<template>
    <!--日期选择器-->
<div>
    <div class="time-left">
        <input type="text" @click="openPicker" disabled v-model="birthday"  placeholder="开始时间" />
        <i></i>
    </div>
   <mt-datetime-picker
      type="date"
      ref="picker"
      v-model="dateTime"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm"
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
      birthday: "",
      date:'',
      second:'',
      dateTime: new Date() ,
    }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    handleConfirm(date){
      // console.log(date)
        let year = date.getFullYear(),
            month = date.getMonth() - 0 + 1,
            day = date.getDate()
          this.birthday = `${year}-${month}-${day}`
          this.$emit("selectDateOne",this.birthday) //向父组件传值
    },
  },
  
}
</script>
<style lang="less" scoped>
.time-left{
  position: relative;
  width: 70%;
  margin-right: 5%;
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
      display: block;
      height:50px;
      width: 50px;
      position: absolute;
      right:10px;
      top:8px;
      font-size: 34px;
      background: url("./datePic.png") no-repeat ;
      transform: scale(.7,.7)
    }
}

</style>
