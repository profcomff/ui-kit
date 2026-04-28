import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VuTagGroupStoryWrapper from './VuTagGroupStoryWrapper.vue';

const meta = {
	title: 'Viribus Unitis/Tag/Group',
	component: VuTagGroupStoryWrapper,
	tags: ['autodocs'],
	args: {},
} satisfies Meta<typeof VuTagGroupStoryWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
