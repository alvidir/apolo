<script setup lang="ts"></script>

<template>
    <a-card>
        <template #header>
            <div class="item rounded top-only"><slot></slot></div>
        </template>
        <slot name="info"></slot>
    </a-card>
</template>

<style lang="scss">
@import "apolo/styles.scss";

.a-card {
    // position: relative;
    // display: flex;
    // flex-direction: row;
    // width: fit-content;
    // min-width: fit-content;
    max-width: $fib-13 * 1px;
    // text-overflow: wrap;

    .header {
        padding: 0px !important;
    }

    .body,
    .footer {
        padding: $fib-6 * 1px !important;
    }

    .item {
        $dot-color: var(--color-border);
        $size: $fib-6 * 1px;

        display: flex;
        justify-content: center;

        background: var(--color-background-secondary);
        background-image: radial-gradient(
            var(--color-border) 1px,
            transparent 0
        );
        background-size: $size $size;
        padding: $fib-8 * 1px;
    }
}
</style>
