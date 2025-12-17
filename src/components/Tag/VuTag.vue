<script setup lang="ts">
defineProps<{
	text: string;
	active?: boolean;
	danger?: boolean;
	closable?: boolean;
	size?: 24 | 32;
}>();

defineEmits<{
	(e: 'click'): void;
	(e: 'close'): void;
}>();
</script>

<template>
	<v-chip
		class="text-body-2"
		:color="active ? 'primary' : danger ? 'error' : 'surface-variant'"
		:class="{
			'vu-tag-active': active,
			'vu-tag-danger': danger,
		}"
		:size="size === 24 ? 'small' : 'default'"
		:closable="closable"
		@click="$emit('click')"
		@click:close="$emit('close')"
	>
		{{ text }}
		<template v-if="closable" #close>
			<v-icon icon="mdi-close" size="16" @click.stop="$emit('close')" />
		</template>
	</v-chip>
</template>

<style scoped>
.vu-tag {
	color: rgb(0 0 0 / 100%) !important;
}

.vu-tag-active,
.vu-tag-danger {
	color: rgb(255 255 255) !important;
}

.vu-tag-active {
	background-color: rgb(var(--v-theme-primary));
	color: rgb(var(--v-theme-on-primary));
}

.vu-tag-danger {
	background-color: rgb(var(--v-theme-alert-1));
	color: rgb(var(--v-theme-on-error));
}
</style>
