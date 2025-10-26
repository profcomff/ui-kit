import { Meta, StoryObj } from '@storybook/vue3-vite';
import VuCheckbox from './VuCheckbox.vue';

const meta = {
	title: 'checkBox/VuCheckbox',
	component: VuCheckbox,
} satisfies Meta<typeof VuCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		disabled: false,
		modelValue: false,
	},
};
export const Active: Story = {
	args: {
		disabled: false,
		modelValue: true,
	},
};
export const Disabled: Story = {
	args: {
		disabled: true,
		modelValue: false,
	},
};
