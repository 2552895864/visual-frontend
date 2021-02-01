import axios from "axios";
import { message, notification } from "antd";

const codeHandlers = {
  // 200: '服务器成功返回请求的数据。',
  200: "服务器返回请求的数据。",
  201: "新建或修改数据成功。",
  202: "一个请求已经进入后台排队（异步任务）。",
  204: "删除数据成功。",
  400: async (response) => {
    const data = await response.data;
    const { message: msg = "系统错误" } = data;
    message.error(msg || "系统错误");
  },
  // 401: '用户没有权限（令牌、用户名、密码错误）。',
  401: () => {},
  403: "没有权限进行此操作。",
  404: "发出的请求针对的是不存在的记录，服务器没有进行操作。",
  406: "请求的格式不可得。",
  410: "请求的资源被永久删除，且不会再得到的。",
  422: "当创建一个对象时，发生一个验证错误。",
  500: async (response) => {
    const data = await response.data;
    const { message: msg = "系统错误" } = data;
    message.error(msg || "系统错误");
  },
  502: "网关错误。",
  503: "服务不可用，服务器暂时过载或维护。",
  504: "网关超时。",
};

class Request {
  constructor() {
    this.request = axios.create({
      // baseURL: process.env.BASE_API, // api 的 base_url
      timeout: 50000, // 请求超时时间
    });
    this.interceptorsRequest();
    this.interceptorsResponse();
  }

  // request拦截器
  interceptorsRequest() {
    this.request.interceptors.request.use(
      (config) => {
        // 设置请求头 token等
        return config;
      },
      (error) => {
        // Do something with request error
        Promise.reject(error);
      }
    );
  }

  // request拦截器
  interceptorsResponse() {
    this.request.interceptors.response.use(
      (response) => {
        // 设置统一响应错误信息
        return response.data;
      },
      (error) => {
        this.errorHandler(error.response);
        return Promise.reject(error);
      }
    );
  }

  errorHandler(response) {
    if (response && response.status) {
      this.responseHandler(response);
    } else if (!response) {
      notification.error({
        description: "您的网络发生异常，无法连接服务器",
        message: "网络异常",
      });
    }
    return response;
  }
  responseHandler(response) {
    const codeHandler = codeHandlers[response.status];
    const type = typeof codeHandler;
    if (type === "string") {
      const errorText = codeHandler || response.statusText;
      const { status, url } = response;
      message.error(errorText);
      console.error(` ${status}: ${url} ${errorText}`);
    } else if (type === "function") {
      codeHandler(response);
    }
  }
}

export default new Request().request;
