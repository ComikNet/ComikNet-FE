/*
 * @Author: nongchatea
 * @Date: 2024-01-10 10:59:47
 * @LastEditors: nongchatea
 * @LastEditTime: 2024-01-10 17:30:58
 * @Description: ~
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
// http.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 获取环境变量
const ENV = import.meta.env;

// 定义接口，用于请求参数的类型
interface HttpRequestParams {
  // 可根据实际需求添加其他参数
  [key: string]: any;
}

// 定义 Axios 封装类
class Http {
  private instance: AxiosInstance;

  constructor() {
    // 创建 Axios 实例
    this.instance = axios.create({
      // 添加一些默认配置，例如 baseURL、timeout 等
      // (e.g. /api)
      baseURL: ENV.VITE_SERVER_PREFIX_API,
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      },
      timeout: 10000
    });

    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // 可在请求发送前进行一些处理，例如添加 token 等
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response) => {
        // toast.add({
        //   severity: 'success',
        //   summary: 'Success Message',
        //   detail: 'Message Content',
        //   life: 3000
        // });
        // 可在接收到响应后进行一些处理，例如处理错误信息等
        return response;
      },
      (error) => {
        // toast.add({
        //   severity: 'error',
        //   summary: 'Error Message',
        //   detail: 'Message Content',
        //   life: 3000
        // });
        return Promise.reject(error);
      }
    );
  }

  // 封装请求方法
  public request<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T, any>> {
    return this.instance.request<T>(config);
  }

  // 封装 get 方法
  public get<T>(url: string, params?: HttpRequestParams): Promise<AxiosResponse<T, any>> {
    return this.instance.get<T>(url, { params });
  }

  // 封装 post 方法
  public post<T>(url: string, data?: HttpRequestParams): Promise<AxiosResponse<T, any>> {
    return this.instance.post<T>(url, data);
  }

  // 封装其他请求方法，例如 put、delete 等...

  // 可根据实际需求添加其他公共方法...
}

// 创建一个实例并导出
const http = new Http();
export default http;
