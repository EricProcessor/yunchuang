<template>
    <div class="one">
        <!-- header -->
        <div class="heade">
                <span>&lt;</span>
                <span>修改密码</span>
                <span></span>
        </div>
    <!-- main -->
        <div class="xiugai">
        <div class="yuan" >
               <div class="pass">
                   <p>原密码<span>(必填)</span></p>
               </div>
               
            <div class="iptone">
                <input type="text" class="txtone" >
                
            </div>
            <div class="cuo" >
                <p>输入的原密码不一致</p>
            </div>
          </div>
        <div class="yuanone">
               <div class="passwo" >
                   <p>新密码<span>(必填)</span></p>
               </div>
               
            <div class="ipttwo">
                <input type="text" class="txtone" >
                
            </div>
          </div>
        <div class="new_yuanone" >
               <div class="new_passwords">
                   <p>确认密码<span>(必填)</span></p>
               </div>
               
            <div class="new_iptthree">
                <input type="text" class="txtone" >
                
            </div>
            <div class="no">
                <p>两次输入的密码不一致</p>
            </div>
          </div>
        </div>

    <!-- footer -->
    <div class="foot">
            <div class="btn">
                <p class="foot_btn">保存</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
body{
    background: #fff;
    .one{
        // header
         .heade{
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
        // main
        .xiugai{
            .yuan{
                margin-left: 40px;
                margin-top: 40px;
                .pass{
                    p{
                        margin: 20px 0;
                        span{
                            color: red;
                            letter-spacing: 1px;
                            padding-left: 10px;
                        }
                    }
                }
                .iptone{
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
            }
            .yuanone{
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
                .ipttwo{
                    .txtone{
                        border: none;
                        width: 96%;
                        height: 59px;
                    }
                    
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
        // footer
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
}
    
</style>
