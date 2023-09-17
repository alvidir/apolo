<script setup lang="ts">
interface Props {
    disabled?: boolean;
    loading?: boolean;
    active?: boolean;
    large?: boolean;
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
    <div class="regular-button-container">
        <button
            class="regular"
            :disabled="loading"
            :class="{
                disabled: disabled,
                loading: loading,
                active: active,
                large: large,
                color: color,
            }"
            @click="onClick"
        >
            <slot></slot>
        </button>
    </div>
</template>

<style lang="scss">
@import "styles.scss";

.regular-button-container {
    /* create a new stacking context */
    position: relative;
    z-index: 1;
}

button.regular {
    @extend .rounded;

    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: $fib-8 * 1px;
    border: $fib-1 * 1px solid;
    padding-left: $fib-6 * 1px;
    padding-right: $fib-6 * 1px;
    color: var(--color-text);
    white-space: nowrap;
    font-size: medium;
    outline: none;

    &.large {
        height: $fib-9 * 1px;
    }

    &.disabled {
        border-color: var(--color-border-disabled);
        background: var(--color-button-disabled);
        color: var(--color-text-disabled);

        i {
            color: var(--color-text-disabled);
        }
    }

    &:not(.disabled) {
        &:hover,
        &.active,
        &.loading {
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
        font-size: medium;

        $padding: $fib-6 * 1px;

        &:first-child {
            padding-right: $padding;
        }
    }

    &:not(.disabled).color {
        &::after {
            @extend .rounded;

            content: "";
            width: 100%;
            height: 100%;
            transition: $slower-fade !important;

            /* create a new stacking context */
            position: absolute;
            z-index: -1; /* to be below the parent element */
        }

        $background: v-bind(color);
        &:not(.loading)::after {
            background: $background;
            opacity: 0%;
        }

        &.loading::after,
        &.active::after,
        &:hover::after {
            opacity: 100%;
            transform: translateX($fib-4 * 1px) translateY($fib-4 * 1px);
        }

        &.loading::after {
            background-size: $fib-7 * 1px $fib-7 * 1px;
            background-image: linear-gradient(
                45deg,
                $background 25%,
                transparent 25%,
                transparent 50%,
                $background 50%,
                $background 75%,
                transparent 75%,
                transparent
            );

            animation: barberpole $fib-6 * 0.1s linear infinite;
        }
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
