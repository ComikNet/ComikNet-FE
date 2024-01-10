import { createApp } from 'vue';
// 启动tailwind
import './style.css';
// vite基础样式
import './index.css';
// primevue主题样式
import 'primevue/resources/themes/lara-light-green/theme.css';
// element plus样式
import 'element-plus/dist/index.css';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import App from './App.vue';
import { getConfigv2 } from '@/config/index';
//环境输出
console.log('[appCode]' + getConfigv2('appCode'));
console.log('[projectName]' + getConfigv2('projectName'));
console.log('[VITE_APP_ENV]' + import.meta.env.VITE_APP_ENV);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(PrimeVue, { ripple: true });
app.mount('#app');
