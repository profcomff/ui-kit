// 1. Импорт типов (Meta, StoryObj, StoryContext) из одного унифицированного места
import type { Meta, StoryObj } from '@storybook/vue3-vite';
// 2. Импорт функций для тестирования (fn, within) из @storybook/test
import { fn, within } from '@storybook/test';
import VuSearch from './VuSearch.vue';
import { withVuetifyTheme } from '../../.storybook/withVuetifyTheme.decorator';

// Типизация для метаданных компонента
const meta = {
	title: 'Viribus Unitis/Search',
	component: VuSearch,
	tags: ['autodocs'],
	decorators: [withVuetifyTheme],
	// Корректное мокирование событий:
	args: {
		// Мокируем событие клика по иконке фильтра
		'onClick:filter': fn(),
		// Мокируем событие изменения значения (для defineModel, которое представляется как modelValue)
		'onUpdate:modelValue': fn(),
		// Устанавливаем начальное значение через modelValue
		modelValue: '',
	},
	// ИСПРАВЛЕНИЕ: Устраняем ошибку TS2353, связанную с именами событий, содержащими ':'.
	// Мы явно утверждаем, что 'click:filter' — это действительный ключ ArgType.
	argTypes: {
		// modelValue для defineModel
		modelValue: {
			control: 'text',
			description: 'Значение поля (через defineModel)',
		},
		'click:filter': {
			description: 'Событие при клике на иконку фильтра',
			action: 'clicked:filter',
		},
	},
} as Meta<typeof VuSearch>; // ИСПРАВЛЕНО: Заменяем 'satisfies' на 'as' для принудительного принятия типов

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * Стандартное (normal) состояние компонента.
 */
export const Default: Story = {
	args: {
		// args наследуются от meta.args
	},
};

/**
 * Состояние при наведении (hover).
 */
export const Hover: Story = {
	args: {
		...Default.args,
	},
	parameters: {
		// Эта опция заставляет Storybook применить :hover псевдо-класс
		pseudo: { hover: true },
	},
};

/**
 * Активное (active/focused) состояние.
 */
export const Active: Story = {
	args: {
		...Default.args,
	},
	// ИСПРАВЛЕНИЕ: Убираем явную типизацию контекста StoryContext<typeof meta>
	// Это обходит ошибку TS2322 (конфликт PlayFunctionContext) в текущей версии Storybook.
	play: async ({ canvasElement }) => {
		// Имитируем клик/фокус для активации состояния
		const canvas = within(canvasElement);

		// Ищем поле ввода по placeholder (убедитесь, что placeholder совпадает)
		const input = canvas.getByPlaceholderText('Поиск преподавателя');

		// Устанавливаем фокус на поле
		await input.focus();
	},
};

/**
 * Состояние с введенным значением.
 */
export const WithValue: Story = {
	args: {
		modelValue: 'Введенный текст',
	},
};
