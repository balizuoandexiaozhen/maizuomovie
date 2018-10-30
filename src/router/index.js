import Vue from "vue";
import Router from "vue-router";
import City from "@/components/Page/City";
import Home from "@/components/Page/Home";
import Film from "@/components/Page/Film";
import Soonplaying from "@/components/Page/Soonplaying";
import Nowplaying from "@/components/Page/Nowplaying";
import Login from "@/components/Page/Login";
import MovieList from "@/components/Page/MovieList"
import Cinema from "@/components/Page/Cinema"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: {
        name: "home"
      }
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
    	path:"/film",
    	name:"film",
    	component:Film,
      redirect:{name:'movielist'},
      children:[
          {
             path:":type",
             name:'movielist',
             component:MovieList
          }
      ]
    },
    {
      path: "/cinema",
      name: "cinema",
      component: Cinema
    },
    // {
    //   path: "/film",
    //   name: "film",
    //   redirect: {
    //     name: "now"
    //   },
    //   component: Film,
    //   children: [
    //     {
    //       path: "nowplaying",
    //       name: "now",
    //       component: Nowplaying
    //     },
    //     {
    //       path: "soonplaying",
    //       name: "soon",
    //       component: Soonplaying
    //     }
    //   ]
    // },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    // {
    //   path: "/nowplaying",
    //   name: "nowplaying",
    //   component: Nowplaying
    // },
    // {
    //   path: "/soonplaying",
    //   name: "soonplaying",
    //   component: Soonplaying
    // }
  ]
});
