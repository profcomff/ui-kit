import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VCombobox } from 'vuetify/components';

const meta = {
	title: 'Viribus Unitis/Combobox',
	component: VCombobox,
	tags: ['autodocs'],
	args: {
		items: ['Физика', 'Математика', 'Английский язык'],
	},
} satisfies Meta<typeof VCombobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
