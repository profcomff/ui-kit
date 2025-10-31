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
	<div class="vu-search" :class="{ hovered: isHovered, active: isActive }">
		<v-icon class="search-icon" icon="mdi-magnify" />
		<v-text-field
			v-model="innerValue"
			placeholder="Поиск"
			density="compact"
			variant="outlined"
			hide-details
			@mouseenter="isHovered = true"
			@mouseleave="isHovered = false"
			@mousedown="isActive = true"
			@mouseup="isActive = false"
			class="search-input"
		/>
		<v-icon class="filter-icon" icon="mdi-filter-variant" @click="emit('click-filter')" />
	</div>
</template>

<style scoped>
.vu-search {
	display: flex;
	align-items: center;
	border: 1px solid var(--v-theme-gray-4-text-border);
	border-radius: 8px;
	padding: 4px 8px;
	gap: 4px;
	transition:
		border-color 0.2s,
		border-width 0.2s;

	&.hovered {
		border-color: var(--v-theme-base-black);
		border-width: 1px;
	}

	&.active {
		border-color: var(--v-theme-base-black);
		border-width: 2px;
	}
}

.search-input {
	flex-grow: 1;
}

.filter-icon {
	cursor: pointer;
}
</style>
