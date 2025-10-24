import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

const profcomffLight = {
	dark: false,
	colors: {
		'brand-blue-1': '#00004B',
		'brand-blue-2': '#1F2062',
		'brand-blue-3-text': '#696991',
		'brand-orange-4-notif': '#FE8804',
		'base-white': '#FFFFFF',
		'base-black': '#000000',
		'gray-1-bg': '#F1F1F1',
		'gray-2-bg': '#DBDBDB',
		'gray-3-bg': '#C6C6C6',
		'gray-4-text-border': '#949494',
		'gray-5-text-border': '#727272',
		'alert-1': '#F44236',
		'alert-2': '#FDE8E5',

		primary: 'rgb(0, 1, 76)',
		'on-primary': 'rgb(255, 255, 255)',

		secondary: 'rgb(255, 139, 0)',
		'on-secondary': 'rgb(255, 255, 255)',

		background: 'rgb(255, 255, 255)',
		'on-background': 'rgb(0, 0, 0)',

		surface: 'rgb(255, 255, 255)',
		'on-surface': 'rgb(0, 0, 0, 0.87)',

		'surface-variant': 'rgb(245, 245, 245)',
		'on-surface-variant': 'rgba(0, 0, 0, 0.87)',
	},
};

export const vuetify = createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
	defaults: {
		VBtnToggle: {
			color: 'rgb(0, 1, 76)',
			elevation: 1,
		},
		VCheckbox: {
			color: 'rgb(0, 1, 76)',
		},
	},
	theme: {
		defaultTheme: 'profcomffLight',
		themes: {
			profcomffLight,
		},
	},
});
