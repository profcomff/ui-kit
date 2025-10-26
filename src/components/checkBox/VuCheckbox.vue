<script setup lang="ts">
import { computed } from 'vue';

    interface Props {
        disabled: boolean;
        modelValue: boolean;
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
        label="Оценок нет" 
        v-model="value"
        :disabled="disabled"> 
    </v-checkbox>
</template>
