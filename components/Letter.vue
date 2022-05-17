<template>
    <span :class="hintMap[colorState]">
        <slot />
    </span>
</template>

<script setup lang="ts">
    defineProps({
        colorState: String,
    })

    const hintMap = {
        0: 'bg-gray-200',
        1: 'bg-yellow-400',
        2: 'bg-green-500',
    }
</script>

<style lang="postcss" scoped>
    span {
        @apply block w-8 h-8 text-center font-bold uppercase
    }
</style>