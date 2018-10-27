import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import axios from "axios";
var store = new Vuex.Store({
	state:{
		city: "北京",
		nowPlayingList: [],
		soonPlayingList: [],
	},
	getters:{  //计算属性
		
	},
	mutations:{  //同步改变数据
		getNowPlayingSync(state,list) {

			this.state.nowPlayingList = list;
			// console.log(11)
		},
		getSoonPlayingSync(state,list) {
			this.state.soonPlayingList = list;
			// console.log(11)
		}
	},
	actions:{  //异步改变数据
		getNowPlaying(context){
			axios.get("/mz/v4/api/film/now-playing", {
				params: {
					__t: new Date().getTime()
				}
			}).then((res)=>{
				// console.log(res.data.data.films)
				// state.nowPlayingList = res.data.data.films;
				context.commit("getNowPlayingSync",res.data.data.films)
				// console.log(this.state.nowPlayingList)

			})
		},
		getSoonPlaying(context){
			axios.get("/mz/v4/api/film/coming-soon", {
				params: {
					__t: new Date().getTime()
				}
			}).then((res)=>{
				// console.log(res.data.data.films)
				// state.nowPlayingList = res.data.data.films;
				context.commit("getSoonPlayingSync",res.data.data.films)
				// console.log(this.state.nowPlayingList)

			})
		}
	}
})

export default store;