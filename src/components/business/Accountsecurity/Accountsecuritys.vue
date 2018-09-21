<template>
<div class="towLevelRouter">
    <div class="wrap">
        <!-- 头部 -->
    <index-header :text="headerText" :hasSearch="false"></index-header>

           
    <!-- 手机绑定 修改密码 邮箱验证 -->
        <section class="center">
            <div class="main">
                <!-- 手机验证 -->
                <div class="main_dl" @click="phoneCode(dataList.phonestatus)">
                   <div class="one">
                       <dl>
                           <dt><img src="./tel.png" alt=""></dt>
                           <dd>
                               <p>手机绑定</p>
                               <p>{{str}}</p>
                           </dd>
                       </dl>
                   </div>
                    <div class="two">
                        <p class="p2" v-if="dataList.phonestatus!='Y'" >未认证</p>
                        <p class="p1" v-else >已认证</p>
                    </div>
                </div>
                <!-- 修改密码 -->
                <!-- <router-link to="/mine/accountsecuritys/tel"> -->
                <div class="lock_dl" @click="modify" >
                   <div class="onepsd">
                       <dl>
                           <dt><img src="./lock.png" alt=""></dt>
                           <dd>
                               <p>修改密码</p>
                               <p>为确保您的账号安全，请定期更换密码</p>
                           </dd>
                       </dl>
                   </div>
                    <div class="twopsd">
                        <p>修改</p>
                        <!-- <p style="display:none">已认证</p> -->
                    </div>
                </div>
               <!-- </router-link> -->  
                <!-- 邮箱验证 -->
                <div class="email_dl" @click="emailCode(dataList.mailstatus)" >
                   <div class="oneemail">
                       <dl>
                           <dt><img src="./email.png" alt=""></dt>
                           <dd>
                               <p>邮箱验证</p>
                               <p>验证邮箱后，您可以享受更丰富的服务</p>
                           </dd>
                       </dl>
                   </div>
                    <div class="twoemail"  >
                        <p class="okemail" v-if="dataList.mailstatus=='N'">未完成</p>
                        <p class="okemaildOne" v-else>已完成</p>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
    <router-view />
</div>
    
</template>

<script>
import IndexHeader from "business/indexHeader/indexHeader";

export default {
    data (){
        return {
            dataList:{},
            ok:false,
            errNo:false,
            str:"",
        }
    },
     created() {
        this.headerText = "账号安全"; //设置头部显示导航内容
     },
    methods:{
        go(){
            this.$router.go(-1);
        },
        modify(){
            this.$router.push({
                path: "/mine/accountsecuritys/tel"
            })
        },
        getData(){
            let getUrl = "/h5frontmyaccsafety-home";
            this.axios.get(getUrl).then((res)=>{
                this.dataList = res.data;
                this.str = res.data.phone;
                if(this.dataList.phonestatus == "N"){
                     return
                }else{
                    this.str = this.str.substr(0,3)+"****"+this.str.substr(7);
                }
            })
        },
        emailCode(emaildVal){
            if(emaildVal=="N"){
                this.$router.push("/mine/accountsecuritys/emaild")
            }
        },
        phoneCode(codeVal){
            if(codeVal != "Y"){
                this.$router.push("/mine/accountsecuritys/Changepassword")
            }
        }
    },
    mounted(){
        this.getData();
    },
    components:{
        IndexHeader
    }
}
</script>

<style lang="less" scoped>
.towLevelRouter{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    background: rgb(245, 245, 245);
        // 头部------账号安全
       .center{
           height:140px;
           .main{
            //    手机绑定
               .main_dl{
                   background: #fff;
                   margin-top: 4%;
                   height:140px;
                   display: flex;
                   justify-content: space-between;
                    align-items: center;
                    .one{
                      dl{
                            display: flex;
                            dt{
                                margin-left:30px;
                                img{
                                    width: 62%;   
                                }
                            }
                            dd{
                              //  margin-left:5px;
                                p:first-child{
                                    width: 119%;
                                    height: 33px;
                                    font-family: MicrosoftYaHei;
                                    font-size: 20px;
                                    font-weight: normal;
                                    font-stretch: normal;
                                    letter-spacing: 2px;
                                    color: #333333;
                                }
                                p:last-child{
                                    color: #6ea1ff;
                                    margin-top: 10px;
                                }
                            }
                      }
                    }
                    .two{
                       width: 13%;
                        .p1{
                             color: #6ea1ff;
                           
                            font-size: 24px;
                        }
                        .p2{
                            color: red;
                            font-size: 24px;
                            //display: none;
                        }
                    }
               }
            // 修改密码
               .lock_dl{
                    background: #fff;
                   margin-top: 4%;
                   height:140px;
                   display: flex;
                   justify-content: space-between;
                    align-items: center;
                    .onepsd{
                      dl{
                         
                            display: flex;
                            dt{
                                margin-left:30px; 
                                img{
                                    width: 100%;
                                }
                            }
                            dd{
                                margin-left: 30px;
                                width: 129%;
                                p:first-child{
                                    height: 33px;
                                    font-family: MicrosoftYaHei;
                                    font-size: 20px;
                                    font-weight: normal;
                                    font-stretch: normal;
                                    letter-spacing: 2px;
                                    color: #333333;
                                }
                                p:last-child{
                                    margin-top: 5px;
                                    color: #999999;
                                }
                            }
                      }
                    }
                     .twopsd{
                       width: 13%;
                        p:first-child{
                            color: #6ea1ff;
                            font-size: 24px;
                            text-align: center;
                        }
                        // p:last-child{
                        //     color: #6ea1ff;
                        //     font-size: 24px;
                        // }
                    }
               }
            //    邮箱验证
               .email_dl{
                    background: #fff;
                   margin-top: 4%;
                   height:140px;
                   display: flex;
                   justify-content: space-between;
                    align-items: center;
                    .oneemail{
                      dl{
                            display: flex;
                            dt{
                                margin-left:30px;
                                
                                img{
                                    width: 100%;
                                }
                            }
                            dd{
                                 margin-left: 30px;
                                width: 119%;
                                p:first-child{
                                    height: 33px;
                                    font-family: MicrosoftYaHei;
                                    font-size: 20px;
                                    font-weight: normal;
                                    font-stretch: normal;
                                    letter-spacing: 2px;
                                    color: #333333;
                                }
                                p:last-child{
                                    margin-top: 8px;
                                      color: #999999;
                                }
                            }
                      }
                    }
                     .twoemail{
                       width: 13%;
                        .okemaildOne{
                              color: #6ea1ff;
                            font-size: 24px;
                        }
                        .okemail{
                           color: red;
                            font-size: 24px;
                        }
                    }
               }
           }
       }
}
    
</style>
