<template>
    <section>
        <h1>Playing Game Now</h1>
        <GameBoard :state="state" />
        <GuessForm @guess="submitGuess" />
    </section>
</template>

<script setup lang="ts">
    const { state, submitGuess } = useGameState()
</script>