/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Description: 全局config配置文件
 * @Date: 2022-09-17 14:35:02
 * @LastEditTime: 2024-01-10 13:50:04
 */

// 获取环境变量
const ENV = import.meta.env;

// 配置文件
let config = {};
// 默认配置文件
const configSource = {
  appCode: ENV.VITE_APP_CODE,
  // 项目标识代码
  projectCode: `${ENV.VITE_APP_CODE}_${ENV.VITE_APP_ENV}`,
  // 项目名
  projectName: ENV.VITE_APP_NAME,
  // 项目描述
  projectDesc: ENV.VITE_APP_DESCRIPTION,
  // 资源base地址
  base: ENV.VITE_BASE,
  // 接口代理URL路径(e.g. /api)
  baseUrl: ENV.VITE_SERVER_PREFIX_API,
  // 模拟数据接口(e.g. /mock-api)
  mockBaseUrl: ENV.VITE_BASE_MOCK_URL,
  // 服务端路径(host:port)
  serverUrl: ENV.VITE_SERVER_API_URL,
  // GitHub地址
  github: '',
  // 备案号
  icp: '',
  // 配置
  me: {
    name: 'JM',
    // 公众号
    gzhName: '',
    gzhUrl: '',
    // github
    github: ''
  }
};

/**
 * @Author isboyjc
 * @Date 2022-09-17 14:35:02
 * @description 设置全局配置
 * @param {Object} cfg 配置项
 * @return {Object} 新的全局配置 config
 */
const setConfig = (cfg: object): object => {
  config = Object.assign(config, cfg);
  return config;
};

/**
 * @Author isboyjc
 * @Date 2022-09-17 14:35:02
 * @description 重置全局配置
 * @param {*}
 * @return {Object} 全局默认配置 configSource
 */
const resetConfig = (): object => {
  config = { ...configSource };
  return config;
};
resetConfig();

/**
 * @description 获取全局配置
 * @param {string | string[]} key 配置项，支持 'a.b.c' 的方式获取
 * @return {any} 新的全局配置 config
 */
const getConfigv2 = (key: string | string[]): any => {
  if (typeof key === 'string') {
    const arr = key.split('.');
    if (arr && arr.length) {
      let data: any = config;
      arr.forEach((v) => {
        if (data && typeof data[v] !== 'undefined') {
          data = data[v];
        } else {
          data = null;
        }
      });
      return data;
    }
  }
  if (Array.isArray(key)) {
    const data: any = config;
    if (key && key.length > 1) {
      const res: any = {};
      key.forEach((v) => {
        if (data && typeof data[v] !== 'undefined') {
          res[v] = data[v];
        } else {
          res[v] = null;
        }
      });
      return res;
    }
    return data[key[0]];
  }
  return { ...config };
};

export { getConfigv2, setConfig, resetConfig };
