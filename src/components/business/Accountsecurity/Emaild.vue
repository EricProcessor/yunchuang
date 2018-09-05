<template>
    <div class="to">
        <!-- header -->
        <div class="emails">
                <span>&lt;</span>
                <span>邮箱认证</span>
                <span></span>
        </div>
    <!-- center -->
        <div class="email_xiugai">
        <div class="email_yuan" >
               <div class="email_pass">
                   <p>输入邮箱账号<span>(必填)</span></p>
               </div>
               
            <div class="email_iptone">
                <input type="text" class="txtone" >
                
            </div>
            <div class="wrong_two" >
                <p>邮箱格式错误错误</p>
            </div>
          </div>
           <div class="email_yuanone" >
               <div class="passwo">
                   <p>输入验证码<span>(必填)</span></p>
               </div>
               
            <div class="email_ipttwo">
                <input type="text" class="txtone" >
                
            </div>
            <div class="wrong">
                <p>验证码错误</p>
            </div>
          </div>
       
        </div>

    <!-- footer -->
        <div class="footer">
            <div class="btnone">
                <p class="foot_btns">提交</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .to{
        .emails{
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
        .email_xiugai{
            .email_yuan{
                margin-left: 40px;
                margin-top: 40px;
                .email_pass{
                    p{
                        margin: 20px 0;
                        span{
                            color: red;
                            letter-spacing: 1px;
                            padding-left: 10px;
                        }
                    }
                }
                .email_iptone{
                    .txtone{
                        border: none;
                        width: 96%;
                        height: 59px;
                    }
                    
                }
                .cuo{
                    text-align: right;
                    margin-right: 40px;
                    color: red;
                   letter-spacing: 2px;
                   display: none;
                }
                .wrong_two{
                     text-align: right;
                    margin-right: 40px;
                    color: red;
                   letter-spacing: 2px;
                   display: none;
                   margin-top: 20px;
                }
            }
            .email_yuanone{
                margin-left: 40px;
                margin-top: 40px;
                .passwo{
                    p{
                        margin: 20px 0;
                        span{
                            color: red;
                            letter-spacing: 1px;
                            padding-left: 10px;
                        }
                    }
                }
                .email_ipttwo{
                    .txtone{
                        border: none;
                        width: 96%;
                        height: 59px;
                    }
                    
                }
                .wrong{
                     text-align: right;
                    margin-right: 40px;
                    color: red;
                   letter-spacing: 2px;
                   display: none;
                }
            }
            

             .new_yuanone{
                margin-left: 40px;
                margin-top: 40px;
                .new_passwords{
                    p{
                        margin: 20px 0;
                        span{
                            color: red;
                            letter-spacing: 1px;
                            padding-left: 10px;
                        }
                    }
                }
                .new_iptthree{
                    .txtone{
                        border: none;
                        width: 96%;
                        height: 59px;
                    }
                    
                }
                .no{
                    text-align: right;
                    margin-right: 40px;
                    color: red;
                   letter-spacing: 2px;
                    display: none;
                }
            }
        }
        .footer{
            position: fixed;
            left:0;
            bottom:0;
            width: 100%;
            background: #6ea1ff;
            height: 88px;
            line-height:88px; 
            .btnone{
                .foot_btns{
                    text-align: center;
                    color: #fff;
                    font-size: 30px;
                }
            }
        }
    }
</style>
