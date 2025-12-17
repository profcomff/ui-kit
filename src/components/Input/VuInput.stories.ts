import { Meta, StoryObj } from '@storybook/vue3-vite';
import VuInput from './VuInput.vue';

const meta = {
  title: 'Viribus Unitis/VuInput',
  component: VuInput,
  tags: ['autodocs'],
  args: {
    message: 'Номер группы',
    variant: 'outlined',
  },
} satisfies Meta<typeof VuInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithPlaceholder: Story = {
  args: {
    placeholder: "Введите номер группы",
    autofocus: true
  },
};

export const Validate: Story = {
  args: {
    rules: [(value: string) => !!value || 'Обязательное поле']
  },
};