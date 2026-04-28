<template>
	<div class="d-flex align-center ga-5 px-5 py-2.5 bg-base-white rounded-sm w-auto vu-toast">
		<v-icon :icon="icon" />
		<div>
			<p class="font-weight-bold">{{ props.title }}</p>
			<p>{{ props.description }}</p>
		</div>
		<v-btn type="button" density="compact" icon="mdi-close" variant="plain" @click="$emit('close')" />
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

export type Toast = {
	id: number;
	title: string;
	description?: string;
	type: 'success' | 'error' | 'info';
};

const props = defineProps<Omit<Toast, 'id'>>();

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

<style lang="css" scoped>
.vu-toast {
	box-shadow: 0 0 20px rgb(0 0 0 / 10%);
}
</style>
