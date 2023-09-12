<script setup lang="ts">
import DemoBlock from '@/components/DemoBlock.vue'
</script>

<template>
    <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet" />
    <div id="app">
        <div class="demo-set light">
            <div class="demo-subset bg-secondary">
                <demo-block></demo-block>
            </div>
            <div class="demo-subset bg-primary">
                <demo-block></demo-block>
            </div>
        </div>
        <div class="demo-set dark">
            <div class="demo-subset bg-secondary">
                <demo-block></demo-block>
            </div>
            <div class="demo-subset bg-primary">
                <demo-block></demo-block>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@import 'apolo/index.scss';

* {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', Helvetica, Arial, sans-serif;
}

#app {
    display: flex;
    flex-direction: row;
    width: 100%;
}

body {
    position: relative;
    min-height: 100vh;
    width: 100%;
}

.demo-set {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;

    &.light {
        @extend .theme-light;
    }

    &.dark {
        @extend .theme-dark;
    }

    .demo-subset {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 50%;

        &.bg-primary {
            background-color: var(--color-bg-primary) !important;
        }

        &.bg-secondary {
            background-color: var(--color-bg-secondary) !important;
        }
    }
}
</style>
