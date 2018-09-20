<template>
    <div class="one">
      
    <index-header text="修改密码" :hasSearch="false"></index-header>

       
    <!-- main -->
        <div class="xiugai">
        <div class="yuan" >
               <div class="pass">
                   <p>原密码<span>(必填)</span></p>
               </div>
               
            <div class="iptone">
                <input type="password"  class="txtone"  @blur="ownPwdBlur(old.oldtxt)" v-model="old.oldtxt" placeholder="请输入原密码"  > 
            </div>
            <div class="cuo_old" >
                <p class="old_nl" v-show="old.oldshow" >{{old.old_nls}}</p>
                <p class="old_matching" v-show="old.matching" >{{old.old_matchings}}</p>
                <p v-show="old.falseMatching">{{old.Nomatching}}</p>
            </div>
          </div>
        <div class="yuanone">
               <div class="passwo">
                   <p>新密码<span>(必填)</span></p>
               </div>
               
            <div class="ipttwo">
                <input type="password" class="txtone" @blur="newspsd(newpss.newtxt)" v-model="newpss.newtxt" placeholder="密码长度6-21位，由字母数字组成，区分大小写"  >
            </div>
            
            <div class="new_pas">
                <p class="new_one"  v-show="newpss.newpsd">{{newpss.new_ones}}</p>
                <p class="new_two" v-show="newpss.oldNonew">{{newpss.new_twos}}</p>

                <div v-show="newpss.formats" >{{newpss.format}}</div>  
            </div>
          </div>
        <div class="new_yuanone" >
               <div class="new_passwords">
                   <p>确认密码<span>(必填)</span></p>
               </div>
               
            <div class="new_iptthree">
                <input type="password" class="txtone" @blur="Reaffirm(newpss.confirmtxt)" v-model="newpss.confirmtxt" placeholder="再次输入登录密码"  > 
            </div>
            
            <div class="cuo" >
                <!-- 输入的和新密码不一致 -->
                <p class="cuo_p" v-show="newpss.identical"  >{{newpss.newendold}}</p>  
                <!-- 确认密码不能为空 -->
                 <p class="cuo_null" v-show="newpss.judge" >{{newpss.nulls}}</p>
            </div>
          </div>
        </div>

    <!-- footer -->
    <div class="foot">
            <div class="btn">
                <p class="foot_btn" @click="add" >保存</p>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
import IndexHeader from "business/indexHeader/indexHeader";

export default {
  created() {
    // document.cookie =
  },
  data() {
    return {
      old: {
        oldtxt: "", //原密码
        oldshow: false, //判断密码框不能为空时
        old_nls: "原密码不能为空",
        matching: false,
        old_matchings: "请输入正确的格式",
        Nomatching:"您输入的密码和原密码不匹配",
        falseMatching:false
      },
      newpss: {
        newtxt: "", //新密码
        newpsd: false, //判断新密码框不能为空时
        format: "以数字字母的六-二十一位数组成",
        formats: false, //判断格式不正确时弹出
        new_ones: "密码不能为空",
        confirmtxt: "", //确认密码
        judge: false, //确认密码下的默认值
        nulls: "确认密码不能为空", //确认密码下的验证
        identical: false, //点击保存时,判断新密码和确认密码的值
        newendold: "两次输入的密码不一致", //确认密码下的验证
        oldNonew:false,
        new_twos:"输入的新密码不能和原密码一致"
      }
    };
  },

  methods: {
    //返回上一层
    go() {
      this.$router.go(-1);
    },
    isPwd(pwd) {
      //密码验证
      let isPwd = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,21}$/; //密码正则
      return isPwd.test(pwd);
    },
    //原密码失去焦点判断
    ownPwdBlur(oldVal) {
      //判断字符串为空
      console.log("原密码" + oldVal)
      if (oldVal == "") {
        this.old.oldshow = true;
        this.old.matching = false;
      } else {
        this.old.oldshow = false;
        //判断正则验证
        if (this.isPwd(oldVal)) {
          this.old.matching = false;
        } else {
          this.old.matching = true;
        }
      }
    },
    //判断新密码是否为空
    newspsd(newVal) {
       console.log("新密码" + newVal)
      if (newVal == "") {
        this.newpss.newpsd = true;
        this.newpss.formats = false;
        //this.newpss.oldNonew = false;
      } else {
        this.newpss.newpsd = false;
        //判断正则验证
        if (this.isPwd(newVal)) {
          this.newpss.formats = false;

          if(this.old.oldtxt == newVal){
              this.newpss.oldNonew = true;
          }else{
              this.newpss.oldNonew = false;
          }
        } else {
          this.newpss.formats = true;
          
          
        }
      }
    },
    //判断确认密码是否为空
    Reaffirm(confirmVal) {
        console.log("确认密码" + confirmVal)
      if (confirmVal == "") {
        this.newpss.judge = true;
      } else {
        this.newpss.judge = false;
        if (this.isPwd(confirmVal)) {
          this.newpss.identical = false;
        } else {
          this.newpss.identical = true;
        }
      }
    },
    //保存按钮点击事件
    add() {
      let old = this.old.oldtxt,
        news = this.newpss.newtxt,
        confirmtxts = this.newpss.confirmtxt;
      if (old == "" && news == "" && confirmtxts == "") {
        alert("信息不完整!");
      } else if (old == "") {
        alert("原密码不能为空!");
      } else if (news == "") {
        alert("新密码不能为空!");
      } else if (confirmtxts == "") {
        alert("确认密码不能为空!");
      } else {
        if (!this.isPwd(old) || !this.isPwd(news) || !this.isPwd(confirmtxts)) {
          alert("字母数字开头六到二十一位");
        } else if (!this.isPwd(old)) {
          alert("原密码格式不正确");
        } else if (!this.isPwd(news)) {
          alert("新密码格式不正确");
        } else if (!this.isPwd(confirmtxts)) {
          alert("确认密码格式不正确");
        } else {
          console.log("点击事件");
          
          if(this.old.oldtxt == this.newpss.newtxt){
              alert("新密码不能和原密码相同")
          }else{
              //输入的新密码不能和原密码一致的判断
              this.newpss.oldNonew = false;
              if(this.newpss.newtxt == this.newpss.confirmtxt){
                  var d = new Date();
                    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
                    var expires = "expires=" + d.toUTCString();
                    document.cookie = "SESSION=5b827058-5c7f-4db6-95a7-1e7f0e2d75ad" + ";" + expires;
                    let _url = "/frontmypasswordedit-home";
                    let params = {
                        pwd: old,
                        newpwd: news
                    };
                    this.axios.post(_url, params).then(res => {
                            console.log(res.data);
                            if(res.data == true){
                                this.old.falseMatching = false;
                                alert("修改成功");
                                this.$router.push("/mine")
                            }else{
                                this.old.falseMatching = true
                            }
                    });
              }else{
                 alert("您的确认密码和新密码不相同,请重新输入");
                 this.newpss.identical = true;
              }
                  
          }
        
        }
      }
    }
  },
  components: {
    IndexHeader
  }
};
</script>

