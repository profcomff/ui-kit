<template>
	<div class="position-fixed d-flex flex-column ga-4 vu-toast-list">
		<VuToast
			v-for="toast of toastList"
			:key="toast.id"
			:title="toast.title"
			:description="toast.description"
			:type="toast.type"
			@close="$emit('delete', toast.id)"
		/>
	</div>
</template>

<script setup lang="ts">
import VuToast, { Toast } from './VuToast.vue';

defineProps<{ toastList: Toast[] }>();

defineEmits<{
	delete: [id: number];
}>();
</script>

<style lang="css" scoped>
.vu-toast-list {
	z-index: 999;
	bottom: 72px;
	left: 50%;
	transform: translate(-50%);
}
</style>
