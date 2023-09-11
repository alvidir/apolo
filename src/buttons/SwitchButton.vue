<script setup lang="ts">
interface Props {
  modelValue: boolean;
  disabled?: boolean;
  large?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  checked: false,
  color: "var(--color-accent)",
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
  <div class="switch-button" :class="{ large: large, disabled: disabled }">
    <label>
      <input
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        @change="onChange"
      />
      <span></span>
    </label>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "sass:math";
@import "styles.scss";

$switch-height: $fib-7 * 1px !default;
$switch-width: $FIB_RATIO * $switch-height !default;

.switch-button {
  position: relative;
  height: $switch-height;
  width: $switch-width;

  label {
    display: flex;
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
      /* Teal background */
      background: v-bind(color);
    }

    &:checked + span::before {
      border-color: v-bind(color);
      transform: translateX($switch-width - $switch-height);
    }
  }

  span {
    /* Vertically center the inner circle */
    position: relative;
    height: $switch-height;
    flex-basis: $switch-width;

    /* Make the container element rounded */
    border-radius: $switch-height;
    background: var(--color-border);

    /* In case the label gets long, the toggle shouldn't shrink. */
    flex-shrink: 0;

    &::before {
      content: "";
      position: absolute;

      /* Move a little bit the inner circle to the right */
      height: $switch-height - math.div($fib-5, 2) * 1px;
      width: $switch-height - math.div($fib-5, 2) * 1px;

      /* Make the inner circle fully rounded */
      border-radius: 9999px;
      background: var(--color-button);

      border: 2px solid var(--color-text-disabled);
    }
  }

  &.large {
    $switch-height: $fib-8 * 1px;
    $switch-width: $FIB_RATIO * $switch-height;

    height: $switch-height;
    width: $switch-width;

    input {
      &:checked + span::before {
        transform: translateX($switch-width - $switch-height);
      }
    }

    span {
      height: $switch-height;
      flex-basis: $switch-width;
      border-radius: $switch-height;

      &::before {
        height: $switch-height - math.div($fib-5, 2) * 1px;
        width: $switch-height - math.div($fib-5, 2) * 1px;
      }
    }
  }

  &:not(.disabled):hover span {
    &::before {
      background: var(--color-button-hover);
    }
  }
}

.disabled {
  span {
    background: var(--color-border-disabled);

    &::before {
      background: var(--color-button-disabled);
      border: 2px solid var(--color-border-disabled);
    }
  }

  input:checked + span {
    filter: brightness(80%);
    background: v-bind(color);
  }
}
</style>
