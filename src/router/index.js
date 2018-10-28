import Vue from "vue";
import Router from "vue-router";
import City from "@/components/Page/City";
import Home from "@/components/Page/Home";
import Film from "@/components/Page/Film";
import Soonplaying from "@/components/Page/Soonplaying";
import Nowplaying from "@/components/Page/Nowplaying";
import Login from "@/components/Page/Login";

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
      path: "/home/:city?",
      name: "home",
      component: Home
    },
    {
      path: "/city",
      name: "city",
      component: City
    },
    {
      path: "/film",
      // name: "film",
      redirect: {
        name: "now"
      },
      component: Film,
      children: [
        {
          path: "nowplaying",
          name: "now",
          component: Nowplaying
        },
        {
          path: "soonplaying",
          name: "soon",
          component: Soonplaying
        }
      ]
    },
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
