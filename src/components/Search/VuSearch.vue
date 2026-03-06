<script setup lang="ts">
const modelValue = defineModel<string>();

defineEmits<{
	(e: 'update:modelValue', value: string): void;
	(e: 'click:filter'): void;
}>();

defineProps<{
	placeholder?: string;
}>();
</script>

<template>
	<v-text-field
		v-model="modelValue"
		class="text-body-1"
		:placeholder="placeholder"
		hide-details="auto"
		density="compact"
		variant="outlined"
		prepend-inner-icon="mdi-magnify"
		append-inner-icon="mdi-filter-variant"
		@click:append-inner="$emit('click:filter')"
	/>
</template>
