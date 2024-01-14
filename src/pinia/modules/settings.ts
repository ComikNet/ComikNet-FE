/*
 * @Date: 2024-01-10 12:03:28
 * @LastEditTime: 2024-01-14 11:58:47
 * @Description: 用来保存项目界面设置，包括但不限于
 */
import { defineStore } from 'pinia';

export const useSettingStore = defineStore('setting', {
  state: () => ({
    lang: 'zh-cn', // 语言
    sideModeColor: 'dark', // 侧边栏主题
    collapse: false, //侧边栏折叠
    breadcrumb: true, //面包屑
    defaultRouter: '', //默认路由
    activeTextColor: '', //点击文本颜色
    activeBackgroundColor: '' //点击文本背景色
  }),
  persist: true,
  getters: {},
  actions: {}
});
