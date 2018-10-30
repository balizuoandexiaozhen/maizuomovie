<template>
    <div>
        <div class="nav">
            <router-link to="/card/default">卖座卡</router-link>
            <router-link to="/card/electronic">电子卖座卡</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // flag: true
        }
    },
    created() {
        
    },
    computed: {
        // flag() {
        //     return this.$store.state.movielist.flag
        // }
    }
}
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        align-items: center;
        height: 50px;
        margin: 0 auto;
        // background: #f9f9f9;
        border-bottom: solid #fe6e00 1px;

        a {
            font-size: 16px;
            flex: 1;
            text-align: center;
            color: #666;
            line-height: 46px;
            border-bottom: solid 3px #f9f9f9;
        }
        .router-link-active {
            color: #fe6e00;
            border-bottom: solid 3px #fe6e00;
            box-sizing: border-box;
        }
    }
</style>
