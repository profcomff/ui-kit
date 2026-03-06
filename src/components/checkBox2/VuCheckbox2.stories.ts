import { Meta, StoryObj } from '@storybook/vue3-vite';
import { VCheckbox } from 'vuetify/components';

const meta = {
	title: 'Viribus Unitis/VuCheckbox 2',
	component: VCheckbox,
} satisfies Meta<typeof VCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		disabled: false,
		modelValue: false,
		label: 'Оценок нет',
	},
};
export const Active: Story = {
	args: {
		disabled: false,
		modelValue: true,
		label: 'Оценок нет',
	},
};
export const Disabled: Story = {
	args: {
		disabled: true,
		modelValue: true,
		label: 'Оценок нет',
	},
};
