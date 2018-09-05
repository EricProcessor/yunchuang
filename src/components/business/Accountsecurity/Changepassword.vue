<template>
    <div class="box">
        <div class="head">
                <span>&lt;</span>
                <span>手机绑定</span>
                <span></span>
        </div>
        <div class="yellows">
            <div class="one_p">
                <p><span>手机账户登陆：</span>可直接使用手机登录:</p>
                <p><span>找回账户密码：</span>忘记密码时，可使用手机找回密码。</p>
            </div>
        </div>
        <div class="iptBox">
          <div class="iptBoxone" >
               <div class="zhu">
                   <p>输入手机号<span>(必填)</span></p>
               </div>
               
            <div class="ipt">
                <input type="text" class="txt" v-model="Obtain.tels" >
                <button class="btn"  @click="yanzheng()" >获取验证码</button>
                <!-- <button class="btn"  >{{Obtain.count}}秒后发送</button> -->


            </div>
          </div>

        <div class="iptBoxtwo" >
               <div class="zhu">
                   <p>输入验证码<span>(必填)</span></p>
               </div>
               
            <div class="ipt">
                <input type="text" class="txt" >
                
            </div>
            <div class="err" style="display:none">
                <p>验证码错误</p>
            </div>
          </div>
        </div>
        <!-- 尾部提交 -->
        <div class="foot">
            <div class="btn">
                <p class="foot_btn">提交</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            Obtain:{
                 
            tels:"", //获取手机input框中手机号
            count: 60, //验证码重新获取倒计时
            timer: null, //定时器
            }

           

        }
    },
    methods:{
        yanzheng(){
            
           var tel = 11 && /^((13|14|15|17|18|)[0-9]{1}\d{8})$/
            if(this.Obtain.tels == ""){
                alert('输入的值不能为空')
                return;
            }
            if(!tel.test(this.Obtain.tels) || this.Obtain.tels !=""){
                alert('手机号格式不正确')
                return;
            }else{
                
                this.disabled = true;
                


            }
        }
    }
}
</script>

<style lang="less" scoped>
    .box{
        // 头部
        .head{
            display:flex;
            justify-content: space-between;
            background: #253350;
            height:50px;
            padding: 10px 0;
            span{
                color:#ffffff;
               
            }
            span:first-child{
                font-size: 50px;
                margin-left: 25px;
                width: 20px;
	            height: 36px;
            }
            span:nth-child(2){
            //    width: 164px;
            margin-left: -40px;
                height: 37px;
                font-family: MicrosoftYaHei;
                font-size: 38px;
                font-weight: normal;
                font-stretch: normal;
                line-height: 46px;
                letter-spacing: 4px;
                color: #ffffff;
                width:60% ;
                text-align: center;
            }
        }
        .yellows{
            background: #feffc7;
            height:140px;
            .one_p{
                margin-left:40px;
                    span{
                          color: #999999;
                        }
                p:first-child{
                    padding:28px 0;
                    
                }
                p:last-child{
                    
                }

            }
        }
        .iptBox{
            
            .iptBoxone{
                margin-left: 40px;
                
                .zhu{
                    p{
                        margin: 20px 0;
                        span{
                            color: red;
                            letter-spacing: 1px;
                            padding-left: 10px;
                        }
                    }
                }
                .ipt{
                    .txt{
                        border: none;
                        width: 70%;
                        height: 59px;
                    }
                    .btn{
                       display: inline-block;
                       width: 185px;
	                    height: 63px;
                        margin-bottom: -2px;
                        margin-left: -5px;
                        text-align: center;
                        line-height: 61px;
                        background: #6ea1ff;
                        color: #fff; 
                        border: none;
                    }
                }
            }
            .iptBoxtwo{
                margin-left: 40px;
                margin-top: 40px;
                .zhu{
                    p{
                        margin: 20px 0;
                        span{
                            color: red;
                            letter-spacing: 1px;
                            padding-left: 10px;
                        }
                    }
                }
                .ipt{
                    .txt{
                        border: none;
                        width: 96%;
                        height: 59px;
                    }
                    
                }
                .err{
                    p{
                        text-align: end;
                        margin-right: 40px;
                        color: red;
                        letter-spacing: 2px;
                        margin-top: 4px;
                    }
                }
            }
        }
        //尾部提交按钮
        .foot{
            position: fixed;
            left:0;
            bottom:0;
            width: 100%;
            background: #6ea1ff;
            height: 88px;
            line-height:88px; 
            .btn{
                .foot_btn{
                    text-align: center;
                    color: #fff;
                    font-size: 30px;
                }
            }
        }
    }
</style>
