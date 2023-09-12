<script setup lang="ts">
interface Props {
    disabled?: boolean;
    large?: boolean;
    active?: boolean;
    color?: string;
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
        class="regular rounded"
        :class="{
            large: large,
            disabled: disabled,
            active: active,
            color: color,
        }"
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
    color: var(--color-text) !important;

    &.large {
        height: $fib-9 * 1px;
    }

    &:not(.disabled) {
        // &:not(.off):hover {
        //     background: var(--color-button-hover);
        //     border-color: var(--color-border-hover);
        // }

        // &.active {
        //     background: var(--color-button-active) !important;
        //     border-color: var(--color-border-active) !important;
        // }

        &:hover {
            background-position: left;
            border-color: var(--color-border-hover) !important;
        }

        &.color:hover {
            $color: v-bind(color);
            $shift-x: $fib-3 * 1px;
            $shift-y: $fib-3 * 1px;
            $opacity: $fib-3 * 0.1;
            $blur: 0px;

            -webkit-box-shadow: $shift-x $shift-y $blur 0px $color !important;
            -moz-box-shadow: $shift-x $shift-y $blur 0px $color !important;
            box-shadow: $shift-x $shift-y $blur 0px $color !important;
        }

        border-color: var(--color-border);
        color: var(--color-text);

        /* "to left" / "to right" - affects initial color */
        background: linear-gradient(
                to left,
                transparent 50%,
                var(--color-button-hover) 50%
            )
            right;
        background-size: 200%;
        transition: $slower-fade;
    }

    i {
        color: var(--color-text);
    }
}
</style>
