## 商务厅大屏

此项目的 UI 框架为 `React`, 使用`create-react-app`为基本脚手架进行搭建，主要进行大屏页面构建

### 项目准备

- npm install 安装依赖
- npm start 启动项目
- npm run build 打包

### 项目结构（src）

- assets 静态资源（图片）
- components 项目通用组件
- config 全局配置项
- constants 常量
- hooks 自定义 hooks
- pages 页面级组件
- routes 路由文件
- service 顶层 service
- utils 工具函数
- index.js 入口文件
- setupProxy.js 代理文件

### 项目说明

#### 图表组件库

包括但不限于，首先考虑 G2 实现方式

- G2
- Bizcharts
- eCharts

#### 项目内部组件库

在 src/components 下添加项目级可复用组件，最终统一汇入 components/index.js 中

#### webpack 扩展：

此项目已经将配置 eject，如需新增配置，最好是在 config/extraConfig 中将逻辑封装好，再引入到 webpack.config.js 或者 webpackDevServer.config.js

#### 文件引入方式

已配置 alias，引入文件建议使用 alias

```js
// @ -> src
import request from "@/utils/request";
```

#### utils 工具库

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

#### UI 组件库

Antd 

#### 工具库

lodash ，按需引入

## `补充`

- [ ] 状态管理？
