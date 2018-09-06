<template>
    <div class="one">
        <!-- header -->
        <div class="heade">
               <i class="iconfont lefts" @click="go" >&#xe645;</i>
                
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
                <input type="password"  class="txtone"  @blur="ownPwdBlur" v-model="old.oldtxt" placeholder="请输入原密码"  >
                
            </div>
            
            
            <div class="cuo_old" >
                <p class="old_nl" v-show="old.oldshow" >{{old.old_nls}}</p>
                <p class="old_matching" v-show="old.matching" >{{old.old_matchings}}</p>
            </div>
          </div>

        <div class="yuanone">
               <div class="passwo">
                   <p>新密码<span>(必填)</span></p>
               </div>
               
            <div class="ipttwo">
                <input type="password" class="txtone" v-model="newpss.newtxt" placeholder="密码长度6-21位，由字母数字组成，区分大小写"  >
            </div>
            
            <div class="new_pas">
                <p class="new_one"  >{{newpss.new_ones}}</p>
                <p class="new_two">{{newpss.new_twos}}</p>
            </div>
          </div>
        <div class="new_yuanone" >
               <div class="new_passwords">
                   <p>确认密码<span>(必填)</span></p>
               </div>
               
            <div class="new_iptthree">
                <input type="password" class="txtone" placeholder="再次输入登录密码" v-model="newpss.confirmtxt" >
                
            </div>
            
            <div class="cuo" >
                <p class="cuo_p" v-show="judge"  >{{newpss.newendold}}</p>
                 <p class="cuo_null" >{{newpss.nulls}}</p>
                 <p>{{newpss.two}}</p>
            </div>
          </div>
        </div>

    <!-- footer -->
    <div class="foot">
            <div class="btn">
                <p class="foot_btn" @click="add" >保存</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            
            judge:true,
            old:{
                  oldtxt:"",      //原密码
                  oldshow:false,    //判断密码框不能为空时
                  old_nls:"原密码不能为空",
                  matching:false,
                  old_matchings:"和原密码不匹配", 
                  
            },

          newpss:{
                newtxt:"",      //新密码
                new_ones:"密码不能为空",
                //new_twos:"密码不能为空",
                confirmtxt:"",  //确认密码
                nulls:"结果不能为空",   //确认密码下的验证
                newendold:"输入的和新密码不一致"  //确认密码下的验证
            
          }
          

        }
    },
    methods:{
        go(){
            this.$router.go(-1);
        },
         isPwd(pwd) {
            //密码验证
            let isPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/;
            return isPwd.test(pwd);
         },
         
         ownPwdBlur(){
             //判断原密码,新密码,确认密码是否为空
            if(this.old.oldtxt == "" ||this.newpss.newtxt == "" || this.newpss.confirmtxt ==""){
                this.old.oldshow = true;  
               
            }else{
                this.old.oldshow = false;
                
            }
            
         },
         //保存按钮点击事件
        add(){
            if(this.isPwd(this.newpss.newtxt)){

            }


            // if(this.isPwd(this.newpss.newtxt) && this.isPwd(this.newpss.confirmtxt)){
            //     if(this.newpss.newtxt == this.newpss.confirmtxt){
            //         alert(1)
            //     }
            // }else{
            //     if(!this.isPwd(this.newpss.newtxt) || !this.isPwd(this.newpss.confirmtxt)){
            //           alert("已数字字母的六-二十一位数");
                      
            //            if(this.newpss.newtxt !== this.newpss.confirmtxt){
            //              alert(this.two)   
            //            }
            //     }
            // }
            
            
            // if(this.newpss.newtxt !== this.newpss.confirmtxt ){
            //     alert(this.two ) 
            //     return;
            // }else{
            //     alert("成功")
            // }
        }
    }
}
</script>

<style lang="less" scoped>
body{
    background: #fff;
    .one{
        // header
         .heade{
             .lefts{
                color:#fff;
                margin-left:10px;
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
            margin-left: -50px;
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
                .new_pas{
                    text-align: end;
                    color: red;
                     margin-right:40px;
                     height:20px;
                     letter-spacing: 2px;
                    .new_one{
                        display: none;
                    }
                    .new_two{
                      display: none;
                    }
                }
            }
            

             .new_yuanone{
                 .cuo{
                    .cuo_p{
                        display: none;
                    }
                    text-align: right;
                    margin-right: 40px;
                    color: red;
                   letter-spacing: 2px;
                   .cuo_null{
                       display: none;
                   }
                }
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
               
            }
            .cuo_old{
                text-align: end;
                color: red;
                margin-right:40px;
                letter-spacing: 2px;
                .old_nl{
                   // display: none;
                }
                .old_matching{
                   // display: none;
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
