<template>
    <div v-scroll="obj" dis="400">
        <div class="" >
            <h3>按字母排序</h3>
            <ul>
                <li v-for="(item, index) in letters" :key="index" @click="gocity(item)">{{item}} </li>
            </ul>
        </div>
        <div class="city" v-for="(item, index1) in letters" :key="index1">
            <h3 :ref="item">{{item}}</h3>
            <ul>
                <li @click="send(el.name,el.id)" v-for="(el, index2) in  cities.filter((element) => {
                            return element.zm == item
                        })" :key="index2">
                    <router-link :to="{name:'home'}">
                        {{el.name}}
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="top" v-if="obj.flag" v-gotop>
            <i class="iconfont icon-huidaodingbu5"></i>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cities: [],
            letters: [],
            obj: {
                flag: false
            }
        }
    },
    computed: {
        everyCity(item) {
            return this.cities.filter((element) => {
                return element.zm == item
            })
        }
    },
    methods: {
        send(name,id) {
            // console.log(name,id)
            this.$store.state.movielist.city = name
            var d = new Date();
            d.setDate(d.getDate() + 7)
            document.cookie = "cityId="+id+";expires="+d+";path=/";
            document.cookie = "cityName="+encodeURI(name)+";expires="+d+";path=/";
            // console.log(this.$store.state.city)
        },
        gocity(item) {
            console.log('----', this.$refs[item][0].offsetTop)
            let element = document.documentElement || document.body;
            element.scrollTop = this.$refs[item][0].offsetTop - 50;

        }

    },
    created() {
        this.$http.get('/mz/v4/api/city',{
            params: {
                __t: new Date().getTime()
            }
        }).then((res) => {
            this.cities = res.data.data.cities.sort((a,b) => {
                // return a.pinyin.lacalCompare(b.pinyin)
                return a.pinyin[0].charCodeAt() - b.pinyin[0].charCodeAt()
            }).map((item) => {
                return {
                    name: item.name,
                    zm: item.pinyin[0],
                    id: item.id
                }
            })
            var letters = this.cities.map((item) => {
                return item.zm
            })
            this.letters = [...new Set(letters)]

        })
    }
}
</script>

<style lang="scss" scoped>
    $sc: 25;
    .top {
        position: fixed;
        bottom: 40/$sc+rem;
        right: 40/$sc+rem;
        font-size: 24px;
        .icon-huidaodingbu5 {
             font-size: 34px;
             color: #f78360;
        }
    }
    h3 {
        font-size: 20px;
        font-weight: 100;
        padding-left: 15px;
        font-size: 14px;
        line-height: 40px;
        background-color: #ebebeb;
        margin-top: -1px;
    }

    li {
        width: 25%;
        font-size: 16px;
        line-height: 46px;
        text-align: center;
        display: inline-block;
        cursor: pointer;
        border-bottom: #ebebeb 1px solid;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #838383;
        a {
            color: #838383;
        }
    }
    ul {
        border-bottom: #ebebeb 1px solid;
    }
</style>
