<script setup lang="ts">
defineProps({
	modelValue: {
		type: Boolean,
		default: false,
	},
	label: String,
	disabled: Boolean,
});

defineEmits(['update:modelValue']);
</script>

<template>
	<v-checkbox
		density="compact"
		:label="label"
		:model-value="modelValue"
		@update:model-value="$emit('update:modelValue', $event)"
		:disabled="disabled"
	>
	</v-checkbox>
</template>
