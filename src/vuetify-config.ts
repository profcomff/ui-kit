import { aliases, mdi } from 'vuetify/iconsets/mdi';
import { profcomffLight } from './theme';
import { VBtn } from 'vuetify/components';

const VBtnDefaults = {
	density: 'compact',
	rounded: 'lg',
	class: 'text-caption font-weight-bold',
};

export const VuAliases = {
	VuButtonPrimary: VBtn,
	VuButtonSecondary: VBtn,
	VuButtonTertiary: VBtn,
	VuButtonDanger: VBtn,
};

export const VuDefaults = {
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
};

export const VuConfig = {
	icons: {
		defaultSet: 'mdi',
		aliases,
		sets: {
			mdi,
		},
	},
	aliases: VuAliases,
	defaults: VuDefaults,
	theme: {
		defaultTheme: 'profcomffLight',
		themes: {
			profcomffLight,
		},
	},
};
