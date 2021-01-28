[TOC]

### 简介

此项目是针对湖北省商务厅开发的大屏项目
UI 框架为 `React`, 使用`create-react-app`为基本脚手架进行搭建，主要进行大屏页面构建

### 项目准备

- npm install 安装依赖
- npm start 启动项目
- npm run build 打包

### 项目结构（src）

#### 基础结构

- assets 静态资源（图片）
- components 项目通用组件
- config 全局配置项
- constants 常量
- context React 上下文
- hooks 自定义 hooks
- locales 国际化文件
- pages 页面级组件
- routes 路由文件
- service 顶层 service
- utils 工具函数
- index.js 入口文件
- setupProxy.js 代理文件

#### 页面文件夹对应业务模块

- Cebc - 跨境电商
- CebcPort - 跨境电商检测-口岸
- CbecProvince - 跨境电商(省)
- ForeignTrade - 整体对外贸易
- Intro - 介绍
- MxGoods - 货物进出口

### 项目说明

#### 图表库

包括但不限于，首先考虑 G2 实现方式

- G2
- Bizcharts
- eCharts

#### 组件库

- **项目内部组件库**：在 src/components 下添加项目级可复用组件，最终统一汇入 components/index.js 中
- **外部组件库**：Antd

#### 工具库

- **项目本地工具库**
  在 src/utils 下添加项目工具函数，最终统一汇入 utils/index.js 中

> 已设置 axios 请求框架，封装在 utils/request.js 中，按需扩展配置。数据请求的 request 通过以下方式引入

```js
//引入
import { request } from "@/utils";
//使用
request({
  url: "/group/getGroupNode",
  method: "GET",
  //...options
});
```

- **外部工具库**
  lodash 按需引入

#### 页面过渡动画

- [一次 react-router + react-transition-group 实现转场动画的探索](https://juejin.cn/post/6844903818073899022#heading-6)
- [PAGE TRANSITIONS CSS 动画样式资源](https://tympanus.net/Development/PageTransitions/) -> [github](https://github.com/codrops/PageTransitions)

#### 国际化配置

在 locales/en-US 以及 locales/zh-CN 中编写语言配置文件，在 locales/en-US.js 或者 locales/zh-CN.js 引入并以对象形式导出，使用时通过 intl.get 方法使用

```js
import intl from "react-intl-universal";
const title = intl.get("module.title");
```

#### webpack 扩展

此项目已经将配置 eject，如需新增配置，最好是在 config/extraConfig 中将逻辑封装好，再引入到 webpack.config.js 或者 webpackDevServer.config.js

#### 文件引入方式

已配置 alias，引入文件建议使用 alias

```js
// @ -> src
import request from "@/utils/request";
```

#### 样式：使用 less 预处理、css 模块化

- 一般引入方式为

```js
import styles from "./index.module.less";
```

- 引入外部图片或者文件外样式建议使用 alias

```css
// css modules
@import "~@/style/global" // css
  background: url("~@/assets/xxx.jpg");
```

#### 开发环境请求代理

src/setupProxy.js 中进行扩展

```js
app.use(
  //...
  createProxyMiddleware("/apiPrefix", {
    target: "http://10.3.69.82:8089",
    changeOrigin: true,
  })
);
```

## `补充`

- [ ] 状态管理？
