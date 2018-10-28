<template>
    <div>
        <ul>
            <li class="list" v-for="(item,index) in soonplaying" :key="index">
                <img :src="item.poster.thumbnail" alt="">
                <div class="now_content">
                    <p class="head">
                        <span class="title">{{item.name}}</span>
                        <span class="score">
                            <i class="iconfont icon-jiantou1"></i>
                        </span>
                    </p>
                    <p class="detail">{{item.intro}}</p>
                    <p class="count">
                        <span class="time">
                            {{new Date(item.premiereAt).getMonth() +1}}月{{new Date(item.premiereAt).getDate()}}日上映
                            星期{{day[new Date(item.premiereAt).getDay() - 1]}}
                        </span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            day: ["一","二","三","四","五","六","日"]
        }
    },

    created() {
        this.$store.dispatch("getSoonPlaying");
    },
    computed:{

        soonplaying() {
            return this.$store.state.soonPlayingList || [];
        }
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
            overflow: hidden;
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
                height: 30px;
                line-height: 30px;
                color: #8e8e8e;
                overflow: hidden;
                width: 100%;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .count {
                color: #8e8e8e;
            }
            .time {
                color: #ffb375;
            }
        }
        img {
            height: 85/$sc+rem;
        }

    }

</style>
