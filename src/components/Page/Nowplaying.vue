<template>
    <div>
        <ul>
            <li class="list" v-for="(item,index) in nowplaying" :key="index">
                <img :src="item.poster.thumbnail" alt="">
                <div class="now_content">
                    <p class="head">
                        <span class="title">{{item.name}}</span>
                        <span class="score">{{item.grade}}
                            <i class="iconfont icon-jiantou1"></i>
                        </span>
                    </p>
                    <p class="detail">{{item.intro}}</p>
                    <p class="count">{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },

    created() {
        this.$store.dispatch("getNowPlaying");
        // this.$store.dispatch("getSoonPlaying");
    },
    computed:{
        nowplaying() {
            return this.$store.state.nowPlayingList || [];
        }
        // soonplaying() {
        //     return this.$store.state.soonPlayingList || [];
        // }
  },
}
</script>

<style lang="scss" scoped>
    $sc: 25;
    ul {
        background: #f9f9f9;
    }
    .list {
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        // justify-content: space-between;
        border-bottom: dashed 1px #c9c9c9;
        border-bottom-width: 1px;
        border-bottom-style: dashed;
        border-bottom-color: rgb(201, 201, 201);
        cursor: pointer;
        font-size: 12px;
        // p:after {
        //     content: "";
        //     clear: both;
        //     height: 0;
        //     visibility: visible;
        //     display: block;
        // }

        .now_content {
            flex: 1;
            margin-left: 20px;
             .title {
                font-size: 16px;
            }
            .head {
                line-height: 32px;
            }
            .score {
                float: right;
                font-size: 16px;
                color: #fc7103;
                .icon-jiantou1 {
                    color: #999;
                    font-size: 12px;
                    font-weight: 100;
                }
            }
            .detail {
                line-height: 30px;
                color: #8e8e8e;
            }
            .count {
                color: #8e8e8e;
            }
        }
        img {
            height: 85/$sc+rem;
        }

    }

</style>
