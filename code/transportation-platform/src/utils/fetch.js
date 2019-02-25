import axios from 'axios';
import Global from "./global.js";

// 创建axios实例
const service = axios.create({
  baseURL: "", // api的base_url
  timeout: 45000, // 请求超时时间
});

// request拦截器
service.interceptors.request.use(config => {
  // 请求前做些什么：比如在头部增加认证 config.headers['Authorization']
  config.headers['authorization'] = window.$vue.$store.state.login.loginUserInfo.authorization;
  config.headers['Content-Type'] = 'application/json' //'application/x-www-form-urlencoded'; //'application/json';
  Global.showFullScreenLoading();
  return config;
}, error => {
  // Do something with request error
  console.log(error); // for debug
  Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use(
  response => {
    Global.tryHideFullScreenLoading();
    /**
     * 针对xmlhttprequest的状态码、以及返回的错误码进行处理显示
     */
    if (response.status !== 200 || response.data.error) {
      // console.log(response.data.error.message); // for debug
      // this.$message({
      //   message:response.data.error.message,
      //   showClose: true
      // })
    } else {
      return response.data;
    }
  },
  error => {
    Global.tryHideFullScreenLoading();
    console.log(error); // for debug
    return Promise.reject(error);
  },
);

export default service;
