<script setup lang="ts">
import { useSlots } from "vue";

interface Props {
    color?: string;
    background?: string;
}

defineProps<Props>();
const slots = useSlots();
</script>

<template>
    <div class="a-card">
        <div
            :class="{
                background: background,
                color: color,
            }"
        >
            <div v-if="slots.header" class="header">
                <slot name="header"></slot>
            </div>
            <div class="body"><slot></slot></div>
            <div v-if="slots.footer" class="footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import "styles/index.scss";

.a-card {
    /* create a new stacking context */
    position: relative;
    z-index: 1;
}

.a-card > div {
    @extend .rounded;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--color-background);
    border: 1px solid var(--color-border);

    & > .header,
    & > .body,
    & > .footer {
        padding: $fib-4 * 1px;
    }

    &.background {
        background: v-bind(background);
    }

    &::after {
        @extend .rounded;

        content: "";
        width: 100%;
        height: 100%;
        transition: $slower-fade !important;
        opacity: 0%;

        /* create a new stacking context */
        position: absolute;
        z-index: -1; /* to be below the parent element */
    }

    &.color::after {
        opacity: 100%;
        background: v-bind(color);
        transform: translateX($fib-4 * 1px) translateY($fib-4 * 1px);
    }
}
</style>
