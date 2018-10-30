<template>
    <div>
        <ul  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
                <li class="list" @click="todetail(item.id)"  v-for="(item,index) in movielist.list" :key="index">
            <!-- <router-link :to="'/detail/'+item.id"> -->
                    <span class="pic">
                        <img :src="item.poster.thumbnail" alt="">
                    </span>
                    <div class="now_content">
                        <p class="head">
                            <span class="title">{{item.name}}</span>
                            <span class="score">
                                <span v-if="type==='now-playing'">{{item.grade}}</span>
                                <i class="iconfont icon-jiantou1"></i>
                            </span>
                        </p>
                        <p class="detail">{{item.intro}}</p>
                        <p class="count" v-if="type==='now-playing'">{{item.cinemaCount}}家影院上映 {{item.watchCount}}人购票</p>
                        <p class="count" v-else>
                            <span class="time">
                                {{new Date(item.premiereAt).getMonth() +1}}月{{new Date(item.premiereAt).getDate()}}日上映
                                星期{{day[new Date(item.premiereAt).getDay()]}}
                            </span>
                        </p>
                    </div>
            <!-- </router-link> -->
                </li>
        </ul>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from 'vuex'
export default {
    data() {
        return {
            type: '',
            // list: [],
            day: ["日","一","二","三","四","五","六"]
        }
    },
    created() {
        // console.log(11)
        // console.log(this.$store.state.movielist.flag)
    },
    computed:{
        // movielist() {
        //     return this.$store.state.list || [];
        // }
        ...mapState(["movielist","list"])
    },
    watch: {
        $route: {
            handler(n) {
                this.$store.state.movielist.flag = false;
                this.resetList();
                this.type = n.params.type
                if(!this.type) {
                    this.type = 'now-playing'
                }
                this.getList({type: this.type,page:'movielist',count:7})
                //   this.$store.dispatch("getList",{type: this.type,page:'movielist',count:7});
            },
            immediate: true
        }
    },
    methods: {
        ...mapMutations(["resetList"]),
        ...mapActions(["getList"]),
        loadMore() {
            this.getList({type: this.type,page:'movielist',count: 7})
        },
        todetail(id) {
            console.log(id)
            this.$router.push({name:'detail',params:{id}})
        }
    }
}
</script>

<style lang="scss" scoped>
    $sc: 25;
    ul {
        background: #f9f9f9;
    }
    .list {
        overflow: hidden;
        width: 100%;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        border-bottom: dashed 1px #c9c9c9;
        border-bottom-width: 1px;
        border-bottom-style: dashed;
        border-bottom-color: rgb(201, 201, 201);
        cursor: pointer;
        font-size: 12px;
        .time {
            color: #ffb375;
        }
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
                height: 30px;
                line-height: 30px;
                color: #8e8e8e;
                overflow: hidden;
                width: 253/$sc+rem;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .count {
                color: #8e8e8e;
            }
        }
        .pic {
            display: inline-block;
            min-width: 62/$sc+rem;
        }
        img {
            height: 85/$sc+rem;
        }

    }

</style>
