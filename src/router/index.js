import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ReferView from "../views/ReferView.vue";
import YoutubeView from "../views/YoutubeView.vue";
import MovieView from "../views/MovieView.vue";
import ContentsView from "../views/ContentsView.vue";
import PortfolioView from "../views/PortfolioView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/refer",
    name: "refer",
    component: ReferView,
  },
  {
    path: "/youtube",
    name: "youtube",
    component: YoutubeView,
  },
  {
    path: "/movie",
    name: "movie",
    component: MovieView,
  },
  {
    path: "/contents",
    name: "contents",
    component: ContentsView,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: PortfolioView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
