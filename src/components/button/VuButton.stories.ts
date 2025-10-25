import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VuButton from './VuButton.vue';

const meta = {
	title: 'Viribus Unitis/Button',
	component: VuButton,
	tags: ['autodocs'],
	args: {
		text: 'Привет',
	},
} satisfies Meta<typeof VuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
