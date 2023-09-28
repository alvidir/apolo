<script setup lang="ts">
import DemoRow from "@/components/DemoRow.vue";

let switchButtonStatus = false;
</script>

<template>
    <demo-row>
        <template #info>
            <h1>Regular button</h1>
        </template>
        <a-button color="var(--color-submit)" large>
            <i class="bx bxs-bulb"></i>
            I'm a button
        </a-button>
    </demo-row>
    <demo-row>
        <template #info>
            <h1>Switch button</h1>
        </template>
        <switch-button v-model="switchButtonStatus">
            <i class="bx bxs-bulb"></i>
            I'm a button
        </switch-button>
    </demo-row>
</template>

<style lang="scss">
@import "apolo/styles.scss";

button {
    min-width: $fib-12 * 1px;
}
</style>
