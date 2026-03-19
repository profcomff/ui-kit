import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VuToast from './VuToast.vue';

const meta = {
	title: 'Viribus Unitis/Toast/Toast',
	component: VuToast,
	tags: ['autodocs'],
	args: {
		title: 'Что-то пошло не так',
		description: 'Обратитесь в поддержку',
		type: 'success',
	},
	argTypes: {
		type: {
			control: 'select',
			options: ['success', 'error', 'info'],
		},
	},
} satisfies Meta<typeof VuToast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
