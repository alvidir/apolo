<script setup lang="ts">
interface Props {
  modelValue: boolean;
  disabled?: boolean;
  large?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  color: "var(--color-green)",
});

interface Events {
  (e: "change", payload: Event): void;
  (e: "update:modelValue", payload: boolean): void;
}

const emit = defineEmits<Events>();

const onChange = (payload: Event) => {
  if (props.disabled) {
    return;
  }

  emit("update:modelValue", !props.modelValue);
  emit("change", payload);
};
</script>

<template>
  <div class="check-button" :class="{ large: large, disabled: disabled }">
    <label>
      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        @change="onChange"
      />
      <span></span>
      <slot></slot>
    </label>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "sass:math";
@import "styles.scss";

$check-height: $fib-7 * 1px !default;

.check-button {
  position: relative;
  height: $check-height;
  width: fit-content;
  color: var(--color-text-primary);

  label {
    display: flex;
    align-items: center;
    width: fit-content;
  }

  input {
    position: absolute;
    width: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;

    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;

    &:checked + span {
      border-color: v-bind(color);
      background: var(--color-button-active);
    }
  }

  span {
    border-radius: $check-height;
    height: $check-height - math.div($fib-7, 2) * 1px;
    width: $check-height - math.div($fib-7, 2) * 1px;
    border: 5px solid var(--color-border);
    background: var(--color-button);
    margin: 0px $fib-5 * 1px;
  }

  &.large {
    $check-height: $fib-8 * 1px;
    height: $check-height;

    span {
      height: $check-height - math.div($fib-7, 2) * 1px;
      width: $check-height - math.div($fib-7, 2) * 1px;
    }
  }

  &:not(.disabled):hover span {
    background: var(--color-button-hover);
  }
}

.disabled {
  color: var(--color-text-disabled);

  span {
    background: var(--color-button-disabled);
    border: 5px solid var(--color-border-disabled);
  }

  input:checked + span {
    filter: brightness(80%);
  }
}
</style>
