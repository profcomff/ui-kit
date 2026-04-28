/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';
import svgLoader from 'vite-svg-loader';
import vue from '@vitejs/plugin-vue';
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';
import { fileURLToPath } from 'url';
import ViteFonts from 'unplugin-fonts/vite';
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import dts from 'vite-plugin-dts';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

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
		ViteFonts({
			fontsource: {
				families: [
					{
						name: 'Roboto',
						weights: [100, 300, 400, 500, 700, 900],
						styles: ['normal', 'italic'],
					},
				],
			},
		}),
		dts({
			include: ['src/**/*.ts', 'src/**/*.vue'],
			outDir: 'dist',
			insertTypesEntry: true,
			staticImport: true,
			rollupTypes: true,
			tsconfigPath: './tsconfig.json',
		}),
		viteStaticCopy({
			targets: [
				{
					src: 'src/assets/settings.scss',
					dest: 'assets',
				},
				{
					src: 'src/assets/styles.css',
					dest: 'assets',
				},
			],
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
	build: {
		copyPublicDir: false,
		lib: {
			entry: path.resolve(dirname, 'src/index.ts'),
			name: 'ViribusUiKit',
			formats: ['es', 'umd'],
			fileName: format => `ui-kit.${format}.js`,
		},
		emptyOutDir: true,
		rollupOptions: {
			external: ['vue'],
			output: {
				assetFileNames: 'ui-kit.css',
				exports: 'named',
				globals: {
					vue: 'Vue',
					vuetify: 'Vuetify',
				},
			},
		},
	},
});
