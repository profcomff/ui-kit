import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VTextField } from 'vuetify/components';

const meta = {
	title: 'Viribus Unitis/Input',
	component: VTextField,
	tags: ['autodocs'],
	args: {
		label: 'Номер группы',
		placeholder: '218',
	},
} satisfies Meta<typeof VTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
