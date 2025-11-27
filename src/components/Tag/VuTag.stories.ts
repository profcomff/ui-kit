import type { Meta, StoryObj } from '@storybook/vue3-vite';
import { fn } from 'storybook/test';
import VuTag from './VuTag.vue';

const meta = {
  title: 'Viribus Unitis/VuTag',
  component: VuTag,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
    onClose: fn(),
    text: 'Тег',
    active: false,
    danger: false,
    closable: false,
    size: 24,
  },
  argTypes: {
    text: {
      control: 'text',
    },
    active: {
      control: 'boolean',
    },
    danger: {
      control: 'boolean',
    },
    closable: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: [24, 32],
    },
  },
} satisfies Meta<typeof VuTag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Механика',
  },
};

export const Active: Story = {
  args: {
    text: 'Механика',
    active: true,
  },
};

export const Danger: Story = {
  args: {
    text: 'Страйк',
    danger: true,
  },
};

export const Large: Story = {
  args: {
    text: 'Механика',
    size: 32,
  },
};

export const LargeActive: Story = {
  args: {
    text: 'Механика',
    size: 32,
    active: true,
  },
};


export const LargeClosable: Story = {
  args: {
    text: 'Механика',
    size: 32,
    closable: true,
  },
};
