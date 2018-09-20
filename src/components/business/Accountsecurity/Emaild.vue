<template>
    <div class="to">
        <!-- header -->
        <div class="emails">
               <i class="iconfont lefts" @click="go" >&#xe645;</i>
                <span>邮箱认证</span>
                <span></span>
        </div>
        <!-- 黄色警告框 -->
         <section class="warning">
            <div class="warning_one">
                <div class="warning_two">
                    <p >找回账户密码：忘记密码时，可使用邮箱找回密码.</p>
                </div>
            </div>
        </section>
    <!-- center -->
        <div class="email_xiugai">
        <div class="email_yuan" >
               <div class="email_pass">
                   <p>输入邮箱账号<span>(必填)</span></p>
               </div>
               
            <div class="email_iptone">
                <input type="email"  v-model="em" @blur="emailss(em)" class="txtone" >
                
            </div>
            <div class="wrong_two" >
                <p v-show="emFormat">邮箱格式错误</p>
                <p v-show="emNulls">您输入的为空</p>
            </div>
          </div>
           <div class="email_yuanone" >
               <div class="passwo">
                   <p>输入验证码<span>(必填)</span></p>
               </div>
               
            <div class="email_ipttwo">
                <input type="text" class="txtemail" v-model="yanzheng" >
            </div>
            <div class="wrong">
                <p>验证码错误</p>
            </div>
          </div>
        </div>
    <!-- footer -->
        <div class="footer">
            <div class="btnone" @click="emailBtn(em,yanzheng)">
                <p class="foot_btns">提交</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            em:'',       //邮箱账号信息
            emNulls:false,   //判断邮箱为空的验证
            emFormat:false,  //判断邮箱格式不正确时验证
            yanzheng:""        //邮箱验证码
        }
    },
    
    methods:{
        go(){
                this.$router.go(-1);
            },
        
        isEmail(pwd) {  
            //邮箱验证
            let isEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
            return isEmail.test(pwd);
         },
        emailss(emailVal){   
          
            if(emailVal==""){          //input框为空时
                this.emNulls = true;
                this.emFormat = false;
            }else{
                this.emNulls = false;
                if(this.isEmail(emailVal)){        //正则匹配
                    this.emFormat = false;  
                              //获取邮箱验证码
                              let _urltwo = "/frontmyaccsendcodemail-home";
                              let params = {
                                      mail:emailVal
                                  }
                    this.axios.post(_urltwo,params).then(res =>{
                    })   
                }else{
                    this.emFormat = true               
                }
            }
            
        },
        emailBtn(emailVal,codeVal){
           
            if(emailVal=="" && codeVal==""){
                alert("信息不完整")
            }else if(emailVal==""){
                alert("邮箱不能为空")
            }else if(codeVal==""){
                alert("验证码不能为空")
            }else{
                
                //邮箱验证接口
                let addUrl="/frontmyaccupdatemail-home",
                    params = {
                        mail:emailVal,
                        code:codeVal
                    };
                this.axios.post(addUrl,params).then((res)=>{
                    console.log(res)
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
    .to{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 200;
        height: 100%;
        .emails{
            .lefts{
                color:#fff;
                margin-left:15px;
                font-size: 45px;
                margin-top: 2px;
            }
            display:flex;
            justify-content: space-between;
            background: #253350;
            height:50px;
            padding: 10px 0;
            span{
                color:#ffffff;
               
            }
            span:nth-child(2){
            //    width: 164px;
            margin-left: -55px;
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
        .warning{
            .warning_one{
                height: 60px;
                background: #feffc7;
                
                .warning_two{
                    p{
                        padding:20px 0 0 30px;
                    }
                }
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
                        background: #f5f5f5;
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
                    height:10px;
                    color: red;
                   letter-spacing: 2px;
             
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
                    .txtemail{
                        border: none;
                        width: 96%;
                        height: 59px;
                       background: #f5f5f5;
                    }
                    
                }
                .wrong{
                     text-align: right;
                    margin-right: 40px;
                    color: red;
                   letter-spacing: 2px;
                  
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
