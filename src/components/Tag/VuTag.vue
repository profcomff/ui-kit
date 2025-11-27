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
  </v-chip>
</template>

<style scoped>
.vu-tag-active {
  background-color: rgb(var(--v-theme-primary));
  color: rgb(var(--v-theme-on-primary));
}

.vu-tag-danger {
  background-color: rgb(var(--v-theme-error));
  color: rgb(var(--v-theme-on-error));
}
</style>