<template>
    <div class="bigbox">
        <div class="box">
            <div>
                <input type="text" v-model="iphone" placeholder="请输入手机号">
            </div>
            <div class="psw">
                <input type="password" @focus="getYzm" v-model="mima" placeholder="请输入验证码">
            </div>
            <p>{{tip}}</p>
            <button @click="sub">登录</button>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            iphone: '',
            mima: '',
            tip: '',
            yzm: ''
        }
    },
    methods: {
        sub() {
            var reg = /^1\d{10}$/
            if(!reg.test(this.iphone)) {
                this.tip = "请输入正确的手机号"
            } else {
                // this.getYzm()
                if(this.mima == this.yzm) {
                    this.tip = "登入成功"
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
        background-color: #f6f6f6;
        padding-top: 50/$sc+rem;
        height: 100%;
    }
    .box {
        width: 80%;
        text-align: center;
        margin: 0 auto;
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
                background-color: #f6f6f6;
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
    }
</style>
