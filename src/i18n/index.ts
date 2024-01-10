/*
 * @Author: nongchatea
 * @Date: 2024-01-10 14:07:23
 * @LastEditors: nongchatea
 * @LastEditTime: 2024-01-10 15:34:27
 * @Description: ~
 */
import { createI18n } from 'vue-i18n';

import enLocale from './en.json';
import zhLocale from './zh.json';

const messages = {
  en: {
    ...enLocale
  },
  'zh-cn': {
    ...zhLocale
  }
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  globalInjection: true,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn', //首选语言缺少翻译时要使用的语言
  silentFallbackWarn: true, //fallbackLocale缺少翻译时 避免控制台告警
  messages
});

export default i18n;
