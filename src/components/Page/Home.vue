<template>
    <div>
        <swiper/>
        <div class="now">
            <ul>
                <li v-for="(item,index) in nowplaying" :key="index">
                    <img :src="item.cover.origin" alt="">  
                    <p class="txt">
                        <span class="name">{{item.name}}</span>
                        <span class="grade">{{item.grade}}</span>
                    </p> 
                </li>
            </ul>
           
        <div class="more">

            <button class="more-button">更多热映电影</button>
        </div>
        </div>
        <div class="dividing-line">
            <div class="upcoming">即将上映</div>
        </div>
        <div class="soon">
        <ul>
            <li v-for="(item,index) in soonplaying" :key="index">
                <img :src="item.cover.origin" alt="">  
                <p class="txt">
                    <span class="name">{{item.name}}</span>
                    <span class="grade">{{item.grade}}</span>
                </p> 
            </li>
        </ul>
            <div class="more">
                <button class="more-button">更多即将上映电影</button>
            </div>
        </div>
         <!-- {{$store.nowPlayingList[0]}} -->
    </div>
</template>

<script>
import Swiper from '../Common/Swiper'
export default {
    data() {   
        return {  
            nowplaying: [],
            soonplaying: []
        }
    },
    components: {
        Swiper
    },
    // beforeCreated() {
        // this.$store.dispatch("getNowPlaying");
    // },
    created() {
        this.$store.dispatch("getNowPlaying");     
        this.$store.dispatch("getSoonPlaying");     
        this.nowplaying = this.$store.state.nowPlayingList
        this.soonplaying = this.$store.state.soonPlayingList
        console.log(this.$store.state.nowPlayingList)
        console.log(this.$store.state.soonPlayingList)
        // console.log(this.nowplaying[0].cover.origin)
    },
//     computed:{
//       nowplayingList(){
//          return this.$store.nowPlayingList
//       }
//   },
}
</script>

<style lang="scss" scoped>
    .swiper-container {
        width: 100%;
        // height: 300px;
    }  
    img{
        max-width: 100%;
        display: block;
    }
   
    .now,.soon {
        padding: 20px;
        background: #999;
    }    
        li {
            margin: 20px 0;
        }
        p {
            margin: 0;  
            padding: 10px;
            .name {
                font-size: 14px;
            }
            .grade {
                color: #f78360;
                display: inline-block;
                line-height: 50px;
                // float: right;
                margin-right: 15px;
                font-size: 18px;
            }

        }
        .more {
            text-align: center;
            .more-button {
                width: 160px;
                height: 30px;
                border: 1px solid #aaa;
                border-radius: 15px;
                margin: 10px auto 30px;
                text-align: center;
                line-height: 30px;
                font-size: 12px;
                color: #616161;
                cursor: pointer;
            }
        }
        .txt {
            background: #fff;
        }

   
    .dividing-line {
        position: relative;
        margin-top: 30px;
        margin-bottom: 30px;
        border-bottom: 1px solid #a8a8a8;
        .upcoming {
            width: 65px;
            height: 20px;
            margin: 0 auto;
            margin-bottom: -10px;
            border-radius: 5px;
            font-size: 10px;
            line-height: 20px;
            text-align: center;
            color: #eee;
            background-color: #a7a7a7;
        }
    }
</style>
