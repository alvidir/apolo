<script setup lang="ts">
import RegularButton from "./buttons/RegularButton.vue";
</script>

<template>
    <regular-button color="var(--color-submit)" large>
        I'm a button
    </regular-button>
</template>

<style lang="scss">
@import "./styles/index.scss";

* {
    margin: 0;
    padding: 0;
    font-family: "Courier Prime", monospace;
}

html {
    @extend .theme-dark;
    background: var(--color-background);
}

body {
    min-height: 100vh;
    width: 100%;
    background: var(--color-bg-secondary);
}

#app {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: $fib-5 * 1px;
    box-sizing: border-box;
}

button.regular {
    min-width: $fib-13 * 1px;
}
</style>
