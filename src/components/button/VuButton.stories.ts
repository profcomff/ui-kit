import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VuButton from './VuButton.vue';

const meta = {
	title: 'Viribus Unitis/Button',
	component: VuButton,
	tags: ['autodocs'],
	args: {
		text: 'Привет',
		onClick: fn(),
	},
} satisfies Meta<typeof VuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	parameters: {
		pseudo: {
			active: true,
		},
	},
};
