import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VuSearch from './VuSearch.vue';

const meta = {
	title: 'Viribus Unitis/Search',
	component: VuSearch,
	tags: ['autodocs'],
	args: {
		modelValue: '',
	},
} satisfies Meta<typeof VuSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: args => ({
		components: { VuSearch },
		setup() {
			return { args, onClickFilter: fn() };
		},
		template: `<VuSearch v-bind="args" @click-filter="onClickFilter" />`,
	}),
};

export const WithText: Story = {
	...Default,
	args: { modelValue: 'Преподаватель' },
};
