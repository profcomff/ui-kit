<template>
	<div class="d-flex align-center ga-4 bg-base-white rounded-sm">
		<v-icon :icon="icon" />
		<div class="description">
			<p class="font-weight-bold">{{ props.title }}</p>
			<p>{{ props.description }}</p>
		</div>
		<v-btn type="button" density="compact" icon="mdi-close" variant="plain" @click="$emit('close')" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
	title: string;
	description?: string;
	type: 'success' | 'error' | 'info';
}>();

const icon = computed(() => {
	switch (props.type) {
		case 'success':
			return 'mdi-check';
		case 'error':
			return 'mdi-alert';
		case 'info':
		default:
			return 'mdi-information-outline';
	}
});

defineEmits<{
	close: [];
}>();
</script>

<style lang="css" scoped></style>
