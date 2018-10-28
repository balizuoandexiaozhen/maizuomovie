<template>
    <div>
        <swiper/>
        <div class="now_soon">
            <div class="now">
                <ul>
                    <li v-for="(item,index) in nowplaying" :key="index">
                        <img :src="item.cover.origin" alt="">
                        <p class="txt">
                            <span>
                                <span class="name">{{item.name}}</span>
                                <span class="count">{{item.cinemaCount}}家影院上映{{item.watchCount}}人购票</span>
                            </span>
                            <span class="grade">{{item.grade}}</span>
                        </p>
                    </li>
                </ul>
                <div class="more">
                    <router-link to="/film">
                        <button class="more-button">更多热映电影</button>
                    </router-link>
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
                        <span>
                            <span class="name">{{item.name}}</span>
                        </span>
                        <span class="time">{{new Date(item.premiereAt).getMonth() +1}}月{{new Date(item.premiereAt).getDate()}}日上映</span>
                    </p>
                </li>
            </ul>
                <div class="more">
                    <router-link to="/film">
                        <button class="more-button">更多即将上映电影</button>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from '../Common/Swiper'
export default {
    data() {
        return {

        }
    },
    components: {
        Swiper
    },
    created() {
        this.$store.dispatch("getNowPlaying");
        this.$store.dispatch("getSoonPlaying");
        console.log(this.$store.state.nowPlayingList)
        console.log(this.$store.state.soonPlayingList)
    },
    computed: {
        nowplaying() {
            return this.$store.state.nowPlayingList || [];
        },
        soonplaying() {
            return this.$store.state.soonPlayingList || [];
        }
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
    .now_soon {
        padding: 20px;
        background: #e1e1e1;
        li {
            margin-bottom: 20px;
        }
        .time {
            color: #f78360;
            font-size: 12px;
            margin-right: 20px
        }
        .soon p {
            padding: 10px;
        }
        p {
            background: #fff;
            color: #333;
            padding-left: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                font-size: 12px;
            }
            .name {
                display: block;
            }
            // h5 {
            //     font-size: 12px;
            //     font-weight: 100;
            // }
            .count {
                color: #9a9a9a;
            }
            .grade {
                color: #f78360;
                display: inline-block;
                line-height: 50px;
                float: right;
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
    }
</style>
