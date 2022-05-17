<template>
  <section>
    <header>
      <NuxtLink to="/" class="text-6xl font-bold text-gray-800">Wordlone</NuxtLink>
    </header>
    <main class="my-6">
      <NuxtPage />
    </main>
    <footer>
      Made with <span class="heart">❤</span> and <span class="coffee">☕</span> and a sprinkle of <span
        class="text-green-500">Nuxt</span>
    </footer>
  </section>
</template>

<style lang="postcss" scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>