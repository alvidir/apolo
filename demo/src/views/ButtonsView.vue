<script setup lang="ts">
import { ref } from "vue";
import DemoItem from "@/components/DemoItem.vue";
import { AButton } from "apolo";

const aButtonProps = ref({
    color: "var(--color-submit)",
});

const aSwitchProps = ref({
    vModel: false,
});
</script>

<template>
    <demo-item>
        <a-button v-bind="aButtonProps">
            <i class="bx bxs-bulb"></i>
            I'm a button
        </a-button>
        <template #info>
            <span>AButton</span>
            <p class="secondary">A general purpose button.</p>
        </template>
    </demo-item>
    <demo-item>
        <a-switch v-bind="aSwitchProps"> </a-switch>
        <template #info>
            <span>ASwitch</span>
            <p class="secondary">A switch like button.</p>
        </template>
    </demo-item>
</template>

<style lang="scss">
@import "apolo/styles.scss";

button {
    min-width: $fib-12 * 1px;
}
</style>
