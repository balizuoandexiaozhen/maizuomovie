<template>
    <div class="nowbox">
            <div class="now">
                <ul>    
                    <li v-for="(item,index) in nowplaying" :key="index">
                        <router-link :to=" '/detail/'+ item.id">
                            <img :src="item.cover.origin" alt="">
                            <p class="txt">
                                <span>
                                    <span class="name">{{item.name}}</span>
                                    <span class="count">{{item.cinemaCount}}家影院上映{{item.watchCount}}人购票</span>
                                </span>
                                <span class="grade">{{item.grade}}</span>
                            </p>
                        </router-link>
                    </li>
                </ul>
                <div class="more">
                    <router-link to="/film">
                        <button class="more-button">更多热映电影</button>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    created() {
        // this.$store.dispatch("getNowPlaying");
        this.getList({type:'now-playing',count: 5})
    },
    computed: {
        // nowplaying() {
        //     return this.$store.state.nowPlayingList || [];
        // },
        ...mapState({
   	  	  	"nowplaying":(state)=>state.movielist["now-playing"]
        })
    },
    methods: {
        ...mapActions(["getList"])
    }
}
</script>

<style lang="scss" scoped>
    img{
        max-width: 100%;
        display: block;
    }
    .nowbox {
        padding: 20px;
        background: #e1e1e1;
    }
    .now {        
        li {
            margin-bottom: 20px;
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
                margin: 10px auto 0px;
                text-align: center;
                line-height: 30px;
                font-size: 12px;
                color: #616161;
                cursor: pointer;
            }
        }

        // .dividing-line {
        //     position: relative;
        //     margin-top: 30px;
        //     margin-bottom: 30px;
        //     border-bottom: 1px solid #a8a8a8;
        //     .upcoming {
        //         width: 65px;
        //         height: 20px;
        //         margin: 0 auto;
        //         margin-bottom: -10px;
        //         border-radius: 5px;
        //         font-size: 10px;
        //         line-height: 20px;
        //         text-align: center;
        //         color: #eee;
        //         background-color: #a7a7a7;
        //     }
        // }
    }
</style>
