import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import Author from "../views/Author";
import AuthorKraft from "../views/AuthorKraft";
import AuthorLamanov from "../views/AuthorLamanov";
import AuthorGolopolosov from "../views/AuthorGolopolosov";
import AuthorOdintri from "../views/AuthorOdintri";
import AuthorTkach from "../views/AuthorTkach";
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
    path: "/u.kraft/",
    name: "authorKraft",
    props: true,
    component: AuthorKraft,
  },
  {
    path: "/odintri/",
    name: "authorOdintri",
    props: true,
    component: AuthorOdintri,
  },
  {
    path: "/tkach/",
    name: "authorTkach",
    props: true,
    component: AuthorTkach,
  },

  {
    path: "/golopolosov/",
    name: "authorGolopolosov",
    props: true,
    component: AuthorGolopolosov,
  },
  {
    path: "/lamanov/",
    name: "authorLamanov",
    props: true,
    component: AuthorLamanov,
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
