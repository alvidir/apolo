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

    <section>
        <RouterView />
    </section>
</template>

<style lang="scss">
@import "apolo/styles.scss";

* {
    font-family: "Courier Prime", monospace;
}

html {
    @extend .theme-light;
    background: var(--color-background-secondary);
}

body {
    min-height: 100vh;
    width: 100%;
    background: var(--color-bg-secondary);
    margin: 0;
    padding: 0;
}

#app {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    padding: $fib-5 * 1px;
    box-sizing: border-box;
}

section {
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    gap: $fib-6 * 1px;
    width: 100%;
}
</style>
