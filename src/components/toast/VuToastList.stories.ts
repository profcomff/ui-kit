import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VuToastList from './VuToastList.vue';

const meta = {
	title: 'Viribus Unitis/Toast/Toast List',
	component: VuToastList,
	tags: ['autodocs'],
	args: {
		toastList: [
			{ id: 1, title: 'Тост 1', description: 'Описание 1', type: 'success' },
			{ id: 2, title: 'Тост 2', description: 'Описание 2', type: 'error' },
		],
	},
} satisfies Meta<typeof VuToastList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
