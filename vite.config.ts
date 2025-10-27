/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import stylelint from 'vite-plugin-stylelint';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { fileURLToPath } from 'url';

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		vue({
			template: {
				transformAssetUrls,
			},
		}),
		vuetify({
			autoImport: true,
			styles: {
				configFile: './src/assets/settings.scss',
			},
		}),
		svgLoader({
			svgoConfig: {
				floatPrecision: 2,
				multipass: true,
			},
		}),
		stylelint({
			files: ['src/**/*.{vue,css}'],
		}),
	],
	css: {
		postcss: {
			plugins: [
				postcssPresetEnv({
					features: {
						'nesting-rules': true,
					},
				}),
			],
		},
	},
	resolve: {
		alias: [
			{
				find: '@',
				replacement: fileURLToPath(new URL('./src', import.meta.url)),
			},
		],
	},
});
