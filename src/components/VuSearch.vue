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

<style scoped>
.vu-search {
	width: 375px;
}
/* stylelint-disable selector-class-pattern */

/* Стилизация иконок */
.vu-search ::v-deep(.v-input__icon--prepend-inner .v-icon),
.vu-search ::v-deep(.v-input__icon--append-inner .v-icon) {
	color: var(--v-theme-gray-4-text-border);
}

/* Стилизация черной рамки в состоянии 'active' (focus) */
.vu-search.v-field--focused ::v-deep(.v-field__outline) {
	color: var(--v-theme-base-black);
}
/* stylelint-enable selector-class-pattern */
</style>
