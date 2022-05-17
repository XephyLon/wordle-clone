<template>
    <article>
        <ul>
            <li v-for="[guess, hint] in state">
                <span v-for="(letter, i) in guess" :class="hintMap[hint[i]]">{{ letter }}</span>
            </li>
        </ul>
    </article>
</template>

<script setup lang="ts">
    defineProps({
        state: Array as () => GameState
    })

    const hintMap = {
        0: '',
        1: 'yellow',
        2: 'green',
    }
</script>

<style lang="scss">
    .yellow {
        color: yellow;
    }

    .green {
        color: green;
    }
</style>
