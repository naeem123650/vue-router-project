import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

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
    component: () =>
      import(
        /* webpackChunkName: "destinationdetails" */ "../views/DestinationDetails.vue"
      ),
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
