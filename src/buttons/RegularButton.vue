<script setup lang="ts">
interface Props {
  disabled?: boolean;
  large?: boolean;
  active?: boolean;
}

const props = defineProps<Props>();

interface Events {
  (e: "click", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const onClick = (payload: MouseEvent) => {
  if (props.disabled) {
    return;
  }

  emit("click", payload);
};
</script>

<template>
  <button
    class="regular round-corners"
    :class="{ large: large, disabled: disabled, active: active }"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<style lang="scss">
@import "styles.scss";

button.regular {
  width: fit-content;
  padding-left: $fib-6 * 1px;
  padding-right: $fib-6 * 1px;

  &.large {
    height: $fib-9 * 1px;
  }

  &:not(.disabled) {
    &:not(.off):hover {
      background: var(--color-button-hover);
      border-color: var(--color-border-hover);
    }

    &.active {
      background: var(--color-button-active) !important;
      border-color: var(--color-border-active) !important;
    }

    border-color: var(--color-border);
    background: var(--color-button);
    color: var(--color-text-primary);
  }

  i {
    color: var(--color-text-secondary);
  }
}
</style>
