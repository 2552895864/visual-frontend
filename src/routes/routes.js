import ForeignTrade from "@/pages/ForeignTrade";
import MxGoods from "@/pages/MxGoods";
import Cbec from "@/pages/Cbec";
import CbecProvince from "@/pages/CbecProvince";
import CbecPort from "@/pages/CbecPort";
import Intro from "@/pages/Intro";
import Storybook from "@/pages/Storybook";

const routes = [
  {
    path: "/",   
    name: "整体对外贸易",
    component: ForeignTrade,
  },
  {
    path: "/mxGoods",
    name: "货物进出口",
    component: MxGoods,
  },
  {
    path: "/cbec",   
    name: "跨境电商",
    component: Cbec,
  },
  {
    path: "/cbecProvince",
    name: "跨境电商(省)",
    component: CbecProvince,
  },
  {
    path: "/cbecPort",   
    name: "跨境电商检测-口岸",
    component: CbecPort,
  },
  {
    path: "/intro",
    name: "介绍",
    component: Intro,
  },{
    path: "/storybook",
    name: "组件测试",
    component: Storybook,
  },
];

export default routes;
