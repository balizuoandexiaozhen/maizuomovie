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
import Detail from "@/components/Page/Detail"
import Mine from "@/components/Page/Mine"
import Card from "@/components/Page/Card"
import Carddefault from "@/components/Page/Carddefault"
import Cardelectronic from "@/components/Page/Cardelectronic"


Vue.use(Router);

var router = new Router({
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
    {
      path: "/detail/:id",
      name: "detail",
      component: Detail
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },

    {
      path: "/mine",
      name: "mine",
      component: Mine,
      meta: {
        islogin: true
      }
    },
    {
    	path:"/card",
    	name:"card",
    	component:Card,
      redirect:{name:'default'},
       children: [
        {
          path: "default",
          name: "default",
          component: Carddefault
        },
        {
          path: "electronic",
          name: "electronic",
          component: Cardelectronic
        }
      ]
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

router.beforeEach((to,from,next) => {
  console.log(to.meta)
  if(to.meta && to.meta.islogin) {
    if(sessionStorage.getItem("user")) {
      next();
      console.log("登陆了")
    } else {
      router.push({name:"login"})
    }
  } else {
    next();
    console.log("meiyou")
  }
})

export default router;