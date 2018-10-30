<template>
    <div>
        <mt-button class="btn" @click="quit" type="primary">退出</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
    methods: {
        quit() {
            console.log(1)
            sessionStorage.removeItem("user")
            this.$router.push({name:"login"})
        }
    }
}
</script>

<style lang="scss" scoped>
    .btn {
        font-size: 12px;
        width: 50px;
        height: 35px;
    }
</style>
