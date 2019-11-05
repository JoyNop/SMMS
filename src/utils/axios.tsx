import axios from "axios";
import { message } from "antd";
// import { axiosConfig } from "../config";
// // axios.defaults.baseURL = axiosConfig.baseURL;
// // axios.defaults.headers = axiosConfig.headers;
// // axios.defaults.withCredentials = axiosConfig.withCredentials
if (process.env.NODE_ENV === "development") {
  console.warn("API环境:" + axios.defaults.baseURL);
}
console.log(axios.defaults);
// 请求拦截
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
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
      console.log(error);

      message.error(error.toString());
      return Promise.reject(error);
    } catch (error) {
      console.log(error);
      message.error(error.toString());
    }
  }
);

export default axios;
