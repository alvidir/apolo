<script setup lang="ts"></script>

<template>
    <div class="row">
        <div class="info"><slot name="info"></slot></div>
        <div class="demo"><slot></slot></div>
        <div class="primary demo">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import "apolo/styles.scss";

.parallelogram {
    // position: absolute;
    width: 100%;
    height: 100%;
    // transform: skew(-20deg);
    right: -5%;
    background: var(--color-background);
}

.row {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: $fib-12 * 1px;
    border-bottom: 1px solid;
    border-color: var(--color-border);

    & > div {
        width: 100%;
        height: 100%;

        &.info {
            flex: 2;
            color: var(--color-text);
        }

        &.demo {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        &.primary {
            background: var(--color-background);
        }
    }
}
</style>
