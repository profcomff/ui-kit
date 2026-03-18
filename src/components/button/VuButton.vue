<script setup lang="ts">
import { ExtractPropTypes } from 'vue';
import { VBtn } from 'vuetify/components';

type VBtnProps = ExtractPropTypes<typeof VBtn>;
type BtnRole = 'primary' | 'secondary' | 'tertiary' | 'danger';

interface Props extends /* @vue-ignore */ Omit<VBtnProps, 'color' | 'variant' | 'rounded'> {
	role?: BtnRole;
}

const props = withDefaults(defineProps<Props>(), {
	role: 'primary',
});

const roleConfig: Record<BtnRole, { variant: 'flat' | 'tonal'; color: string }> = {
	primary: { variant: 'flat', color: 'primary' },
	secondary: { variant: 'tonal', color: 'primary' },
	tertiary: { variant: 'tonal', color: 'gray-1' },
	danger: { variant: 'tonal', color: 'danger' },
};
</script>

<template>
	<v-btn
		class="text-caption font-weight-bold"
		density="compact"
		rounded="lg"
		v-bind="$attrs"
		:color="roleConfig[props.role].color"
		:variant="roleConfig[props.role].variant"
	>
	</v-btn>
</template>

<style lang="css">
.v-btn--icon.v-btn--density-compact {
	width: calc(var(--v-btn-height) + -12px) !important;
	height: calc(var(--v-btn-height) + -12px) !important;
}
</style>
