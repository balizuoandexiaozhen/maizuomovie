<template>
    <div class="soonbox">
            <div class="dividing-line">
                <div class="upcoming">即将上映</div>
            </div>
            <div class="soon">
                <ul>
                    <li v-for="(item,index) in soonplaying" :key="index">
                        <router-link :to=" '/detail/'+ item.id">
                            <img :src="item.cover.origin" alt="">
                            <p class="txt">
                                <span>
                                    <span class="name">{{item.name}}</span>
                                </span>
                                <span class="time">{{new Date(item.premiereAt).getMonth() +1}}月{{new Date(item.premiereAt).getDate()}}日上映</span>
                            </p>
                        </router-link>
                    </li>
                </ul>
                <div class="more">
                    <router-link to="/film">
                        <button class="more-button">更多即将上映电影</button>
                    </router-link>
                </div>
            </div>
        </div>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
     created() {
        this.getList({type: "coming-soon",count: 3});
    },
    computed: {
        // soonplaying() {
        //     return this.$store.state.soonPlayingList || [];
        // }
         ...mapState({
   	  	  	"soonplaying":(state)=>state.movielist["coming-soon"]
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
    .soonbox {
        padding: 20px;
        // padding-top: 0;
        background: #e1e1e1;
    }
    .soon { 
        li {
            margin-bottom: 20px;
        }
        p {              
            background: #fff;
            color: #333;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
                font-size: 12px;
            }
            .time {
                color: #f78360;
                font-size: 12px;
                margin-right: 20px;
            }
            .name {
                display: block;
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
