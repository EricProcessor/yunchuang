<template>
    <div class="box">
        <div class="head">
                <index-header text="手机绑定" :hasSearch="false"></index-header>
        </div>
        <div class="yellows" @click="headNone"  >
            <div class="one_p">
                <p><span>手机账户登陆：</span>可直接使用手机登录:</p>
                <p><span>找回账户密码：</span>忘记密码时，可使用手机找回密码。</p>
            </div>
        </div>
        <div class="iptBox">
          <div class="iptBoxone">
               <div class="zhu">
                   <p>输入手机号<span>(必填)</span></p>
               </div>
            <div class="ipt">
                <input type="text" class="txt" v-model="Obtain.tels" >
                <button class="btn"  @click="yanzheng(Obtain.tels)" v-if="Obtain.count==time" >获取验证码</button>
                <!-- html中 不要写this -->
                <button class="btn" style="background:#ccc" v-else>{{Obtain.count}}秒后发送</button>
            </div>
          </div>
          <div class="VerificationBox">
              <!-- <p v-show="Obtain.Nulls">{{Obtain.ObtainNull}}</p> -->
          </div>
        <div class="iptBoxtwo" >
               <div class="zhu">
                   <p>输入验证码<span>(必填)</span></p>
               </div>
            <div class="ipt">
                <input type="text" class="txt" v-model="Obtain.verificationCode" >
            </div>
            <div class="err" >
                <p class="Verification" v-show="verificationCodez.errCode">{{verificationCodez.codeerrorTxt}}</p>
            </div>
          </div>
        </div>
        <!-- 尾部提交 -->
        <div class="foot">
            <div class="btn" @click="addBtn(Obtain.tels,Obtain.verificationCode)">
                <p class="foot_btn">提交</p>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import IndexHeader from "business/indexHeader/indexHeader";
export default {
    data(){
        return {
            time:60,
            Obtain:{
                tels:"", //获取手机input框中手机号
                count:0, //验证码重新获取倒计时
                timer: null, //定时器
                verificationCode:"",
                ObtainNull:"输入的值不能为空",
                Nulls:false,
                str:"",         //页面渲染手机号,显示成*号
            },
            // ok:'true'
            verificationCodez:{
                errCode:false,
                codeerrorTxt:"验证码错误"
            }
        }
    },
    created(){
        this.Obtain.count = this.time;
    },
    methods:{
        phonepwd(pwd){
           let tels = 11 && /^((13|14|15|17|18|)[0-9]{1}\d{8})$/;
            return tels.test(pwd)
        },
        //返回上一层
        go(){
            this.$router.go(-1);
        },
        //点击黄色框,隐藏
        headNone(){},
        //点击获取验证码    
        yanzheng(telephone){
            if(telephone == ""){
                Toast('手机号不能为空');
               // this.Obtain.Nulls=true;
            }else{
                this.Obtain.Nulls=false;
                if(!this.phonepwd(telephone)){
                Toast('手机号格式不正确');
                return;
            }else{         
                  let phoneUrl = "/frontcompanyinfomile-checkAcc";  //获取手机号是否注册接口
                    let params = { fmiAcc: telephone };
                    this.axios.post(phoneUrl, params).then(res => { 
                        //代表手机未注册过
                        if (res.data.flag == false){
                            //获取短信验证码
                             let phone_url = '/frontmyaccphonesendmessage-home';
                              let params = {
                                   phone: telephone,
                               };
                              this.axios.post(phone_url,params).then(data =>{
                                     console.log(data.data)
                                     if(data.data == true){
                                         Toast("发送成功");
                                         let id = setInterval(()=>{
                                             --this.time;
                                             if(!this.Obtain.count){
                                                 this.Obtain.count = this.time
                                                 clearInterval(id)
                                             }
                                         },1000)
                                     }else{
                                          Toast("发送失败")
                                     }
                              })
                           
                        } else {
                                 Toast(res.data.msg2)      //用户已注册               
                        }
                    });
            }
            }
           
        },
        
       //提交按钮
       addBtn(txtVal,verificationVal){
           if(txtVal=="" &&verificationVal==""){
               Toast('信息不完整')
           }else if(txtVal==""){
               Toast("请输入手机号")
           }else if(verificationVal==""){
               Toast("请输入验证码")
           }else{
                let _url = '/frontmyaccphoneupdatephone-home',
                params = {
                        phone:txtVal,
                        code:verificationVal
                }
                this.axios.post(_url,params).then(res =>{
                    if(res.data == false){
                        this.verificationCodez.errCode = true;
                        Toast("验证码不正确")
                    }else{
                        this.$router.push("/mine/accountsecuritys/");
                        Toast({
                            message: '操作成功',
                            iconClass: 'icon icon-success'
                        });
                    }
                })
           }
       }
    },
    components: {
    IndexHeader
  }
}
</script>

<style lang="less" scoped>
    .box{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background: #fff;
        z-index: 200;
        height: 100%;
        // 头部
        .head{
            .lefts{
                color:#fff;
                margin-left:10px;
                font-size: 40px;
                margin-top: 5px;
            }
            display:flex;
            justify-content: space-between;
            background: #253350;
            height:55px;
            padding: 10px 0;
            span{
                color:#ffffff;
            }
            span:nth-child(2){
            //    width: 164px;
            margin-left: -40px;
                height: 37px;
                font-family: MicrosoftYaHei;
                font-size: 40px;
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
            margin-top: 20px;
            .VerificationBox{
                color: red;
                text-align: right;
                letter-spacing: 2px;
                margin-right: 20px;
                margin-top: 5px;
          
              
            }
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
                        background: #f5f5f5
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
                        background: #f5f5f5;
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
