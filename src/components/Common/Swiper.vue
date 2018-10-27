<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item, index) in billboards" :key="index"> 
                    <img :src="item.imageUrl" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
            
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div> -->
            
            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import  '#/swiper/dist/css/swiper.css';  //????????????????????
export default {
    data() {
        return {
            billboards: []
        }
    },
    created() {
        this.$http.get('/mz/v4/api/billboard/home',{
            params: {
                __t:new Date().getTime()
            }
        }).then((res) => {
            // console.log(res)
            this.billboards = res.data.data.billboards;
            // console.log(this.billboards.length)
        })
    },
    mounted() {
        // var mySwiper = new Swiper ('.swiper-container', {
        //     // direction: 'vertical', // 垂直切换选项
        //     loop: true, // 循环模式选项   
        //     autoplay: {
        //         delay: 3000,
        //         disableOnInteraction: false    //点击之后还能自动轮播
        //     },         
        //     // 如果需要分页器
        //     pagination: {
        //     el: '.swiper-pagination',
        //     },
            
        //     // 如果需要前进后退按钮
        //     navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        //     },
            
        //     // 如果需要滚动条
        //     scrollbar: {
        //     el: '.swiper-scrollbar',
        //     },
        // })        
    },
    watch: {
        billboards() {
            this.$nextTick(() => {
                var mySwiper = new Swiper ('.swiper-container', {
                    // direction: 'vertical', // 垂直切换选项
                    loop: true, // 循环模式选项   
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: false    //点击之后还能自动轮播
                    },         
                    // 如果需要分页器
                    pagination: {
                        el: '.swiper-pagination',
                    },
          
                    // 如果需要前进后退按钮
                    // navigation: {
                    // nextEl: '.swiper-button-next',
                    // prevEl: '.swiper-button-prev',
                    // },
                    
                    // 如果需要滚动条
                    scrollbar: {
                    el: '.swiper-scrollbar',
                    },
                })        
            })
        }
    }
}
</script>

<style lang="scss">
    .swiper-container {
        width: 100%;
        // height: 300px;
    }  
    img{
        max-width: 100%;
    }
</style>
