import { createApp } from 'vue';
import App from '@/App.vue';
import { pinia } from '@/pinia';
import { vuetify } from './vuetify';
import '../style.css';
createApp(App).use(pinia).use(vuetify).mount('#app');
