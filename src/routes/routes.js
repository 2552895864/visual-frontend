import PageOne from "@/pages/page1";
import PageTwo from "@/pages/page2";

const routes = [
  {
    path: "/",   
    name: "主页",
    component: PageOne,
  },
  {
    path: "/page2",
    name: "页面2",
    component: PageTwo,
  },
];

export default routes;
