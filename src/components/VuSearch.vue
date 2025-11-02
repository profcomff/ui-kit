<script setup lang="ts">
import { ref, computed } from 'vue';

const props = defineProps<{
	modelValue: string;
}>();

const emit = defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'click-filter'): void;
}>();

const innerValue = computed({
	get: () => props.modelValue,
	set: (val: string) => emit('update:modelValue', val),
});

const isHovered = ref(false);
const isActive = ref(false);
</script>

<template>
	<v-text-field
		v-model="innerValue"
		placeholder="Поиск преподавателя"
		hide-details
		density="compact"
		variant="outlined"
		class="vu-search text-body-1"
		prepend-inner-icon="mdi-magnify"
		append-inner-icon="mdi-filter-variant"
		color="gray-4-text-border"
		@click:append-inner="emit('click-filter')"
		@mouseenter="isHovered = true"
		@mouseleave="isHovered = false"
		@mousedown="isActive = true"
		@mouseup="isActive = false"
	/>
</template>

<style scoped>
.vu-search {
	width: 375px;
	height: 41px;
	border-radius: 8px;
	border: 1px solid var(--v-theme-gray-4-text-border); /* default #949494 */
	transition:
		border-color 0.2s,
		border-width 0.2s;

	&:hover {
		border-color: var(--v-theme-base-black);
		border-width: 1px;
	}

	&:active {
		border-color: var(--v-theme-base-black);
		border-width: 2px;
	}
}
</style>
