export default {
    // getNowPlayingSync(state,list) {

    //     this.state.nowPlayingList = list;
    //     // console.log(11)
    // },
    // getSoonPlayingSync(state,list) {
    //     this.state.soonPlayingList = list;
    //     // console.log(11)
    // },
    changeNavName(state,p) {
        state.navname = p
    },

    getList(state,p){
        state[p.type]=p.list
    },
    getMoreList(state,p){   
        // console.log(p);
        state.list=state.list.concat(p.list);
    },
    changeHasMorePage(state, flag) {
        state.hasMore = flag;
        state.page += state.hasMore? 1:0
    },
    changeLoading(state,flag) {
        state.loading = flag;
    },
    resetList(state) {
        state.list = [];
        state.page = 1;
        state.loading = false;  //true 表示正在发请求， false 表示可以发请求了
        state.hasMore = true;   //true,还有数据，false 没有更多数据了
    }
}