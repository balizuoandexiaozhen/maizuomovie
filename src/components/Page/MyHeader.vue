<template>
    <div class="myheader">
		<span class="bar" >
			<i class="fa fa-bars" @click="toggle"></i>
		</span>
        <h3>{{$store.state.movielist.navname}}</h3>
		<span class="header-right">
			<router-link to="/city">
				<span class="location">{{$store.state.movielist.city}}</span>
				<i class="fa fa-angle-down"></i>
			</router-link>
			<router-link to="/login">
			<i class="fa fa-user-o"></i>
			</router-link>
		</span>
	</div>
</template>

<script>
export default {
	props: ["toggle"],
	data() {
		return {
			
		}
	},
	created() {
		this.$router.beforeEach((to, from, next) => {
			this.changtitle(to.path);
			next();
		}) 
	},
	methods: {
		changtitle(path) {
			switch(path) {
				case '/city': this.$store.commit("changeNavName","选择城市");break;
				default: this.$store.commit("changeNavName","卖座电影");
			} 
		}
	}
}
</script>


<style lang="scss" scoped>
    $sc:25;
    .myheader{  
   	    background: #282828;
	    position: fixed;
	    z-index: 500;
	    top: 0;
	    right: 0;
	    left: 0;
	    width: auto;
	    height: 50/$sc+rem;
	    line-height: 50/$sc+rem;
	    overflow: hidden;
   	    color:#efefef;
   	    i{
            font-size: 18px;
   	    }
		.bar {
			display: inline-block;
			height: 50/$sc+rem;
			line-height: 50/$sc+rem;
			width: 48px;
			text-align: center;
			border-right: 1px solid #222;
			box-shadow: 1px 0 1px #363636;
			color: #999;
			// height: 100%;
		}
	   	h3{
			display: inline-block;
			padding: 0 1em;
		    font-size: 16px;
            height: 50/$sc+rem;
            line-height: 50/$sc+rem;
			height: 100%;
		}
        .location {
            margin-left: 100/$sc+rem;
            font-size: 14px;
        }
		.header-right {
			float: right;
			margin-right: 15px;
			color: #999;
			a {
				display: inline-block;
				height: 100%;
				color: #999;
			}
		}
		.fa-angle-down {
			margin-right: 15px;
		}
   }
</style>
