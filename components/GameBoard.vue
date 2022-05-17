<template>
    <article>
        <ul>
            <li class="flex gap-3 my-3" v-for="[guess, hint] in state">
                <Letter v-for="(letter, i) in guess" :color-state="hint[i]">{{ letter }}</Letter>
            </li>
        </ul>
    </article>
</template>

<script setup lang="ts">
    defineProps({
        state: Array as () => GameState
    })
</script>
