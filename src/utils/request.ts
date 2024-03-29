import axios from 'axios';
import { message } from 'ant-design-vue';

// create an axios instance
const service = axios.create({
  baseURL: import.meta.env.BASE_URL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    config.headers = { token: 123 };
    return config;
  },
  error => {
    // do something with request error
    message.error(error);
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data;
    return res;
    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {

    //   // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // to re-login

    //   }
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
  },
  error => {
    return Promise.reject(error);
  }
);

export default service;
