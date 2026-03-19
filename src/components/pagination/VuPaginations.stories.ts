import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VPagination } from 'vuetify/components';

const meta = {
	title: 'Viribus Unitis/Pagination',
	component: VPagination,
	tags: ['autodocs'],
	args: {
		length: 20,
		totalVisible: 5,
	},
} satisfies Meta<typeof VPagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
