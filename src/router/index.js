import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Author from "../views/Author.vue";
import CollectionAutor from "../views/CollectionAutor";
import WhitePaper from "../views/WhitePaper";
import Auction from "../views/Auction";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/collection/:collectionId",
    name: "collectionAutor",
    component: CollectionAutor,
  },
  {
    path: "/author/:authorId",
    name: "author",
    component: Author,
  },
  {
    path: "/white-paper/",
    name: "WhitePaper",
    component: WhitePaper,
  },
  {
    path: "/auction/:auctionId",
    name: "auction",
    component: Auction,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
