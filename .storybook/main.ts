import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
	stories: ['../src/components/**/*.stories.ts'],
	addons: [
		'@chromatic-com/storybook',
		'@storybook/addon-docs',
		'@storybook/addon-a11y',
		'@storybook/addon-vitest',
		'storybook-addon-pseudo-states',
	],
	framework: {
		name: '@storybook/vue3-vite',
		options: {},
	},
	staticDirs: ['../src/assets/'],
};
export default config;
