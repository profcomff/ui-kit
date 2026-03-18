import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VuButton from './VuButton.vue';

const meta = {
	title: 'Viribus Unitis/Button',
	component: VuButton,
	tags: ['autodocs'],
	args: {
		role: 'primary',
		onClick: fn(),
	},
	argTypes: {
		role: {
			control: 'select',
		},
	},
} satisfies Meta<typeof VuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: 'ВОЙТИ',
	},
	parameters: {
		pseudo: {
			active: true,
		},
	},
};

export const WithIcon: Story = {
	args: {
		text: 'ВОЙТИ',
		'prepend-icon': 'mdi-plus',
	},
};

export const OnlyIcon: Story = {
	args: {
		'icon': 'mdi-plus',
	},
};
