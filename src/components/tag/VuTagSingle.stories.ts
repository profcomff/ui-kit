import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VChip } from 'vuetify/components';

const meta = {
	title: 'Viribus Unitis/Tag/Single',
	component: VChip,
	tags: ['autodocs'],
	args: {
		text: 'Страйк',
		color: 'alert-1',
	},
} satisfies Meta<typeof VChip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
