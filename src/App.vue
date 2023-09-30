<script setup lang="ts">
import { ref } from "vue";
import ASwitch from "./ASwitch.vue";

const onoff = ref(false);
</script>

<template>
    <div id="container">
        <a-switch v-model="onoff"> </a-switch>
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
    @extend .theme-dark;
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
</style>
