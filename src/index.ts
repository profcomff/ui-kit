// Export custom components
export { default as VuToastList } from './components/toast/VuToastList.vue';
export { default as VuSearch } from './components/search/VuSearch.vue';

// Export theme and config
export { profcomffLight } from './theme';
export * from './vuetify-config';

// Custom plugin
import type { App } from 'vue';
import VuToastList from './components/toast/VuToastList.vue';
import VuSearch from './components/search/VuSearch.vue';

export const VuKitPlugin = {
	install(app: App) {
		// Register global components
		app.component('VuToastList', VuToastList);
		app.component('VuSearch', VuSearch);
	},
};
