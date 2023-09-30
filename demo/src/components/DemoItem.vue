<script setup lang="ts"></script>

<template>
    <a-card>
        <template #header><slot name="info"></slot></template>
        <template #footer><slot name="controls"></slot></template>
        <div class="item rounded"><slot></slot></div>
    </a-card>
</template>

<style scoped lang="scss">
@import "apolo/styles.scss";

.parallelogram {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: skew(-20deg);
    right: -5%;
    background: var(--color-background);
}

.a-card {
    position: relative;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid;
    border-color: var(--color-border);
    width: fit-content;
    max-width: $fib-13 * 1px;
    min-width: fit-content;
    text-overflow: wrap;

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
        padding: $fib-7 * 1px;
    }
}
</style>
