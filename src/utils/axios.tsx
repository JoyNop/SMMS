import axios from "axios";
import { buildConfig } from "../config";
import { message } from "antd";

//请求路径
//测试路径(本地)

axios.defaults.baseURL = buildConfig.baseUrl;

if (process.env.NODE_ENV === "development") {
  console.warn("API环境:" + axios.defaults.baseURL);
}

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 加载
    return config;
  },
  error => {
    message.error(error.toString());
    return Promise.reject(error);
  }
);

// 响应拦截
axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    // 错误提醒
    try {
      message.error(error.toString());
      return Promise.reject(error);
    } catch (error) {
      // console.log(error)
      message.error(error.toString());
    }
  }
);

export default axios;
