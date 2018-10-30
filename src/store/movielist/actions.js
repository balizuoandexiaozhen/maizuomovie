import axios from "axios";
import { Toast } from 'mint-ui';

export default {
    getNowPlaying(context){
        axios.get("/mz/v4/api/film/now-playing", {
            params: {
                __t: new Date().getTime(),
                page: 1,
                count: 5
            }
        }).then((res)=>{
            context.commit("getNowPlayingSync",res.data.data.films)

        })
    },
    getSoonPlaying(context){
        axios.get("/mz/v4/api/film/coming-soon", {
            params: {
                __t: new Date().getTime(),
                page: 1,
                count: 3
            }
        }).then((res)=>{
            context.commit("getSoonPlayingSync",res.data.data.films)
            // console.log(this.state.nowPlayingList)
        })
    },
    getList(context,obj){
        if(!context.state.hasMore) {
            Toast({
                message: "没有更多数据了",
                position: 'bottom',
                duration: 1500  // 显示时间是无限的
            });
            return;
        }
        var t = Toast({
            iconClass:"fa fa-spinner fa-pulse",
            position: 'middle',
            duration: -1  // 显示时间是无限的
        });
        context.commit("changeLoading",true); 
        axios.get("/mz/v4/api/film/"+obj.type,{
            params:{
                __t: new Date().getTime(),
                page: context.state.page,
                count:obj.count? obj.count:5
            }
        }).then((res)=>{
            // console.log(res.data.data)
            t.close(); //把toast框关闭
            context.commit("getList",{type:obj.type,list:res.data.data.films});	
            if(obj.page==="movielist"){
                context.commit("getMoreList",{list:res.data.data.films});
            }
            var current = res.data.data.page.current;
            var total = res.data.data.page.total;
            // console.log(current)
            // console.log(total)
            //页数加一
            context.commit("changeHasMorePage",current!=total)
            context.commit("changeLoading",false)
        })
    }
}