<template>
    <div class="detailbox">
        <img :src="detail.cover.origin" alt="">
        <div class="filmcontent">
            <h3>影片简介</h3>
            <p>
                <span>导演：</span>{{detail.director}}
                <!-- <span></span> -->
            </p>
            <p>
                <span>主演：</span>
                <span v-for="(item, index) in detail.actors" :key="index">{{item.name}}|</span>
            </p>
            <p>
                <span>地区语言：</span>
                <span>{{detail.nation}}({{detail.language}}) </span>
            </p>
             <p>
                <span>类型：</span>
                <span>{{detail.category}} </span>
            </p>
             <p>
                <span>上映日期：</span>
                <span>{{detail.premiereAt|formateDate}} </span>
            </p>
            <p>{{detail.synopsis}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { Toast } from 'mint-ui';
export default {
    data() {
        return {
            detail: {}
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
        }
    }
</style>
