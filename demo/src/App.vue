<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <header>
        <img
            alt="Vue logo"
            class="logo"
            src="/apolo.svg"
            width="125"
            height="125"
        />

        <!-- <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/buttons">Buttons</RouterLink>
            </nav>
        </div> -->
    </header>

    <RouterView />
</template>

<style lang="scss">
@import "apolo/styles.scss";

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
</style>
