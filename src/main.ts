/*
 * @Author: nongchatea
 * @Date: 2024-01-09 15:31:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2024-01-14 14:54:22
 * @Description: ~
 */
import { createApp } from 'vue';

// vite基础样式
import './style.css';
import PrimeVue from 'primevue/config';
import App from './App.vue';
import { getConfigv2 } from '@/config/index';
import store from '@/pinia';
import i18n from '@/i18n';
import ToastService from 'primevue/toastservice';
import router from './router';
import '@/assets/styles.scss';
//环境输出
console.log('[appCode]' + getConfigv2('appCode'));
console.log('[projectName]' + getConfigv2('projectName'));
console.log('[VITE_APP_ENV]' + import.meta.env.VITE_APP_ENV);

const app = createApp(App);

// 挂载全局组件
// app.config.globalProperties.$toast = Toast;

app.use(router);
app.use(ToastService);
app.use(PrimeVue);
app.use(store);
app.use(i18n);

app.mount('#app');
