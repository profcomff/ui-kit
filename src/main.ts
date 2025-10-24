import { createApp } from 'vue';
import App from '@/App.vue';
import { pinia } from '@/pinia';
import { vuetify } from './vuetify';

createApp(App).use(pinia).use(vuetify).mount('#app');
