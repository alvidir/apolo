<script setup lang="ts">
import DemoRow from "@/components/DemoRow.vue";
</script>

<template>
    <demo-row>
        <template #info>
            <h1>Regular button</h1>
        </template>
        <regular-button color="var(--color-submit)" large>
            I'm a button
        </regular-button>
    </demo-row>
</template>

<style lang="scss">
@import "apolo/styles.scss";

button.regular {
    min-width: $fib-13 * 1px;
    // font-weight: 700;
    font-family: "Courier Prime", monospace;
}
</style>
