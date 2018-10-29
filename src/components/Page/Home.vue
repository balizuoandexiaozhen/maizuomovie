<template>
    <div>
        <swiper/>
        <Now/>
        <Soon/>
    </div>
</template>

<script>
import Swiper from '../Common/Swiper'
import Now from './Now'
import Soon from './Soon'
export default {
    data() {
        return {

        }
    },
    components: {
        Swiper,Now,Soon
    }
}
</script>

<style lang="scss" scoped>
    .swiper-container {
        width: 100%;
    }
    img{
        max-width: 100%;
        display: block;
    }
</style>
