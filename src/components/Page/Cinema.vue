<template>
    <div>
        <ul>
            <li v-for="(item, index) in district" :key="index">
                <h3 class="position_name" @click="show(index)">{{item}}</h3>
                <div class="position_content" v-if="xb === index">
                    <div class="list" v-for="(item, index) in list.filter((element) => {
                        return element.district.name == item
                    })" :key="index">
                        <h3 class="cinema_name">{{item.name}}
                            <i class="iconfont icon-zuo"></i>
                            <i class="iconfont icon-jiantou1"></i>
                        </h3>
                        <p class="detail">{{item.address}}</p>
                        <p class="detail">距离未知</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
 
 <script>
 import {mapState,mapActions,mapMutations} from 'vuex'
 export default {
     data() {
         return {
            flag: false,
            xb: 0,
            cxb: ""
         }
     },
     created() {
         
         this.getcinemaList()
     },
     computed: {
         district() {
             return this.$store.state.cinemalist.district
         },
          list() {
             return this.$store.state.cinemalist.list
         },
     },
     methods: {
         ...mapActions(["getcinemaList"]),
         filter() {
            this.$store.state.cinemalist.list.filter()
        },
        //  ...mapState(["cinemalist","district"])
        show(index) {
            
                if(!this.flag) {
                    this.xb = index;
                } else {
                    this.xb = -1;
                }
   

            if(this.czb != index) {
                this.xb = index;
            }
            this.cxb = this.xb
            console.log(this.flag)
            console.log(this.xb);
            console.log(this.cxb);
            this.flag = !this.flag;
        }
     }
 }
 </script>
 
 <style lang="scss" scoped>
    $sc: 25;
    .position_name {
        height: 40/$sc+rem;
        line-height: 40/$sc+rem;
        font-size: 14px;
        padding-left: 16px;
        background: #e1e1e1;
        margin-bottom: 1px;
        color: #636363;
        cursor: pointer;
    }
    .position_content {
        .list {
            // border-radius: 5px;
            padding: 20px 20px 12px 16px;
            cursor: pointer;
            border-bottom: 1px solid #ccc;
        }
        .cinema_name {
            width: 100%;
            font-size: 14px;
            font-weight: 100;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            display: inline-block;
            vertical-align: text-top;
            // max-width: 80%;
            .icon-jiantou1 {
                float: right;
                font-size: 12px;
            }
            .icon-zuo {
                color: red;
                font-size: 12px;
            }
        }
        .detail {
            font-size: 12px;
            color: #ccc;
            width: 80%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
        }
    }
 </style>