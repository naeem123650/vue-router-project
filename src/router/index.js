import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import store from "../../store.js";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "destinationdetails" */ "../views/DestinationDetails.vue"
      ),
    children: [
      {
        path: ":experienceslug",
        name: "ExperienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "../views/ExperienceDetails.vue"
          ),
      }
    ],
    beforeEnter: (to, from, next) => {
      const exist = store.destinations.find(
        (destination) => destination.slug === to.params.slug
      );

      if (exist) {
        next();
      } else {
        next({ name: "NotFound" })
      }
    }
  },
  {
    path: "/404",
    alias: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound.vue"),
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
