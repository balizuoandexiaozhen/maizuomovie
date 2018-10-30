<template>
    <div class="bigbox">
        <div class="box">
            <!-- <span class="txt">卡号：<span/> -->
            <div class="getyzm">
                <input type="text" @keyup="keyup" v-model="iphone" placeholder="请输入卡号">
                <!-- <mt-button v-if="flag" @click="getYzm" class="yzmbtn" type="danger">获取验证码</mt-button> -->
            </div>
            <div class="psw">
                <input type="password" v-model="mima" placeholder="请输入密码">
            </div>
            <p>{{tip}}</p>
            <button @click="sub">查询</button>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            iphone: '',
            mima: '',
            tip: '',
            yzm: '',
            flag: false
        }
    },
    methods: {
        keyup() {
            var reg = /^1\d{10}$/
             if(reg.test(this.iphone)) {
                 this.flag = true;
             } else {
                 this.flag = false;
             }
        },
        sub() {
            var reg = /^1\d{10}$/
            if(!reg.test(this.iphone)) {
                this.tip = "请输入正确的手机号"
            } else {
                // this.getYzm()
                if(this.mima == this.yzm) {
                    this.tip = "登入成功!"
                    var t = Toast({
                        iconClass:"iconfont icon-chenggong1",
                        position: 'middle',
                        duration: 1500  
                    });
                    sessionStorage.setItem("user",this.iphone)
                    this.$router.push({name:"mine"})
                } else {
                    this.tip = "验证码不正确"
                }
            }
        },
        getYzm() {
            var str = ''
            for(var i = 0; i < 6; i++) {
                str += Math.round(Math.random() * 9)
            }
            this.yzm = str;
            console.log(this.yzm)
        }
    }
}
</script>

<style lang="scss" scoped>
    $sc: 25;
    .bigbox {
        // background-color: #f6f6f6;
        padding-top: 50/$sc+rem;
        height: 100%;
    }
    .box {
        width: 80%;
        text-align: center;
        margin: 0 auto;
        .txt {
            font-size: 14px;
        }
        div {
            position: relative;
            // width: 70%;
            height: 15/$sc+rem;
            margin-bottom: 45px;
            border: solid 1px #c4c4c4;
            border-top: 0;

            input {
                position: absolute;
                bottom: 0;
                top: -15px;
                left: 0;
                right: 0;
                box-sizing: border-box;
                width: 100%;
                border: 0;
                outline: none;
                padding-left: 15px;
                font-size: 14px;
                // background-color: #f6f6f6;
            }
        }
        .psw {
            margin-bottom: 0;
        }
        p {
            font-size: 12px;
            text-align: left;
            height: 20px;
            margin-top: 10px;
            color: #fe8233;
            // border: 1px solid red;
        }
        button {
            width: 163px;
            background-color: #fe8233;
            color: #fff;
            border: none;
            border-radius: 36px;
            margin-top: 40px;
            padding: 8px 12px;
            font-size: 15px;
            outline: none;
        }
        .yzmbtn {
            font-size: 12px;
            width: 90px;
            height: 30px;
            position: absolute;
            right: 10px;
            bottom: 5px;
            background-color: rgb(41, 160, 151);
        }

        .getyzm {
            position: relative;
        }
    }
</style>
