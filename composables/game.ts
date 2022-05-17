export const useGameState = () => {
    const state = useCookie<GameState>('state', {
        default: () => []
    })
    // const state = [["guess", "00122"]];

    async function submitGuess(guess: string) {
        state.value = await $fetch('/api/guess', {
            method: 'POST',
            body: { guess }
        })
    }

    return { state, submitGuess }
}