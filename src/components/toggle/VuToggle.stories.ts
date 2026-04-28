import type { Meta, StoryObj } from '@storybook/vue3-vite';
import VuToggleStoryWrapper from './VuToggleStoryWrapper.vue';

const meta = {
	title: 'Viribus Unitis/Toggle aka Segmented Radio',
	component: VuToggleStoryWrapper,
	tags: ['autodocs'],
	args: {},
} satisfies Meta<typeof VuToggleStoryWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
