<template>
    <div class="detailbox">
        <img :src="detail.cover.origin" alt="">
        <div class="filmcontent">
            <h3>影片简介</h3>
            <p>
                <span>导&emsp;&emsp;演：</span>{{detail.director}}
                <!-- <span></span> -->
            </p>
            <p>
                <span>主&emsp;&emsp;演:</span>
                <span class="actors" @click="ii(index)" v-for="(item, index) in detail.actors" :key="index">
                    {{item.name}}
                    <i v-if="index != detail.actors.length-1"> | </i>
                </span>
            </p>
            <p>
                <span>地区语言：</span>
                <span>{{detail.nation}}({{detail.language}}) </span>
            </p>
             <p>
                <span>类&emsp;&emsp;型：</span>
                <span>{{detail.category}} </span>
            </p>
             <p>
                <span>上映日期：</span>
                <span>{{detail.premiereAt|formateData}} </span>
            </p>
            <p>{{detail.synopsis}}</p>
        </div>
        <div class="btn">

        <button>立即购票</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            detail: {
                cover: {}
            }
        }
    },
    created() {
        var id = this.$route.params.id;
        var t = Toast({
            iconClass:"fa fa-spinner fa-pulse",
            position: 'middle',
            duration: -1  
        });
        axios.get('/mz/v4/api/film/'+id, {
            params: {
                __t: new Date().getTime()
            }
        }).then((res) => {
            t.close(); //把toast框关闭
            this.detail = res.data.data.film
            this.$store.state.movielist.navname = this.detail.name;
            console.log(res.data.data.film)
        })
    },
    methods: {
        ii(index) {
            console.log(index,this.detail.actors.length)
        }
    }
}
</script>

<style lang="scss" scoped>
    .detailbox {
        height: 100%;
        background: rgb(235, 235, 235);
    }
    img {
        width: 100%;
        display: block;
    }
    .filmcontent {
        color: #333;
        h3 {
            margin: 16px auto;
            border-left: 16px solid RGB(228, 200, 156);
            font-size: 16px;
            padding-left: 4px;
        }
        p {
            font-size: 12px;
            padding: 6px 15px;
            span {
                display: inline-block;
                min-width: 50px;
                text-align: justify 
            }
        }
        .actors {
            i {
                font-style: normal;
            }
        }
    }
    .btn {
        position: fixed;
        left: 0;
        bottom: 20px;
        width: 100%;
        text-align: center;
        button {
            font-size: 14px;
            min-width: 156px;
            height: 36px;
            line-height: 36px;
            border: none;
            background-color: #fe8233;
            padding: 0;
            margin: 0;
            border-radius: 18px;
            color: #fff;
            -webkit-transition: 0.5s ease;
        
        }
    }
</style>
