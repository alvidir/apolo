<script setup lang="ts">
import { computed } from "vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";

interface Props {
  large?: boolean;
  loading?: boolean;
  disabled?: boolean;
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  color: "var(--color-green)",
});

interface Events {
  (e: "submit", payload: MouseEvent): void;
}

const emit = defineEmits<Events>();

const onClick = (payload: MouseEvent) => {
  if (props.disabled || props.loading) {
    return;
  }

  emit("submit", payload);
};

const spinnerColor = computed((): string => {
  return props.disabled ? "var(--color-text-disabled)" : "var(--color-white)";
});
</script>

<template>
  <button
    class="submit round-corners fib-5"
    :class="{ disabled: disabled, off: loading, large: large }"
    @click="onClick"
  >
    <slot v-if="!loading"></slot>
    <div v-else>
      <slot name="spinner">
        <pulse-loader
          class="pulse-loader"
          :size="'8px'"
          :radius="'5px'"
          :color="spinnerColor"
        ></pulse-loader>
      </slot>
    </div>
  </button>
</template>

<style lang="scss">
@import "styles.scss";

button.submit {
  width: 100%;
  color: var(--color-white);
  padding-left: $fib-7 * 1px;
  padding-right: $fib-7 * 1px;

  &.large {
    height: $fib-9 * 1px !important;
    font-size: 1rem !important;
  }

  &:not(.disabled) {
    &:not(.off):hover {
      background: color-mix(in srgb, v-bind(color) 85%, white);
    }

    border-color: v-bind(color);
    background: v-bind(color);
  }

  .pulse-loader {
    opacity: $fib-9 * 1%;
  }
}
</style>
