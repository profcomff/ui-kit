import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VuButton from './VuButtonStoryWrapper.vue';

const meta = {
	title: 'Viribus Unitis/Button',
	component: VuButton,
	tags: ['autodocs'],
} satisfies Meta<typeof VuButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: 'ВОЙТИ',
	},
	parameters: {
		pseudo: {
			active: true,
		},
	},
};

export const WithIcon: Story = {
	args: {
		text: 'ВОЙТИ',
		prependIcon: 'mdi-plus',
	},
};

export const OnlyIcon: Story = {
	args: {
		icon: 'mdi-plus',
	},
};

export const Disabled: Story = {
	args: {
		text: 'ВОЙТИ',
		prependIcon: 'mdi-plus',
		disabled: true,
	},
};