<style lang="less" scoped>
body {
  background: #fff;
  .one {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
    z-index: 200;
    height: 100%;
    // header
    .heade {
      .lefts {
        color: #fff;
        margin-left: 10px;
        font-size: 45px;
        margin-top: 2px;
      }
      display: flex;
      justify-content: space-between;
      background: #253350;
      height: 50px;
      padding: 10px 0;
      span {
        color: #ffffff;
      }

      span:nth-child(2) {
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
        width: 60%;
        text-align: center;
      }
    }
    // main
    .xiugai {
      .yuan {
        margin-left: 40px;
        margin-top: 40px;
        .pass {
          p {
            margin: 20px 0;
            span {
              color: red;
              letter-spacing: 1px;
              padding-left: 10px;
            }
          }
        }
        .iptone {
          .txtone {
            border: none;
            width: 96%;
            height: 59px;
            background: #f5f5f5;
          }
        }
      }
      .yuanone {
        margin-left: 40px;
        margin-top: 40px;
        .passwo {
          p {
            margin: 20px 0;
            span {
              color: red;
              letter-spacing: 1px;
              padding-left: 10px;
            }
          }
        }
        .ipttwo {
          .txtone {
            border: none;
            width: 96%;
            height: 59px;
            background: #f5f5f5;
          }
        }
        .new_pas {
          text-align: end;
          color: red;
          margin-right: 40px;
          height: 20px;
          letter-spacing: 2px;
          .new_one {
            // display: none;
          }
          .new_two {
            // display: none;
          }
        }
      }

      .new_yuanone {
        .cuo {
          .cuo_p {
            // display: none;
          }
          text-align: right;
          margin-right: 40px;
          color: red;
          letter-spacing: 2px;
          .cuo_null {
            // display: none;
          }
        }
        margin-left: 40px;
        margin-top: 40px;
        .new_passwords {
          p {
            margin: 20px 0;
            span {
              color: red;
              letter-spacing: 1px;
              padding-left: 10px;
            }
          }
        }
        .new_iptthree {
          .txtone {
            border: none;
            width: 96%;
            height: 59px;
            background: #f5f5f5;
          }
        }
      }
      .cuo_old {
        text-align: end;
        color: red;
        margin-right: 40px;
        letter-spacing: 2px;
        height: 5px;
        .old_nl {
          // display: none;
        }
        .old_matching {
          // display: none;
        }
      }
    }
    // footer
    .foot {
      position: fixed;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #6ea1ff;
      height: 88px;
      line-height: 88px;
      .btn {
        .foot_btn {
          text-align: center;
          color: #fff;
          font-size: 30px;
        }
      }
    }
  }
}
</style>
