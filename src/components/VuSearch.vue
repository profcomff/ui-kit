<script setup lang="ts">
const modelValue = defineModel<string>();

defineEmits<{
	(e: 'click'): [];
}>();
</script>

<template>
	<v-text-field
		v-model="modelValue"
		class="vu-search text-body-1"
		placeholder="Поиск преподавателя"
		hide-details
		density="compact"
		variant="outlined"
		prepend-inner-icon="mdi-magnify"
		append-inner-icon="mdi-filter-variant"
		@click:append-inner="$emit('click')"
	/>
</template>

<style lang="css" scoped>
.vu-search {
	width: 375px;
}
</style>
