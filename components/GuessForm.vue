<template>
    <form @submit.prevent="() => emit('guess', guess)">
        <label>
            Your Guess
            <input v-model="guess" type="text" minlength="5" maxlength="5">
        </label>
    </form>
</template>

<script setup lang="ts">

    const emit = defineEmits<{(event: 'guess', guess)}>()
    const guess = ref('')
</script>