<script setup lang="ts">
defineProps({
	text: { type: String },
	icon: { type: String },
	prependIcon: { type: String },
	disabled: { type: Boolean },
});
</script>

<template>
	<div class="d-flex flex-column ga-2">
		VuButtonPrimary
		<VuButtonPrimary :text="text" :icon="icon" :prepend-icon="prependIcon" :disabled="disabled" />

		VuButtonSecondary
		<VuButtonSecondary :text="text" :icon="icon" :prepend-icon="prependIcon" :disabled="disabled" />

		VuButtonTertiary
		<VuButtonTertiary :text="text" :icon="icon" :prepend-icon="prependIcon" :disabled="disabled" />

		VuButtonDanger
		<VuButtonDanger :text="text" :icon="icon" :prepend-icon="prependIcon" :disabled="disabled" />
	</div>
</template>
