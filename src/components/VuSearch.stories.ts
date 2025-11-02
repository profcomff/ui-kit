import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import { onMounted, nextTick } from 'vue';
import VuSearch from './VuSearch.vue';

const meta = {
	title: 'Viribus Unitis/Search',
	component: VuSearch,
	tags: ['autodocs'],
	args: {
		modelValue: '',
		onClick: fn(), // как в VuButton
		'onUpdate:modelValue': fn(),
	},
	argTypes: {
		modelValue: {
			control: 'text',
			description: 'Значение v-model',
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

// Состояние наведения (Hover)
export const Hovered: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		pseudo: {
			hover: true,
			selector: '.vu-search'
		},
	},
};

// Активное состояние (Active / Focus)
export const Active: Story = {
	render: args => ({
		components: { VuSearch },
		setup() {
			const onClick = fn();

			onMounted(async () => {
				await nextTick();
				const input = document.querySelector('.v-input input') as HTMLInputElement | null;
				if (input) input.focus();
			});

			return { args, onClick };
		},
		template: `<VuSearch v-bind="args" @click="onClick" />`,
	}),
	args: { modelValue: 'Печатаем...' },
};