import { vuetify } from '@/vuetify';
import { type Preview, setup } from '@storybook/vue3-vite';
import { withVuetifyTheme } from './withVuetifyTheme.decorator';

setup(app => app.use(vuetify));

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},

		a11y: {
			// 'todo' - show a11y violations in the test UI only
			// 'error' - fail CI on a11y violations
			// 'off' - skip a11y checks entirely
			test: 'todo',
		},
	},
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		description: 'Global theme for components',
		toolbar: {
			icon: 'paintbrush',
			// Array of plain string values or MenuItem shape
			items: [
				{ value: 'light', title: 'Light', left: '🌞' },
				{ value: 'dark', title: 'Dark', left: '🌛' },
			],
			// Change title based on selected value
			dynamicTitle: true,
		},
	},
};

export const decorators = [withVuetifyTheme];

export default preview;
