import { createApp } from 'vue';
import App from '@/App.vue';
import { vuetify } from './vuetify';
import './assets/styles.css';

createApp(App).use(vuetify).mount('#app');
