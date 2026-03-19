import '@mdi/font/css/materialdesignicons.css';
import { createVuetify } from 'vuetify';
import { VBtn } from 'vuetify/components';
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
		'on-background': '#727272',

		surface: 'rgb(255, 255, 255)',
		'on-surface': 'rgb(0, 0, 0, 0.87)',

		'surface-variant': 'rgb(245, 245, 245)',
		'on-surface-variant': 'rgba(0, 0, 0, 0.87)',
	},
	variables: {
		'border-color': '#000000',
		'border-opacity': 0.12,
		'high-emphasis-opacity': 1.0,
		'medium-emphasis-opacity': 0.6,
		'disabled-opacity': 0.38,
		'idle-opacity': 0.04,
		'hover-opacity': 0.04,
		'focus-opacity': 0.12,
		'selected-opacity': 0.08,
		'activated-opacity': 0.12,
		'pressed-opacity': 0.12,
		'dragged-opacity': 0.08,
		'theme-kbd': '#212529',
		'theme-on-kbd': '#FFFFFF',
		'theme-code': '#F5F5F5',
		'theme-on-code': '#000000',
	},
};

const VBtnDefaults = {
	density: 'compact',
	rounded: 'lg',
	class: 'text-caption font-weight-bold',
};

export const vuetify = createVuetify({
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
	aliases: {
		VuButtonPrimary: VBtn,
		VuButtonSecondary: VBtn,
		VuButtonTertiary: VBtn,
		VuButtonDanger: VBtn,
	},
	defaults: {
		VBtn: VBtnDefaults,
		VuButtonPrimary: {
			...VBtnDefaults,
			color: 'primary',
			variant: 'flat',
		},
		VuButtonSecondary: {
			...VBtnDefaults,
			color: 'primary',
			variant: 'tonal',
		},
		VuButtonTertiary: {
			...VBtnDefaults,
			color: 'text-base-black',
			variant: 'flat',
		},
		VuButtonDanger: {
			...VBtnDefaults,
			color: 'alert-1',
			variant: 'tonal',
		},
		VChip: {
			class: 'text-caption font-weight-regular',
			variant: 'flat',
			density: 'comfortable',
		},
		VChipGroup: {
			VChip: {
				class: 'text-caption font-weight-regular',
				variant: 'flat',
				density: 'comfortable',
				color: 'primary',
			},
		},
		VCheckbox: {
			color: 'primary',
			density: 'compact',
			ripple: false,
			hideDetails: 'auto',
		},
		VPagination: {
			activeColor: 'primary',
			variant: 'elevated',
			density: 'comfortable',
			showFirstLastPage: true,
		},
		VTabs: {
			bgColor: 'primary',
			color: 'base-white',
			mandatory: true,
			grow: true,
		},
		VBtnToggle: {
			rounded: 'sm',
			color: 'primary',
			elevation: 1,
			VBtn: {
				rounded: 'sm',
				class: 'font-weight-medium text-caption',
			},
		},
	},
	theme: {
		defaultTheme: 'profcomffLight',
		themes: {
			profcomffLight,
		},
	},
});
