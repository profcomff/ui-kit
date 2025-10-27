<script setup lang="ts">
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
