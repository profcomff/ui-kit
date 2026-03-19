import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VuTabsStoryWrapper from './VuTabsStoryWrapper.vue';

const meta = {
	title: 'Viribus Unitis/Tabs',
	component: VuTabsStoryWrapper,
	tags: ['autodocs'],
	args: {},
} satisfies Meta<typeof VuTabsStoryWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
