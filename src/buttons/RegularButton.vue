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
        class="regular"
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

<style scoped lang="scss">
@import "styles.scss";

button.regular {
    @extend .rounded;

    width: fit-content;
    padding-left: $fib-6 * 1px;
    padding-right: $fib-6 * 1px;
    color: var(--color-text);
    position: relative;

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

        border-color: var(--color-border);
        color: var(--color-text);

        /* "to left" / "to right" - affects initial color */
        background: linear-gradient(
                to left,
                var(--color-button) 50%,
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

button.regular.color {
    &::after {
        @extend .rounded;

        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;

        transform: translateX($fib-4 * 1px) translateY($fib-4 * 1px);
        transition: $slower-fade !important;
    }

    &:not(:active)::after {
        background: v-bind(color);
        transform: translateX($fib-4 * 1px) translateY($fib-4 * 1px);
        opacity: 0%;
    }

    &:active::after,
    &:hover::after {
        opacity: 100%;
    }

    &:active::after {
        background-size: $fib-7 * 1px $fib-7 * 1px;
        background-image: linear-gradient(
            45deg,
            v-bind(color) 25%,
            transparent 25%,
            transparent 50%,
            v-bind(color) 50%,
            v-bind(color) 75%,
            transparent 75%,
            transparent
        );

        animation: barberpole $fib-6 * 0.1s linear infinite;
    }
}

@keyframes barberpole {
    from {
        background-position: 0 0;
    }
    to {
        background-position: 100px;
    }
}
</style>
