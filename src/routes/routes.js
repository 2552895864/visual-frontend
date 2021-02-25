import ForeignTrade from "@/pages/ForeignTrade";
import MxGoods from "@/pages/MxGoods";
import Cbec from "@/pages/Cbec";
import CbecProvince from "@/pages/CbecProvince";
import CbecPort from "@/pages/CbecPort";
import Intro from "@/pages/Intro";
import Railway from "@/pages/Railway";
// import Security from "@/pages/Security";

const routes = [
  {
    path: "/",
    name: "湖北外资外贸全景",
    component: ForeignTrade,
  },
  {
    path: "/mxGoods",
    name: "进出口大数据监测",
    component: MxGoods,
  },
  {
    path: "/cbec",
    name: "跨境电商数据大盘",
    component: Cbec,
  },
  {
    path: "/cbecProvince",
    name: "跨境电商数据大盘-省",
    component: CbecProvince,
  },
  {
    path: "/cbecPort",
    name: "跨境电商数据大盘-口岸",
    component: CbecPort,
  },
  {
    path: "/intro",
    name: "湖北单一窗口",
    component: Intro,
  },
  {
    path: "/railway",
    name: "铁路运输智能监测",
    component: Railway,
  },
  // {
  //   path: "/security",
  //   name: "安全防护",
  //   component: Security,
  // }
];

export default routes;
