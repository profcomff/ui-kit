<script setup lang="ts">
// Определяем пропсы компонента
interface Props {
	text?: string;
}

// Объявляем пропсы
defineProps<Props>();

defineEmits<{
	click: [];
}>();
</script>

<template>
	<v-btn
		class="text-body-1 font-weight-bold"
		color="brand-orange-4-notif"
		text="Привет"
		@click="$emit('click')"
	></v-btn>
</template>

<style lang="css" scoped></style>
