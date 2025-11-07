import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VuSearch from './VuSearch.vue';

const meta = {
	title: 'Viribus Unitis/Search',
	component: VuSearch,
	tags: ['autodocs'],
	args: {
		onClick: fn(),
		'onUpdate:modelValue': fn(),
	},
	argTypes: {
		modelValue: {
			control: 'text',
			description: 'Значение v-model'
		},
	},
} satisfies Meta<typeof VuSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Обычное состояние (Normal)
export const Default: Story = {
	args: {
		modelValue: '',
	},
};

// Состояние с текстом
export const WithValue: Story = {
	args: {
		modelValue: 'Поисковый запрос',
	},
};

export const Hovered: Story = {
	parameters: {
		pseudo: {
			hover: true,
		},
	},
};

export const Active: Story = {
	args: {
		modelValue: 'Печатаем...',
	},
	parameters: {
		pseudo: {
			focus: true,
		},
	},
};