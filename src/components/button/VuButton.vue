<script setup lang="ts">
// Определяем пропсы компонента
interface Props {
	text?: string;
}

// Объявляем пропсы
defineProps<Props>();
</script>

<template>
	<v-btn class="text-body-1 font-weight-bold" color="brand-orange-4-notif" :text="text"></v-btn>
</template>

<style lang="css" scoped></style>
