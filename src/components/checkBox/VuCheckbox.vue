<script setup lang="ts">
import { computed } from 'vue';

    interface Props {
        disabled: boolean;
        modelValue: boolean;
        label: string;
    }
    const props = defineProps<Props>();
    const emit = defineEmits(['update:modelValue'])

    const value = computed({
        get: () => props.modelValue,
        set: (value) => emit('update:modelValue', value)
    })
</script>

<template>
	<v-checkbox 
        density="compact"
        :label="label" 
        v-model="value"
        :disabled="disabled"> 
    </v-checkbox>
</template>
