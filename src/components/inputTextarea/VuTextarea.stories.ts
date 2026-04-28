import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { VTextarea } from 'vuetify/components';

const meta = {
	title: 'Viribus Unitis/Textarea',
	component: VTextarea,
	tags: ['autodocs'],
	args: {
		placeholder: 'Ваше мнение о преподавателе (необязательно)',
	},
} satisfies Meta<typeof VTextarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
