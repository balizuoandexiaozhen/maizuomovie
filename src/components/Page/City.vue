<template>
    <div>
        <div class="city" v-for="(item, index1) in letters" :key="index1">
            <h3>{{item}}</h3>
            <ul>
                <li @click="send(el.name)" v-for="(el, index2) in  cities.filter((element) => {
                            return element.zm == item
                        })" :key="index2">
                    <router-link :to="{name:'home',params: {city: el.name}}" >
                        {{el.name}}
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cities: [],
            letters: []
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
        send(name) {
            // this.$emit('city',name);
            // console.log(name)
            this.$store.state.city = name
            // console.log(this.$store.state.city)
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
                    zm: item.pinyin[0]
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
        a {
            color: #838383;
        }
    }
    ul {
        border-bottom: #ebebeb 1px solid;
    }
</style>
