<template>
	<v-text-field
		v-model="model"
		class="vu-search text-body-1"
		variant="outlined"
		placeholder="Поиск преподавателя"
		density="compact"
		hide-details
		prepend-inner-icon="mdi-magnify"
		color="base-black"
		bg-color="base-white"
	>
		<template #append-inner>
			<v-btn class="vu-search__filter-btn" icon variant="text" size="small" @click="$emit('click:filter')">
				<v-icon icon="mdi-tune" />
			</v-btn>
		</template>
	</v-text-field>
</template>

<script setup lang="ts">
const model = defineModel<string>();

defineEmits<{
	(e: 'click:filter'): void;
}>();
</script>

<style lang="scss" scoped>
.vu-search {
	:deep(.v-field) {
		border-radius: 8px;
	}

	:deep(.v-icon) {
		font-size: 24px;
		height: 24px;
		width: 24px;
	}

	:deep(.v-input__prepend-inner .v-icon),
	:deep(.vu-search__filter-btn .v-icon) {
		color: var(--v-theme-gray-3-bg) !important;
	}

	:deep(input::placeholder) {
		color: var(--v-theme-gray-3-bg) !important;
		opacity: 1;
	}

	:deep(.v-field__outline) {
		--v-field-border-color: var(--v-theme-gray-3-bg);
		--v-field-border-opacity: 1;
		--v-field-border-width: 1px;
	}

	&:hover :deep(.v-field__outline) {
		--v-field-border-color: var(--v-theme-base-black);
	}

	&.v-input--is-focused {
		:deep(.v-field__outline) {
			--v-field-border-color: var(--v-theme-base-black);
			--v-field-border-width: 2px; /* Рамка в 2 раза толще */
		}

		:deep(.v-icon) {
			color: var(--v-theme-base-black) !important;
		}
	}
}
</style>
