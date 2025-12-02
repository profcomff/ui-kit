<script setup lang="ts">
import { PropType } from 'vue';

type VariantType = "outlined" | "filled" | "underlined" | "plain" | "solo" | "solo-inverted" | "solo-filled"
type Rule = (value: any) => string | boolean;

defineProps({
	message: {
		type: String,
		default: ""
	},
	color: {
		type: String,
		default: "#000000"
	},
	variant: {
		type: String as PropType<VariantType>,
		default: ""
	},
	placeholder: {
		type: String,
		default: ""
	},
	autofocus: {
		type: Boolean,
		default: false
	},
	rules: {
		type: Array as PropType<Rule[]>,
		default: () => []
	}
});

defineEmits(['update:modelValue']);
</script>

<template>
	<v-text-field
		max-width="348px"
		type="input"
		:label="message"
		:color="color"
		:variant="variant || undefined"
		:placeholder="placeholder"
		:autofocus="autofocus"
		:rules="rules"
	>
	</v-text-field>
</template>