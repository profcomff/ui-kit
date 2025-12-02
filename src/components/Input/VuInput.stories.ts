import { Meta, StoryObj } from '@storybook/vue3-vite';
import VuInput from './VuInput.vue';

const meta = {
	title: 'Viribus Unitis/VuInput',
	component: VuInput,
} satisfies Meta<typeof VuInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		message: 'Номер группы',    
	},
};
export const Hover: Story = {
	args: {
		message: 'Номер группы', 
         rules: [(value: string) => !!value || 'Обязательное поле']  
	},
};
export const Active: Story = {
	args: {
		message: 'Номер группы',
        placeholder:"Введите номер группы",
        autofocus: true
	},
};
