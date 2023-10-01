<script setup lang="ts">
import ACard from "./ACard.vue";
</script>

<template>
    <div id="container">
        <a-card>
            <template #header>this is a header</template>
            <span>this is a body</span>
            <template #footer>this is a footer</template>
        </a-card>
    </div>
</template>

<style lang="scss">
@import "./styles/index.scss";

* {
    margin: 0;
    padding: 0;
    font-family: "Courier Prime", monospace;
}

html {
    @extend .theme-light;
    background: var(--color-background-secondary);
}

body {
    min-height: 100vh;
    width: 100%;
}

#app {
    height: 100vh;
}

#container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: $fib-5 * 1px;
    box-sizing: border-box;
    position: relative;
}

.a-card {
    height: 200px;

    .header {
        background: red;
        height: 50px;
    }
}
</style>
