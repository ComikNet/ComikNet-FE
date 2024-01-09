import { createApp } from 'vue';
import './style.css';
import './index.css';
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
app.mount('#app');
