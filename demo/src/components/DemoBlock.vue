<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const loading = ref(false)
const switchModel = ref(false)
const radioModel = ref(false)
const active = ref(false)
const large = ref(false)

watch(switchModel, (currentValue) => {
    if (!currentValue) return

    setTimeout(() => {
        switchModel.value = false
    }, 3000)
})

const load = () => {
    loading.value = true
    setTimeout(() => (loading.value = false), 5000)
}

const onRegularButtonClick = () => {
    active.value = !active.value
}

onMounted(() => {
    setTimeout(() => (large.value = true), 1000)
})
</script>

<template>
    <div class="demo-item">
        <submit-button @submit="load" :loading="loading" :disabled="switchModel" :large="large">
            <i class="bx bxs-bulb"></i>
            click me
        </submit-button>
    </div>
    <div class="demo-item">
        <regular-button
            @click="onRegularButtonClick"
            :active="active"
            :disabled="switchModel"
            :large="large"
        >
            <i class="bx bxs-cheese"></i>
            <label>click me &#9660;</label>
        </regular-button>
    </div>
    <div class="demo-item">
        <switch-button v-model="switchModel" :disabled="radioModel" :large="large"> </switch-button>
    </div>
    <div class="demo-item">
        <check-button v-model="radioModel" :disabled="switchModel" :large="large">
            Check me
        </check-button>
    </div>
</template>

<style lang="scss">
.demo-item {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
