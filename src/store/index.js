import Vue from 'vue';
import Vuex from 'vuex';
import movielist from './movielist'
// import { Toast } from 'mint-ui';
import cinemalist from './cinemalist'

Vue.use(Vuex);
// import axios from "axios";
var store = new Vuex.Store({
	modules: {
		movielist,cinemalist
	}
	// state:{
	// 	city: "北京",
	// 	"nowPlayingList": [],
	// 	"soonPlayingList": [],
	// 	"now-playing": [],
	// 	"coming-soon": [],
	// 	"list":[],
	// 	"page":1,  //当前请求的 页数
	// 	"loading":false,  //true 表示正在发请求， false 表示可以发请求了
	// 	"hasMore":true   //true,还有数据，false 没有更多数据了
	// },
	// getters:{  //计算属性

	// },
	// mutations:{  //同步改变数据
		// getNowPlayingSync(state,list) {

		// 	this.state.nowPlayingList = list;
		// 	// console.log(11)
		// },
		// getSoonPlayingSync(state,list) {
		// 	this.state.soonPlayingList = list;
		// 	// console.log(11)
		// },
		// getList(state,p){
		// 	state[p.type]=p.list
		// },
		// getMoreList(state,p){
		// 	// console.log(p);
		// 	state.list=state.list.concat(p.list);
		// },
		// changeHasMorePage(state, flag) {
		// 	state.hasMore = flag;
		// 	state.page += state.hasMore? 1:0
		// },
		// changeLoading(state,flag) {
		// 	state.loading = flag;
		// },
		// resetList(state) {
		// 	state.list = [];
		// 	state.page = 1;
		// 	state.loading = false;  //true 表示正在发请求， false 表示可以发请求了
		// 	state.hasMore = true;   //true,还有数据，false 没有更多数据了
		// }
	// },
	// actions:{  //异步改变数据
		// getNowPlaying(context){
		// 	axios.get("/mz/v4/api/film/now-playing", {
		// 		params: {
		// 			__t: new Date().getTime(),
		// 			page: 1,
		// 			count: 5
		// 		}
		// 	}).then((res)=>{
		// 		// console.log(res.data.data.films)
		// 		context.commit("getNowPlayingSync",res.data.data.films)
		// 		// console.log(this.state.nowPlayingList)

		// 	})
		// },
		// getSoonPlaying(context){
		// 	axios.get("/mz/v4/api/film/coming-soon", {
		// 		params: {
		// 			__t: new Date().getTime(),
		// 			page: 1,
		// 			count: 3
		// 		}
		// 	}).then((res)=>{
		// 		// console.log(res.data.data.films)
		// 		context.commit("getSoonPlayingSync",res.data.data.films)
		// 		// console.log(this.state.nowPlayingList)
		// 	})
		// },
		// getList(context,obj){
		// 	if(!context.state.hasMore) {
		// 		Toast({
		// 			message: "没有更多数据了",
		// 			position: 'bottom',
		// 			duration: 1500  // 显示时间是无限的
		// 		});
		// 		return;
		// 	}
		// 	var t= Toast({
		// 		iconClass:"fa fa-spinner fa-pulse",
		// 		position: 'middle',
		// 		duration: -1  // 显示时间是无限的
		// 	});
		// 	context.commit("changeLoading",true); 
		// 	axios.get("/mz/v4/api/film/"+obj.type,{
		// 		params:{
		// 			__t: new Date().getTime(),
		// 			page: context.state.page,
		// 			count:obj.count? obj.count:5
		// 		}
		// 	}).then((res)=>{
		// 		t.close(); //把toast框关闭
		// 		context.commit("getList",{type:obj.type,list:res.data.data.films});	
		// 		if(obj.page==="movielist"){
		// 			context.commit("getMoreList",{list:res.data.data.films});

		// 		}
		// 		var current = res.data.data.page.current;
		// 		var total = res.data.data.page.total;
		// 		//页数加一
		// 		context.commit("changeHasMorePage",current!=total)
		// 		context.commit("changeLoading",false)
		// 	})
		// }
	// }
})

export default store;
