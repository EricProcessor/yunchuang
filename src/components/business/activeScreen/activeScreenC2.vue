<template>
    <!--日期选择器-->
<div>
    <div class="actice-time">
            <span>活动时间</span>
            <div class="actice-input">
                <div class="time-left">
                    <!-- <input type="text" @click="openPicker" placeholder="开始时间" value="" /> -->
                    <div @click="openPicker" style="height:30px;width:120px; background:#ddd;"></div>
                    <i>☷</i>
                </div>
                <div class="time-right">
                    <input type="text" @click="openPicker" placeholder="结束时间"/>
                    <i>☷</i>
                </div>
            </div>
        </div>   
   <mt-datetime-picker
      v-model="pickerValue"
      type="date"
      ref="picker"
      year-format="{value} 年"
      month-format="{value} 月"
      date-format="{value} 日"
      @confirm="handleConfirm"
      :startDate = 'maxdata'
      :endDate = 'mindata'
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
      dateTime: '',
      startDate: new Date()
    }
  },
  methods: {
    openPicker () {
      this.$refs.picker.open()
    },
    formatDate(date) {
    const y = date.getFullYear()
    let m = date.getMonth() + 1
    m = m < 10 ? '0' + m : m
    let d = date.getDate()
    d = d < 10 ? ('0' + d) : d
    return y + ' ' + m + ' ' + d
    },
  handleConfirm(){
    let a = this.pickerValue
    this.zheng=this.formatDate(this.$refs.picker.value)

    },
  },
  
}
</script>
<style lang="less" scoped>
.actice-time{
    margin-top:40px;
    margin-left: 20px;
    span{
        height:58px;
        line-height: 58px;
        font-size: 28px;
        color: #333;
    }
    .actice-input{
        position: relative;
        display: flex;
        .time-left{
            position: relative;
            width: 36%;
            margin-right: 5%;
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
                right:35px;
                top:16px;
                font-size: 34px;
            }
        }
        .time-right{
            width: 36%;
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
                right:35px;
                top:16px;
                font-size: 34px;
            }
        }
    }
    
}  
</style>
