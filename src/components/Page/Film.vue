<template>
    <div>
        <div class="nav">
            <router-link to="/nowplaying">正在热映</router-link>
            <router-link to="/soonplaying">即将上映</router-link>
            <!-- <router-view></router-view> -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        align-items: center;
        height: 50px;
        margin: 0 auto;
        border-bottom: solid #fe6e00 1px;
        a {
            font-size: 16px;
            flex: 1;
            text-align: center;
            color: #666;
        }
        .router-link-active {
            color: #fe6e00;
        }
    }
</style>
