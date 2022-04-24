import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import '@/utils/permission';
import router from './router/router';
import 'ant-design-vue/dist/antd.css';
import store from './store';
import '../mock/index';

createApp(App).use(Antd).use(store).use(router).mount('#app');
