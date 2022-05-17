export const useGameState = () => {
    const state = useCookie<GameState>('state', {
        default: () => []
    })

    async function submitGuess(guess: string) {
        state.value = await $fetch('/api/guess', {
            method: 'POST',
            body: { guess }
        })
    }

    return { state, submitGuess }
}