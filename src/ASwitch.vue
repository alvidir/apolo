<script setup lang="ts">
interface Props {
    modelValue: boolean;
    disabled?: boolean;
    color?: string;
}

const props = withDefaults(defineProps<Props>(), {
    checked: false,
    color: "var(--color-accent)",
});

interface Events {
    (e: "change", payload: Event): void;
    (e: "update:modelValue", payload: boolean): void;
}

const emit = defineEmits<Events>();

const onChange = (payload: Event) => {
    if (props.disabled) {
        return;
    }

    emit("update:modelValue", !props.modelValue);
    emit("change", payload);
};
</script>

<template>
    <div class="a-switch fade slowly" :class="{ disabled: disabled }">
        <label>
            <input
                type="checkbox"
                :checked="modelValue"
                :disabled="disabled"
                @change="onChange"
            />
            <span class="rounded fade slowly"></span>
        </label>
    </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use "sass:math";
@import "styles/index.scss";

.a-switch {
    $switch-height: $fib-7 * 1px !default;
    $switch-width: $FIB_RATIO * $switch-height !default;

    position: relative;
    height: $switch-height;
    width: $switch-width;

    label {
        display: flex;
        width: fit-content;
    }

    input {
        position: absolute;
        width: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;

        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border-width: 0;

        &:checked + span {
            /* Teal background */
            // background-position: left;
            background-color: v-bind(color);
            border: 1px v-bind(color) solid !important;
        }

        &:checked + span::before {
            border-color: v-bind(color);
            transform: translateX($switch-width - $switch-height);
        }
    }

    span {
        /* Vertically center the inner circle */
        position: relative;
        height: $switch-height;
        flex-basis: $switch-width;

        border: 1px var(--color-border) solid;

        /* "to left" / "to right" - affects initial color */
        // background: linear-gradient(
        //         to left,
        //         var(--color-border) 50%,
        //         v-bind(color) 50%
        //     )
        //     right;

        // background-size: 200%;
        background-color: var(--color-border);

        /* In case the label gets long, the toggle shouldn't shrink. */
        flex-shrink: 0;

        &::before {
            @extend .rounded, .fade, .slowly;

            content: "";
            position: absolute;

            /* Move a little bit the inner circle to the right */
            height: $switch-height - math.div($fib-5, 2) * 1px;
            width: $switch-height - math.div($fib-5, 2) * 1px;

            background: var(--color-button);
            border: 2px solid var(--color-border);

            transition-property: background, border-color, transform;
        }
    }

    &:not(.disabled):hover span {
        border: 1px var(--color-border-hover) solid;

        &::before {
            background: var(--color-button-hover);
        }
    }
}

.disabled {
    span {
        background: var(--color-border-disabled);
        border-color: var(--color-border-disabled);

        &::before {
            background: var(--color-button-disabled);
            border: 2px solid var(--color-border-disabled);
        }
    }

    input:checked + span {
        filter: brightness(80%);
        background: v-bind(color);
    }
}
</style>
