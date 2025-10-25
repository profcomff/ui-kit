import { Meta, StoryObj } from '@storybook/vue3-vite';
import VuCheckbox from './VuCheckbox.vue'

const meta =  {
    title: "checkBox/VuCheckbox",
    component: VuCheckbox
}satisfies Meta<typeof VuCheckbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
