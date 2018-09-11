<template>
<div class="towLevelRouter">
    <div class="wrap">
        <!-- 头部 -->
    <index-header :text="headerText" :hasSearch="false"></index-header>

           
    <!-- 手机绑定 修改密码 邮箱验证 -->
        <section class="center">
            <div class="main">
                <!-- 手机验证 -->
                <div class="main_dl">
                   <div class="one">
                       <dl>
                           <dt><img src="./tel.png" alt=""></dt>
                           <dd>
                               <p>手机绑定</p>
                               <p>123****4356</p>
                           </dd>
                       </dl>
                   </div>
                    <div class="two">
                        <p>未认证</p>
                        <p>已认证</p>
                    </div>
                </div>
                <!-- 修改密码 -->
                <!-- <router-link to="/mine/accountsecuritys/tel"> -->
                <div class="lock_dl">
                   <div class="one">
                       <dl>
                           <dt><img src="./lock.png" alt=""></dt>
                           <dd>
                               <p>修改密码</p>
                               <p>为确保您的账号安全，请定期更换密码</p>
                           </dd>
                       </dl>
                   </div>
                    <div class="two">
                        <p>修改</p>
                        <!-- <p style="display:none">已认证</p> -->
                    </div>
                </div>
               <!-- </router-link> -->
                <!-- 邮箱验证 -->
                <div class="email_dl">
                   <div class="one">
                       <dl>
                           <dt><img src="./email.png" alt=""></dt>
                           <dd>
                               <p>邮箱验证</p>
                               <p>验证邮箱后，您可以享受更丰富的服务</p>
                           </dd>
                       </dl>
                   </div>
                    <div class="two">
                        <p>未完成</p>
                        <p style="display:none">已完成</p>
                    </div>
                </div>
            </div>
            
        </section>
    </div>
    
</div>
    
</template>

<script>
import IndexHeader from "business/indexHeader/indexHeader";

export default {
    data (){
        return {}
    },
     created() {
        this.headerText = "账号安全"; //设置头部显示导航内容
     },
    methods:{
        go(){
            this.$router.go(-1);
        },
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
    .wrap{
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
                                margin-left:15%;
                                
                                img{
                                    width: 90%;
                                    padding-right: 5%;

                                }
                            }
                            dd{
                                    margin-left: 10px;
                              //  margin-left:5px;
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
                                    color: #6ea1ff;
                                }
                            }
                      }
                    }
                    .two{
                       width: 13%;
                        p:first-child{
                            color: red;
                            font-size: 24px;
                        }
                        p:last-child{
                            color: #6ea1ff;
                            font-size: 24px;
                            display: none;
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
                    .one{
                        
                      dl{
                            display: flex;
                            dt{
                                margin-left:7%;
                                
                                img{
                                    width: 80%;
                                   

                                }
                            }
                            dd{
                                 margin-left: 8px;
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
                                    color: #999999;
                                    
                                }
                            }
                      }
                    }
                     .two{
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
                    .one{
                        
                      dl{
                            display: flex;
                            dt{
                                margin-left:7%;
                                
                                img{
                                    width: 80%;
                                   

                                }
                            }
                            dd{
                                 margin-left: 8px;
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
                                      color: #999999;
                                }
                            }
                      }
                    }
                     .two{
                       width: 13%;
                        p:first-child{
                            color: red;
                            font-size: 24px;
                        }
                        p:last-child{
                            color: #6ea1ff;
                            font-size: 24px;
                        }
                    }
               }
           }
       }
    }
}
    
</style>
